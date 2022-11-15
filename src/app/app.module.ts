import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { LundingPageComponent } from './lunding-page/lunding-page.component';
//import { AgmCoreModule } from '@agm/core';
import { WavesModule, ModalModule, CarouselModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LundingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WavesModule, ModalModule, CarouselModule,
    MDBBootstrapModule.forRoot(),
    NgxWhastappButtonModule

    //AgmCoreModule.forRoot({apiKey:''})
    //AIzaSyA2Ti8hnmbGk3pb99BeekR3dch5hWFfrQA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
