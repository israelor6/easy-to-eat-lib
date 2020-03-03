import {MenuItem} from './menu-item';
import {Status} from '../enums/status.enum';
import {Restaurant} from './restaurant';
import {PaymentStatus, UserBag} from './user-bag';
import {User} from './user';

export interface Order {
  _id?: string;
  delivery: Delivery;
  restaurant?: Restaurant;
  dateTime?: Date;
  items: MenuItem[];
  paymentStatus: PaymentStatus;
  status?: Status;
  price: number;
  userId?: string;
  address?: string;
  restaurantId;
  userInfo?: User;
}

export enum Delivery {
  pickUp,
  delivery
}
