import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Restaurant} from '../models/restaurant';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getRestaurantList(cityId?: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/restaurants/getAll${cityId ? `?id=${cityId}` : ''}`);
  }

  addNewRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.post(`${environment.baseUrl}/restaurants`, restaurant);
  }

  getRestaurantById(rest: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/restaurants?restId=${rest}`);
  }

  updateRest(restaurant: Restaurant): Observable<any> {
    return this.http.put(`${environment.baseUrl}/restaurants`, restaurant);
  }

  searchByName(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(`${environment.baseUrl}/restaurants/getRestaurantByStartLetter?letters=${term}`).pipe(
        map((response) => response)
      );
  }
}
