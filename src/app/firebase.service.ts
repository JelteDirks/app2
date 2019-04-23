import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';

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
}
