import {Injectable} from '@angular/core';
import {PaymentStatus} from '../models/user-bag';
import {MenuItem} from '../models/menu-item';
import {CommonService} from './common.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Delivery, Order} from '../models/order';
import {Restaurant} from '../models/restaurant';
import {EasyToEatLibService} from '../easy-to-eat-lib.service';

@Injectable({
  providedIn: 'root'
})
export class UserBagService {

  order: Order;
  restaurant: Restaurant;
  constructor(public commonService: CommonService,
              private mainService: EasyToEatLibService,
              public http: HttpClient) {
  }

  addItemToBag(item: MenuItem, restId: string): void {
    item.randomId = this.commonService.getRandomId();
    if (!this.order) {
      this.order = {
        items: [item],
        price: item.price,
        paymentStatus: PaymentStatus.creditCardNotAuth,
        restaurantId: restId,
        delivery: Delivery.pickUp
      };
    } else {
      this.order.items.push(item);
      this.order.price += item.price;
    }
  }

  removeItemFromBag(index: number): void {
    if (this.order.items) {
      const item = this.order.items[index];
      this.order.price -= item.price;
      this.order.items.splice(index, 1);
      this.order.items = [...this.order.items];
    }
  }

  addOrder(item: Order): Observable<any> {
    return this.http.post(`${this.mainService.baseUrl}/orders`, item);
  }

  setBag(bag: Order) {
    this.order = bag;
  }

  setRest(restaurant: Restaurant) {
    this.restaurant = restaurant;
  }
}
