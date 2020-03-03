import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {EasyToEatLibService} from '../easy-to-eat-lib.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currUser: User;
  userEvent = new BehaviorSubject<User>(null);
  constructor(private auth: AuthService,
              private mainService: EasyToEatLibService,
              private router: Router,
              private http: HttpClient) {
    if (this.auth.getToken()) {
      this.http.get(`${this.mainService.baseUrl}/user/currentUser`).subscribe((user: User) => {
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
    return this.http.get(`${this.mainService.baseUrl}/orders/ordersByUserId?userId=${userId}`);
  }

  login(user: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.mainService.baseUrl}/user/login`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.mainService.baseUrl}/user/register`, user);
  }

  searchByName(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(`${this.mainService.baseUrl}/user/getUserByStartLetter?letters=${term}`).pipe(
        map((response) => response)
      );
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.mainService.baseUrl}/user/getAllUsers`);
  }
}
