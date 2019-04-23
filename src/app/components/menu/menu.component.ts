import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    constructor(private menuCtrl: MenuController,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        console.log('init menu component');
        this.menuCtrl.enable(true, 'main');

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.menuCtrl.close('main');
            }
        });
    }
}
