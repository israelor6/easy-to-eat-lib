import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MenuItem} from '../models/menu-item';
import {EasyToEatLibService} from '../easy-to-eat-lib.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient,
              private mainService: EasyToEatLibService) { }

  getMenuByRestId(restId: string): Observable<any> {
    return this.http.get(`${this.mainService.baseUrl}/items?restaurntId=${restId}`);
  }

  addMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http.post(`${this.mainService.baseUrl}/items`, menuItem);
  }

  updateMenuItem(item: MenuItem) {
    return this.http.put(`${this.mainService.baseUrl}/items`, item);
  }
}
