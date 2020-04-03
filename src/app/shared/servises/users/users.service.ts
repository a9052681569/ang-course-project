import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser, IEvent } from 'src/app/store/reducers/user.reducer';

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
  public addMessageToLocalStorage(event: IEvent): Observable<IEvent> {
    const actualUser = this.getActualUser();
    actualUser.events.push(event);
    localStorage.setItem(actualUser.username, JSON.stringify(actualUser));
    return of(event);
  }
  public deleteMessageFromLocalStorage(index: number): Observable<number> {
    const actualUser = this.getActualUser();
    actualUser.events.splice(index, 1);
    localStorage.setItem(actualUser.username, JSON.stringify(actualUser));
    return of(index);
  }
  public clearMessagesInLocalStorage(event: IEvent): Observable<IEvent> {
    const actualUser = this.getActualUser();
    actualUser.events.splice(0);
    localStorage.setItem(actualUser.username, JSON.stringify(actualUser));
    return of(event);
  }

}
