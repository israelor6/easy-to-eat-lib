import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setTOken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return helper.isTokenExpired(token);
  }
}
