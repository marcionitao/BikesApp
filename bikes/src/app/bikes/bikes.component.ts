import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../model/bike';
import { Router } from '@angular/router';
import { BikeService } from '../service/bike.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes: Bike[];
  selectedBike: Bike;
  newBike: Bike;
  formulario: FormGroup;

  @Input() bike: Bike = {
    id: undefined,
    model: '',
    manufacturer: ''
  };

  constructor(private router: Router,
    private bikeService: BikeService,
    private formBuilder: FormBuilder) {

    this.formulario = this.formBuilder.group({
      'id': [this.bike.id],
      'model': [this.bike.model, Validators.required],
      'manufacturer': [this.bike.manufacturer, Validators.required]
    });
  }

  ngOnInit() {
    this.newBike = new Bike(); // para mostrar todas as Bikes
  }

  onSubmit(): void {
    console.log(this.formulario.value);
    const bikes = this.formulario.value as Bike;

    if (this.formulario.valid) {
      this.bikeService.createBike(bikes).subscribe(
      response => {
        console.log('response', response);
        this.router.navigate(['/list']);// apos criar volta para lista
       // this.selectedBike = null;
      });
    }
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
