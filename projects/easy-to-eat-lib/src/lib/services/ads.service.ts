import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ad} from '../models/ad';
import {EasyToEatLibService} from '../easy-to-eat-lib.service';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient,
              private mainService: EasyToEatLibService) { }

  allAds: Ad[];
  getGeneral(): Observable<any> {
    return this.http.get(`${this.mainService.baseUrl}/advertising/getGeneral`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.mainService.baseUrl}/advertising/getAll`);
  }

  deleteAd(id: string) {
    return this.http.delete(`${this.mainService.baseUrl}/advertising/deleteAdvertising?advertisingId=${id}`, {responseType: 'text'});
  }

  adAdd(ad: Ad) {
    return this.http.post(`${this.mainService.baseUrl}/advertising/`, ad);
  }

  setAds(ads: Ad[]) {
    this.allAds = ads;
  }
}
