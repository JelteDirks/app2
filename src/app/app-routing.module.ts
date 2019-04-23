import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
    {path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule'},
    {path: 'schade-melden', loadChildren: './pages/schade-melden/schade-melden.module#SchadeMeldenPageModule'},
    {path: 'hulp-nodig', loadChildren: './pages/hulp-nodig/hulp-nodig.module#HulpNodigPageModule'},
  { path: 'noodnummers', loadChildren: './pages/hulp-nodig/noodnummers/noodnummers.module#NoodnummersPageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
