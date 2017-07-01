import {Component, OnInit} from '@angular/core';
import {Bike} from './../app/bike';
import {Router} from '@angular/router';
import {BikeService} from "../app/bike.service";

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes: Bike[];

  constructor(private router: Router,
              private bikeService: BikeService) {
  }

  ngOnInit() {

    this.bikeService.getBikes().then(
      response => {
        console.log(response),
          this.bikes = response
      });
  }


}
