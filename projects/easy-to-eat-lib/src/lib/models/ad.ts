import {Restaurant} from './restaurant';

export interface Ad {
  link?: string;
  _id?: string;
  left: string;
  right: string;
  url?: string;
  restaurantId?: string;
  restaurant?: Restaurant;
}
