import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Order} from '../models/order';
import {Status} from '../enums/status.enum';
import {AuthService} from './auth.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currUser: User;
  userEvent = new BehaviorSubject<User>(null);
  constructor(private auth: AuthService,
              private router: Router,
              private http: HttpClient) {
    if (this.auth.getToken()) {
      this.http.get(`${environment.baseUrl}/user/currentUser`).subscribe((user: User) => {
        this.setCurrUser(user);
      });
    }
  }

  getCurrUser(): BehaviorSubject<User> {
    return this.userEvent;
  }

  setCurrUser(user: User): void {
    this.currUser = user;
    this.userEvent.next(user);
  }

  disconnect() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.setCurrUser(null);
  }

  getUserOrders(userId: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/orders/ordersByUserId?userId=${userId}`);
  }

  login(user: {email: string, password: string}): Observable<any> {
    return this.http.post(`${environment.baseUrl}/user/login`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${environment.baseUrl}/user/register`, user);
  }

  searchByName(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(`${environment.baseUrl}/user/getUserByStartLetter?letters=${term}`).pipe(
        map((response) => response)
      );
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/user/getAllUsers`);
  }
}
