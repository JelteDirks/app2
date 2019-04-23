import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
    providedIn: 'root'
})
export class FirebaseService implements OnInit {

    constructor(private db: AngularFirestore,
                private auth: AngularFireAuth) {
    }

    ngOnInit(): void {
        this.auth.user.subscribe((u: User) => {
            console.log(u);
        });
    }

    public isLoggedIn(): boolean {
        console.log(this.auth.auth.currentUser);
        return !!this.auth.auth.currentUser;
    }

    public login(user: { user: string, password: string }): Promise<UserCredential> {
        return this.auth.auth.signInWithEmailAndPassword(user.user, user.password);
    }
}
