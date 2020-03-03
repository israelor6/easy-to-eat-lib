import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getRandomId(): string {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
  }

  deepClone(object: any): any {
    if (typeof object === 'object') {
      return JSON.parse(JSON.stringify(object));
    } else {
      return object;
    }
  }

  getHebName(term: string) {
  }
}
