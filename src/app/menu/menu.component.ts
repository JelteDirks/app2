import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    public title: string;

    constructor(private menuController: MenuController,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        console.log(this.router.getCurrentNavigation());
        this.title = '';
    }
}
