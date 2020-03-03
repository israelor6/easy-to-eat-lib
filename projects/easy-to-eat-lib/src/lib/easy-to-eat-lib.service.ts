import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EasyToEatLibService {
  baseUrl: string;

  constructor(@Inject('config') private config: any) {
    this.baseUrl = config.baseUrl;
  }

  getBaseUrl() {
    return this.baseUrl;
  }
}
