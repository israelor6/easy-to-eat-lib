import {ItemCheckbox} from './item-checkbox';

export interface MenuItem {
  comment: string;
  _id?: string;
  randomId?: string;
  restaurntId?: string;
  name: string;
  description: string;
  price: number;
  icon?: string;
  additions?: ItemCheckbox[];
  sauces?: ItemCheckbox[];
  sum?: number;
}
