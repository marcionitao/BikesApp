import { BikeService } from '../service/bike.service';
import { Router } from '@angular/router';
import { Bike } from './../model/bike';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  bikes: Bike[];
  selectedBike: Bike;

  constructor(private router: Router,
              private bikeService: BikeService) {

  }

  ngOnInit() {
    this.listBikes();
  }

  listBikes(){
    this.bikeService.getBikes().subscribe(
      response => {
        // tslint:disable-next-line:no-unused-expression
        console.log(response),
          this.bikes = response;
      });
  }

  deleteBike(bike: Bike): void {
    this.bikeService.deleteBike(bike).subscribe(
      () => {
        this.bikes = this.bikes.filter(h => h !== bike);
        if (this.selectedBike === bike) {
          this.selectedBike = null;
        }
      });
  }

  showInfo(bike: Bike): void {
    this.selectedBike = bike;
    this.router.navigate(['/information', this.selectedBike.id]);
  }

}
