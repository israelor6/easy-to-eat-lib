import {City} from './city';
import {User} from './user';
import {Ad} from './ad';

export interface Restaurant {
  _id?: string;
  comment?: string;
  name: string;
  advertisings: Ad[];
  icon?: string;
  phone: string;
  opening: Hours[];
  address: string;
  deliveryPrice: number;
  owner?: string;
  description?: string;
  createdAt: Date;
  cities?: City[];
  userOwner?: User[];
}

export interface Hour {
  hour: number;
  minute: number;
}

export interface Hours {
  day: Days;
  open: Hour;
  close: Hour;
}

export enum Days {
  ראשון = 'ראשון',
  שני = 'שני',
  שלישי = 'שלישי',
  רביעי = 'רביעי',
  חמישי = 'חמישי',
  שישי = 'שישי',
  שבת = 'שבת'
}
