import { Injectable } from '@angular/core';
import {RestaurantCategory} from '../models/restaurant-category';

@Injectable({
  providedIn: 'root'
})
export class RestaurantCategoryService {

  allCategories: RestaurantCategory[] = [{
    name: 'הונגרי',
    icon: 'https://medias.hashulchan.co.il/www/uploads/2019/04/langos-1140x641.jpg'
  }];
  constructor() { }
}
