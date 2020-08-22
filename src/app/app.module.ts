import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    SharedModule,
    NgsRevealModule
  ],
  exports:[ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
