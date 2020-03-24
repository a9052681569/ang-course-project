import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, of, pipe, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay, debounceTime, switchMap } from 'rxjs/operators';

@Injectable()
export class ValidatorsService {
  private checkUsername(value: string): Observable<ValidationErrors | null> {
    return localStorage.getItem(`${value}.name`) === null ? of(null) : of({occupiedname: 'There is alredy user with that name'});
  }

  public constructor(private http: HttpClient) {}

  public equalValidator(value: {password: string, confirmpassword: string}): ValidationErrors | null {
    const {password, confirmpassword} = value;
    return password === confirmpassword ? null : {notequal: 'Passwords is not equal'};
  }

  public usernameValidator(value: string): ValidationErrors | null {
    const valid: boolean = /^[a-z]*$/i.test(value);
    return valid ? null : {nospecial: 'No special symbols'};
  }

  public uniqUsernameValidator(value: string): Observable<ValidationErrors | null> {
    localStorage.setItem('andrew.name', 'andrew');
    localStorage.setItem('andrew.password', 'bioware');

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
