import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'inicio', component: InicioComponent }
];

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class InicioModule { }
