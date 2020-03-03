import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Status} from '../enums/status.enum';
import {EasyToEatLibService} from '../easy-to-eat-lib.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient,
              private mainService: EasyToEatLibService) {
  }

  getOrdersByDates(restId: string, startDate: string, endDate: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.mainService.baseUrl}/orders/sortOrders${restId ? `?restaurantId=${restId}&` : `?`}from=${startDate}&to=${endDate}`);
  }

  orderAgain(id: string): Observable<any> {
    return this.http.get(`${this.mainService.baseUrl}/orders/ReviveInvitation?orderId=${id}`);
  }

  changeStatus(status: Status, orderId: string) {
    return this.http.put(`${this.mainService.baseUrl}/orders/changeStatus?orderId=${orderId}`, {status});
  }
}
