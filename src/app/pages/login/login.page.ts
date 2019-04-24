import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {FormControl, FormGroup} from '@angular/forms';
import UserCredential = firebase.auth.UserCredential;
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public loginForm: FormGroup;
    public isLoggedIn: boolean;

    constructor() {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        });
    }

    public onLogout(): void {
    }

    onLogin(): void {
    }
}
