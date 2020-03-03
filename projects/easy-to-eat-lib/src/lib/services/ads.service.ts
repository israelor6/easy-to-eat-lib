import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Ad} from '../models/ad';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }

  allAds: Ad[];
  getGeneral(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/advertising/getGeneral`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/advertising/getAll`);
  }

  deleteAd(id: string) {
    return this.http.delete(`${environment.baseUrl}/advertising/deleteAdvertising?advertisingId=${id}`, {responseType: 'text'});
  }

  adAdd(ad: Ad) {
    return this.http.post(`${environment.baseUrl}/advertising/`, ad);
  }

  setAds(ads: Ad[]) {
    this.allAds = ads;
  }
}
