import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EasyToEatLibService {
  env = 'Dev';

  constructor(@Inject('config') private config: any) {
    this.env = config.env;
  }

  getBaseUrl() {
    return this.env === 'Dev' ? 'https://esaytoeat-server.herokuapp.com' : 'https://esaytoeat-server.herokuapp.com';
  }
}
