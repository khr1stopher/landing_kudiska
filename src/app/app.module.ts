import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    SharedModule,
    NgsRevealModule,
    BrowserAnimationsModule
  ],
  exports:[ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
