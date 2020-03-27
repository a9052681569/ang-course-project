import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { IUser } from 'src/app/store/reducers/user.reducer';



@Injectable()
export class AuthService {

  constructor() { }

  public login(user: IUser): Observable<IUser | null> {
    const localUser = localStorage.getItem(user.username);
    if (localUser) {
      const localUserObj = JSON.parse(localUser);
      if (localUserObj.password === user.password) {
        return of(localUserObj);
      }
    }
    return of(null);
  }

  public signup(user: IUser): Observable<IUser> {
    localStorage.setItem(user.username, JSON.stringify(user));
    return of(user);
  }

  public tokenToLocalStorage(user: IUser): Observable<IUser | null> {
    if (!user || !user.username) {
      return of(null);
    }
    localStorage.setItem('token', user.username);
    return of(user);
  }
  public getTokenFromLocalStorage(): Observable<string> {
    return of(localStorage.getItem('token'));
  }

  public removeTokenFromLocalStorage(): Observable<boolean> {
    localStorage.removeItem('token');
    return of(true);
  }

  public checkUser(token: string | null): Observable<IUser> {
    return of(JSON.parse(localStorage.getItem(token)));
  }
}
