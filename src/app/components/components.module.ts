import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorqueComponent } from './porque/porque.component';

@NgModule({
  declarations: [PorqueComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PorqueComponent
  ]
})
export class ComponentsModule { }
