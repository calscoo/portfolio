import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CartPrints} from '../../services/cart.service';

let centerClicked = 0;
let displayManage = false;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    constructor(private router: Router) { }

    clickCenter() {
        centerClicked++;
    }

    clickLeft() {
        if (centerClicked === 2) {
            displayManage = true;
        }
    }

    isDisplayManaged() {
        return displayManage;
    }

    ngOnInit() {
        centerClicked = 0;
        displayManage = false
    }

    openRadarr() {
        window.open(
            'http://calebolson.space:7878/radarr',
            '_blank'
        );
    }

    openSonarr() {
        window.open(
            'http://calebolson.space:8989/sonarr/',
            '_blank'
        );
    }

    openTransmission() {
        window.open(
            'http://192.168.1.9:9091/',
            '_blank'
        );
    }

    openPlex() {
        window.open(
            'https://app.plex.tv/desktop',
            '_blank'
        );
    }

    openOctoPrint() {
        window.open(
            'http://calebolson.space:55000/',
            '_blank'
        );
    }

    openFreeNAS() {
        window.open(
            'http://192.168.1.14/',
            '_blank'
        );
    }

}
