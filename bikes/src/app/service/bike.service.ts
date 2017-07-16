import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Bike } from '../model/bike';

@Injectable()
export class BikeService {

  constructor(private http: Http) { }

  // tslint:disable-next-line:member-ordering
  private bikesUrl = '/api/bikes';

  getBikes() {
    return this.http.get(this.bikesUrl + '/allBikes')
      .map(response => response.json());
    //  .toPromise();// executa uma function e retorna JSON
  }

  /*  getBike(id: number): Promise<Bike> {
     // const url = `${this.bikesUrl}/getBike/${id}`;
      const url = this.bikesUrl+/getBike/+id;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Bike);
    }*/
  getBike(id: number): Observable<Bike> {
    // const url = `${this.bikesUrl}/getBike/${id}`;
    const url = this.bikesUrl + /getBike/ + id;
    return this.http.get(url)
      .map(response => response.json() as Bike)
      .catch(this.handleError);
  }
  /*
    createBike(bike: Bike): Promise<Bike> {
      return this.http.post(this.bikesUrl + "/createBike", JSON.stringify(bike))
        .toPromise()
        .then(res => res.json() as Bike);
    }
  */
  createBike(bike: Bike): Observable<Bike> {
    return this.http.post(this.bikesUrl + '/createBike', JSON.stringify(bike))
      .map(response => response.json() as Bike)
      .catch(this.handleError);
  }
  /*
    updateBike(bike: Bike): Promise<Bike> {
      return this.http
        .post(this.bikesUrl + "/updateBike", JSON.stringify(bike))
        .toPromise()
        .then(() => bike);
    }
  */
  updateBike(bike: Bike): Observable<Bike> {
    return this.http.post(this.bikesUrl + '/updateBike', JSON.stringify(bike))
      .map(() => bike)
      .catch(this.handleError);
  }
  /*
    deleteBike(bike: Bike): Promise<void> {
      const url = `${this.bikesUrl}/deleteBike/${bike.id}`;
      return this.http.get(url)
        .toPromise()
        .then(() => null);
    }
    */
  deleteBike(bike: Bike): Observable<void> {
    const url = `${this.bikesUrl}/deleteBike/${bike.id}`;
    return this.http.get(url)
      .map(() => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
