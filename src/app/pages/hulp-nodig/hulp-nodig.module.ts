import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {HulpNodigPage} from './hulp-nodig.page';

const routes: Routes = [
    {
        path: '',
        component: HulpNodigPage
    },
    {
        path: 'bel-ons',
        loadChildren: './bel-ons/bel-ons.module#BelOnsPageModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HulpNodigPage]
})
export class HulpNodigPageModule {
}
