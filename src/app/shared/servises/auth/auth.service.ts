import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { IUser } from 'src/app/store/reducers/user.reducer';



@Injectable()
export class AuthService {

  constructor() { }

  public login(user: IUser): Observable<any> {
    const localUser = localStorage.getItem(user.username);
    if (localUser) {
      const localUserObj = JSON.parse(localUser);
      if (localUserObj.password === user.password) {
        return of(localUserObj);
      }
    }
    return of(null);
  }

  public signup(user: IUser): Observable<any> {
    localStorage.setItem(user.username, JSON.stringify(user));
    return of(user);
  }

  public tokenToLocalStorage(user: IUser): Observable<any> {
    if (!user || !user.username) {
      return of(null);
    }
    localStorage.setItem('token', user.username);
    return of(user);
  }
  public getTokenFromLocalStorage(): Observable<any> {
    return of(localStorage.getItem('token'));
  }

  public removeTokenFromLocalStorage(): Observable<any> {
    localStorage.removeItem('token');
    return of(true);
  }

  public checkUser(token: string | null): Observable<any> {
    return of(JSON.parse(localStorage.getItem(token)));
  }

  public checkUsername(username: string): Observable<ValidationErrors | null> {
    return localStorage.getItem(username) === null ? of(null) : of({occupiedname: 'There is alredy user with that name'});
  }
}
