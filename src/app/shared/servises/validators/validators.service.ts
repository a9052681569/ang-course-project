import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, of, pipe, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay, debounceTime, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { Store, select } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { IUser } from 'src/app/store/reducers/user.reducer';

@Injectable()
export class ValidatorsService {

  public constructor(private store: Store<IRootState>) {}

  private checkUsername(username: string): Observable<ValidationErrors | null> {
    return localStorage.getItem(username) === null ? of(null) : of({occupiedname: 'There is alredy user with that name'});
  }

  public checkPassword(value: string): Observable<ValidationErrors | null> {
    return this.store.select('user')
    .pipe(
      debounceTime(300),
      take(1),
      map((user: IUser) => user.password === value ? null : {bad: 'Do not try to give me a shit, i want real password.'})
    );
  }

  public equalValidator(value: {password: string, confirmpassword: string}): ValidationErrors | null {
    const {password, confirmpassword} = value;
    return password === confirmpassword ? null : {notequal: 'Passwords are not equal'};
  }

  public usernameValidator(value: string): ValidationErrors | null {
    const valid: boolean = /^[a-z]*$/i.test(value);
    return valid ? null : {nospecial: 'No special symbols'};
  }

  public uniqUsernameValidator(value: string): Observable<ValidationErrors | null> {
    if (!value) {
      return of(null);
    }
    return timer(500)
      .pipe(
        switchMap(() => {
          return this.checkUsername(value)
            .pipe(
              map((errObj: ValidationErrors) => errObj ? errObj : null)
            );
        })
      );
  }
}
