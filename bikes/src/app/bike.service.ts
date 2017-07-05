import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Bike } from './bike'

@Injectable()
export class BikeService {

  constructor(private http: Http) { }

  private bikesUrl = '/api/bikes';

  getBikes() {
    return this.http.get(this.bikesUrl + "/allBikes")
      .map(res => res.json())
      .toPromise();// executa uma function e retorna JSON
  }

  getBike(id: number): Promise<Bike> {
    const url = `${this.bikesUrl}/getBike/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Bike);
  }

  createBike(bike: Bike): Promise<Bike> {
    return this.http.post(this.bikesUrl + "/createBike", JSON.stringify(bike))
      .toPromise()
      .then(res => res.json() as Bike);
  }

  updateBike(bike: Bike): Promise<Bike> {
    return this.http
      .post(this.bikesUrl + "/updateBike", JSON.stringify(bike))
      .toPromise()
      .then(() => bike);
  }

  deleteBike(bike: Bike): Promise<void> {
    const url = `${this.bikesUrl}/deleteBike/${bike.id}`;
    return this.http.get(url)
      .toPromise()
      .then(() => null);
  }

}
