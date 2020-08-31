import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorqueComponent } from './porque/porque.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { CaptureComponent } from './capture/capture.component';
import { StacsComponent } from './stacs/stacs.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { FacePageComponent } from './face-page/face-page.component';
import { SharedModule } from '../shared/shared.module';
import { PrecieComponent } from './precie/precie.component';

@NgModule({
  declarations: [PorqueComponent, CaracteristicasComponent, ContactoComponent, FooterComponent, CaptureComponent, StacsComponent, AnuncioComponent, FacePageComponent, PrecieComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PorqueComponent,
    CaracteristicasComponent,
    ContactoComponent,
    FooterComponent,
    CaptureComponent,
    StacsComponent,
    AnuncioComponent,
    FacePageComponent,
    PrecieComponent,
    SharedModule
  ]
})
export class ComponentsModule { }
