---
title: "Changing the LG TV screens everyone says you can't"
date: 2026-11-23
draft: false
summary: "My own photos on an LG TV's no-signal screen and screensaver, and my own logo when it turns off. Every forum says it can't be done. It can, with a rooted TV and a few bind mounts."
---

I bought a 42" LG OLED secondhand, and it came already rooted with [Homebrew Channel](https://github.com/webosbrew/webos-homebrew-channel) installed. All I wanted was to see my own photos when the TV sits idle, instead of LG's built-in art. I've wanted that for years, and every thread I found said the same thing: you can't.

You can. My photos now show on three of the TV's screens:

* **The no-signal screen.** The slideshow of paintings LG shows when the device on an HDMI input is off.
* **The screensaver.** The one that starts after the TV sits idle on the home screen or in an app.
* **The power-off screen.** The LG logo that flashes for a moment when you turn the TV off. Mine shows my own logo now.

## Why everyone says no

The Homebrew Channel screensaver apps replace one screen: the screensaver you get on the home screen. The screen I actually saw every day was a different one. The paintings that show up when an HDMI input has no signal come from LG's input app, not from the screensaver.

That input app is the hard part. The TV doesn't start it from its files at boot. It restores it from a snapshot of the running process that LG made at the factory, so editing its code does nothing. I confirmed that the slow way.

## Change what it reads, not the code

The input app can't change, but the files it reads can. It shows a random one of 16 fixed images, `modernart_0.jpg` to `modernart_15.jpg`, from one folder, every 10 seconds. A Linux bind mount lays a folder of my photos over that folder under the same 16 names. The input app opens what it always opens and gets my photos.

Nothing in LG's files changes. Pull the mount and the paintings come back.

The other two screens work the same way:

* **Screensaver:** LG's screensaver is a small QML app, so I mount my own slideshow over its main file. While I was in there, I got rid of the slow zoom.
* **Power-off logo:** the TV's system UI draws `LG_logo.png` centered on black when the TV turns off. I mount my logo over that one file. It loads fresh at every power-off, so the swap shows up the very next time.

## The shuffle problem

LG picks a random image every 10 seconds, so it happily shows the same photo twice in a row. I wanted a random order that repeats until the TV wakes up, like 1324 1324, and I can't change LG's picking code.

So all 16 names point at the same photo, as hard links. A small Python script watches the folder with inotify. When the input app opens one of the names and goes quiet for a second, the script renames all 16 to the next photo in the order. The renames are atomic, so the app never finds a name missing. Whichever name LG picks next, it gets the next photo. After 25 seconds with no opens, the screen has closed, and the next session gets a new order.

Two things I learned on the way. The TV never updates file access times, so checking which photo LG read last was a dead end. And it has no `inotifyd`, so the watcher calls inotify through Python's `ctypes`.

## Making it easy

The target user is someone who rooted their TV once, by following a guide. So:

* `./install.sh` finds the TV on the network, asks you to confirm it, prepares your photos, and sends them over. Run it again to change photos, and `./uninstall.sh` puts LG's screens back.
* It needs nothing extra on a Mac. It uses the bash, `sips`, and `nc` that ship with macOS. The TV downloads the files from Apple's own `nc`, which the macOS firewall lets through without a prompt.
* A fresh download includes sample photos and a sample logo, so it shows that it works before you pick your own.
* Photos get center-cropped to 1920x1080, the size the TV draws these screens at. Logos get scaled to about the size of LG's.

I built it with Claude Code driving the TV over telnet while I watched the screen and reported back. That loop was a good fit for a device with no documentation, where the only way to learn something was to try it and look.

## Try it yourself

The code is on GitHub at [calscoo/webos-custom-screens](https://github.com/calscoo/webos-custom-screens). Rooting is at your own risk, so start at [cani.rootmy.tv](https://cani.rootmy.tv/) to see whether your TV can be rooted at all. I've only run it on my C3 on webOS 23, and I'd love to hear how it goes on other models.
