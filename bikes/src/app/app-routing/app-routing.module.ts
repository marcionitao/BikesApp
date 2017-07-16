import { HomeComponent } from './../home/home.component';
import { BikeListComponent } from './../bike-list/bike-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from '../bikes/bikes.component';
import { BikeInfoComponent } from '../bike-info/bike-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: BikeListComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'information/:id', component: BikeInfoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
