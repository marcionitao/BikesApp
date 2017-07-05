import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeService } from "./bike.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { MaterialModule } from '@angular/material';
import { BikeInfoComponent } from './bike-info/bike-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
