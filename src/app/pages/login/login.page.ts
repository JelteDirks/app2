import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {FormControl, FormGroup} from '@angular/forms';
import UserCredential = firebase.auth.UserCredential;

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public loginForm: FormGroup;
    public isLoggedIn: boolean;

    constructor(private firebaseService: FirebaseService) {
    }

    ngOnInit() {
        this.isLoggedIn = this.firebaseService.isLoggedIn();

        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        });
    }

    public onLogout(): void {
        this.firebaseService.logout().then(() => {
            console.log('logged out');
        });
    }

    onLogin(): void {
        if (this.firebaseService.isLoggedIn()) {
            return;
        }

        this.firebaseService.login({
            user: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        }).then((u: UserCredential) => {
            console.log('ok', u);
            this.isLoggedIn = true;
        }).catch(e => {
            console.log('nok', e);
        });
    }
}
