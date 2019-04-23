import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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
        this.firebaseService.login({
            user: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        });
    }
}
