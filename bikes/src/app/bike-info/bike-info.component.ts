import { Component, OnInit } from '@angular/core';
import { Bike } from '../model/bike';
import { BikeService } from '../service/bike.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css']
})
export class BikeInfoComponent implements OnInit {

  bike : Bike;

  constructor(private bikeService: BikeService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    /*
    * switchMap - Geralmente é usado quando você possui alguma operação assíncica que é desencadeada por
    * algum "evento / fluxo" pré-determinado.isso significa que, assim que as mudanças de rota mudam,
    * seu serviço  é automaticamente chamado de novo com os params alterados e a chamada prévia é cancelada
    * para que você não receba dados desatualizados.*/
    this.route.params.switchMap(
      (params: Params) => this.bikeService.getBike(+params['id'])
    ).subscribe(
      bike => this.bike = bike
    );
  }
  updateBike() {
    this.bikeService.updateBike(this.bike);
    this.goBack();
  }
  goBack() {
    this.location.back();
  }

}
