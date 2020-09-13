import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WhatsIconComponent } from './whats-icon/whats-icon.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    PageNotFoundComponent, 
    WhatsIconComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    WhatsIconComponent
  ]
})
export class SharedModule { }
