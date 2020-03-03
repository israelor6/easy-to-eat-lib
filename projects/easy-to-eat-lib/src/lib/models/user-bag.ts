import {MenuItem} from './menu-item';

export interface UserBag {
  items: MenuItem[];
  price: number;
  paymentStatus: PaymentStatus;
  address?: string;
  restaurantId: string;
}

export enum PaymentStatus {
  creditCardNotAuth ,
  cash,
  paid
}
