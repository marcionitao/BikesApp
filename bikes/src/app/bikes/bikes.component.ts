import { Component, OnInit } from '@angular/core';
import { Bike } from '../model/bike';
import { Router } from '@angular/router';
import { BikeService } from '../service/bike.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes: Bike[];
  selectedBike: Bike;
  newBike: Bike;

  constructor(private router: Router,
              private bikeService: BikeService) {
  }

  ngOnInit() {
       this.newBike = new Bike();// para mostrar todas as Bikes
  }

  createBike(bike: Bike): void {
    this.bikeService.createBike(bike).subscribe(
      bike => {
        this.bikes.push(bike);// "push" é para enviar os dados
        this.selectedBike = null;
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
