import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorqueComponent } from './porque/porque.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [PorqueComponent, CaracteristicasComponent, ContactoComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PorqueComponent,
    CaracteristicasComponent,
    ContactoComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
