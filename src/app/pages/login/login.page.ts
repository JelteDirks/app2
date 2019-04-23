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

    constructor(private firebaseService: FirebaseService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        });
    }

    submit(): void {
        if (this.firebaseService.isLoggedIn()) {
            return;
        }

        this.firebaseService.login({
            user: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        }).then((u: UserCredential) => {
            console.log('ok', u);
        }).catch(e => {
            console.log('nok', e);
        });
        ;
    }
}
