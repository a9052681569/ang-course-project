import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/store/reducers/user.reducer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getActualUser(): IUser {
    return JSON.parse(localStorage.getItem(localStorage.getItem('token')));
  }

  public patch(value: {[key: string]: string}): Observable<IUser> {
    let actualUser = this.getActualUser();
    actualUser = {...actualUser, ...value};
    localStorage.setItem(actualUser.username, JSON.stringify(actualUser));
    return of(actualUser);
  }
}
