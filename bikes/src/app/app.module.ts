import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BikesComponent } from '../bikes/bikes.component';
import {BikeService} from "./bike.service";
import {AppRoutingModule} from "../app-routing/app-routing.module";

import { MaterialModule } from '@angular/material';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
