import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Status} from '../enums/status.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  getOrdersByDates(restId: string, startDate: string, endDate: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${environment.baseUrl}/orders/sortOrders${restId ? `?restaurantId=${restId}&` : `?`}from=${startDate}&to=${endDate}`);
  }

  orderAgain(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/orders/ReviveInvitation?orderId=${id}`);
  }

  changeStatus(status: Status, orderId: string) {
    return this.http.put(`${environment.baseUrl}/orders/changeStatus?orderId=${orderId}`, {status});
  }
}
