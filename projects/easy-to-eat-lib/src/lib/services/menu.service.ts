import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MenuItem} from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuByRestId(restId: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/items?restaurntId=${restId}`);
  }

  addMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http.post(`${environment.baseUrl}/items`, menuItem);
  }

  updateMenuItem(item: MenuItem) {
    return this.http.put(`${environment.baseUrl}/items`, item);
  }
}
