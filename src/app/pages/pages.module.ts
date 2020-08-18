import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component'



@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
