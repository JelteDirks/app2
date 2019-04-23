import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchadeMeldenPage } from './schade-melden.page';

const routes: Routes = [
  {
    path: '',
    component: SchadeMeldenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchadeMeldenPage]
})
export class SchadeMeldenPageModule {}
