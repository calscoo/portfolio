---
title: "Changing the LG TV screens everyone says you can't"
date: 2026-11-23
draft: false
summary: "My own photos on an LG TV's no-signal screen and screensaver, and my own logo when it turns off. Every forum says it can't be done. It can, with a rooted TV and a few bind mounts."
---

I've used a 42" LG OLED C3 as the main display at my desk for a while now, and the one thing I've always wanted is to see my own photos when it sits idle, instead of LG's built-in art. Every thread and article I found said that wasn't possible.

With a little elbow grease, turns out you can. My photos now show on three of the TV's screens:

* **The no-signal screen.** The slideshow of paintings LG shows when the device on an HDMI input is off.
* **The screensaver.** The one that starts after the TV sits idle on the home screen or in an app.
* **The power-off screen.** The LG logo that flashes for a moment when you turn the TV off. Mine shows my own logo now.

## LG doesn't want you

Part of the reason is burn-in. Leave a bright, still image on an OLED long enough and it can wear the panel unevenly. That's fair, but LG's own paintings are bright too, and they change every 10 seconds. My photos change just as often.

Frankly, it's my TV. I paid for it, and I should get to decide what it shows when I'm not using it. LG has a different idea of who it belongs to. The home screen carries ads. A feature called Live Plus recognizes what's on the screen so LG can target those ads, and turning it off means digging through the settings. Every firmware update closes the hole people used to root, so owners who want control have to block updates to keep it. Right to repair started with tractors and phones, but the idea is the same: if you own it, you should be able to open it up.

That's not a reason to give up a great panel. It's a reason to take it back.

Taking it back does require root. I won't cover rooting here, because others already have. Once you're rooted, you get Homebrew Channel, the apps people have built for it, and a root shell on the TV. Homebrew Channel already has screensaver apps, but they replace one screen: the screensaver you get on the home screen after the TV sits idle. The screen I actually saw every day was a different one. The paintings that show up when an HDMI input has no signal come from LG's input app, not from the screensaver.

That input app is the hard part. The TV doesn't start it from its files at boot. It restores it from a snapshot of the running process that LG made at the factory, so editing its code does nothing. I confirmed that the slow way.

## Do it anyway

The input app can't change, but the files it reads can. It shows a random one of 16 fixed images, `modernart_0.jpg` to `modernart_15.jpg`, from one folder, every 10 seconds. A Linux bind mount lays a folder of my photos over that folder under the same 16 names. The input app opens what it always opens and gets my photos.

Nothing in LG's files changes. Pull the mount and the paintings come back.

The other two screens work the same way:

* **Screensaver:** LG's screensaver is a small QML app, so I mount my own slideshow over its main file. While I was in there, I got rid of the slow zoom.
* **Power-off logo:** the TV's system UI draws `LG_logo.png` centered on black when the TV turns off. I mount my logo over that one file. It loads fresh at every power-off, so the swap shows up the very next time.

## Quirks and workarounds

LG picks a random image every 10 seconds, so it happily shows the same photo twice in a row. I wanted a random order that repeats until the TV wakes up, like 1324 1324, and I can't change LG's picking code.

So all 16 names point at the same photo, as hard links. A small Python script watches the folder with inotify. When the input app opens one of the names and goes quiet for a second, the script renames all 16 to the next photo in the order. The renames are atomic, so the app never finds a name missing. Whichever name LG picks next, it gets the next photo. After 25 seconds with no opens, the screen has closed, and the next session gets a new order.

Two things I learned on the way. The TV never updates file access times, so checking which photo LG read last was a dead end. And it has no `inotifyd`, so the watcher calls inotify through Python's `ctypes`.

I worked all of this out with Claude Code driving the TV over telnet while I watched the screen and reported back. That loop was a good fit for a device with no documentation, where the only way to learn something was to try it and look.

## Making it easy

The target user is someone who rooted their TV once, by following a guide. So:

* `./install.sh` finds the TV on the network, tells you what it's about to do at each step, and asks before it goes on. `./uninstall.sh` puts LG's screens back.
* It needs nothing extra on a Mac. It uses the bash, `sips`, and `nc` that ship with macOS. The TV downloads the files from Apple's own `nc`, which the macOS firewall lets through without a prompt.
* Out of the box, it uses its own sample photos and logo, so you can see it work before you pick your own. Then `--screensaver` points it at your photo folder and `--logo` at your logo, and each one changes only its own screen.
* Photos get center-cropped to 1920x1080, the size the TV draws these screens at. Logos get scaled to about the size of LG's.

## What else is fair game

With root, you can lay your own file over almost any file the TV reads. It works best on things the TV loads fresh each time, like the power-off logo. I haven't tried these yet, but they're on my list:

* **The power-on animation.** LG plays it from a small QML app with a video, the same kind of app as the screensaver. Your own clip should work when the TV wakes from standby. After a full power cut, LG's version probably plays before the swap is back in place.
* **No more home screen ads.** Send LG's ad servers nowhere in the TV's hosts file, and the promo banner and the "recommended" rows have nothing to show.
* **A smarter screensaver.** The screensaver is my own QML now, so it can show a clock, the date, or the weather. It could also pull photos straight from a server at home instead of a fixed set.
* **Bias lighting.** Homebrew apps like PicCap capture the picture and drive LED strips behind the TV through Hyperion, like a homemade Ambilight.
* **Startup scripts.** Homebrew Channel runs scripts at every boot, the same hook that puts my photos back after a restart. That's enough to open an app at power-on, or to wire the TV into Home Assistant with more control than LG's own integration gives you.

Some things stay off-limits. The first LG logo after a full power cut lives in the bootloader, and changing it is a good way to brick the TV. And apps that LG restores from a factory snapshot, like the input app, ignore code changes, so the trick only works on the files they read.

## Give it a rip!

The code is on GitHub at [calscoo/webos-custom-screens](https://github.com/calscoo/webos-custom-screens). Rooting is at your own risk, so start at [cani.rootmy.tv](https://cani.rootmy.tv/) to see whether your TV can be rooted at all. I've only run it on my C3 on webOS 23, and I'd love to hear how it goes on other models.
