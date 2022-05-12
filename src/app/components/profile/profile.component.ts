import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let centerClicked = 0;
let displayManage = false;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    isDisplayManaged() {
        return displayManage;
    }

    ngOnInit() {
        centerClicked = 0;
        displayManage = false
    }

}
