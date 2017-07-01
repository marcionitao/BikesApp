import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from '../bikes/bikes.component';

const routes: Routes = [
  { path: 'bikes', component: BikesComponent }
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
