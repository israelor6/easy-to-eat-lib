import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Restaurant} from '../models/restaurant';
import {map} from 'rxjs/operators';
import {EasyToEatLibService} from '../easy-to-eat-lib.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient, private mainService: EasyToEatLibService) { }

  getRestaurantList(cityId?: string): Observable<any> {
    return this.http.get(`${this.mainService.baseUrl}/restaurants/getAll${cityId ? `?id=${cityId}` : ''}`);
  }

  addNewRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.post(`${this.mainService.baseUrl}/restaurants`, restaurant);
  }

  getRestaurantById(rest: string): Observable<any> {
    return this.http.get(`${this.mainService.baseUrl}/restaurants?restId=${rest}`);
  }

  updateRest(restaurant: Restaurant): Observable<any> {
    return this.http.put(`${this.mainService.baseUrl}/restaurants`, restaurant);
  }

  searchByName(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(`${this.mainService.baseUrl}/restaurants/getRestaurantByStartLetter?letters=${term}`).pipe(
        map((response) => response)
      );
  }
}
