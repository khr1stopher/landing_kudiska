import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module'

const routes: Routes = [
  { path:'inicio', component: InicioComponent }
];

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule,
    ComponentsModule
  ]
})
export class InicioModule { }
