import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { Routes, RouterModule } from '@angular/router';
import { TerminosComponent } from './terminos/terminos.component';
import { CookiesComponent } from './cookies/cookies.component';

const routes: Routes = [
  { path:'politica/privacidad', component: PrivacidadComponent },
  { path:'politica/terminos', component: PrivacidadComponent },
  { path:'politica/cookies', component: CookiesComponent }
  
];

@NgModule({
  declarations: [PrivacidadComponent, TerminosComponent, CookiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class PoliticaModule { }
