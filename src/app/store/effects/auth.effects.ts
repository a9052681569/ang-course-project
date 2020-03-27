import { Injectable } from '@angular/core';
import { Actions, ofType, ROOT_EFFECTS_INIT, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AuthActions, LoginPending, LoginSuccess, LoginError,
     SignupPending, SignupSuccess, SignupError, LogoutSuccess, LogoutError, LogoutPending } from '../actions/auth.actions';
import { AuthService } from 'src/app/shared/servises/auth/auth.service';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { IUser } from '../reducers/user.reducer';
import { SetUser } from '../actions/user.actions';
import { Go } from '../actions/router.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffects {

    public login$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.LOGIN_PENDING),
        switchMap((action: LoginPending) => {
            return this.authService.login(action.payload)
                .pipe(
                    switchMap((user: IUser) => {
                        return this.authService.tokenToLocalStorage(user);
                    }),
                    mergeMap((user: IUser) => {
                        if (!user) {
                            return [new LoginError(new Error())];
                        }
                        return [
                            new LoginSuccess(user),
                            new SetUser(user),
                            new Go({path: ['backoffice']})
                        ];
                    }),
                    catchError((err: Error) => of(new LoginError(err)))
                );
        })
    ));

    public signup$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
        ofType(AuthActions.SIGNUP_PENDING),
        switchMap((action: SignupPending) => {
            return this.authService.signup(action.payload)
                .pipe(
                    switchMap((user: IUser) => {
                        return this.authService.tokenToLocalStorage(user);
                    }),
                    mergeMap((user: IUser) => [
                        new SignupSuccess(user),
                        new SetUser(user),
                        new Go({path: ['backoffice']})
                    ]),
                    catchError((err: Error) => of(new SignupError(err)))
                );
        })
    ));

    public logout$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
        ofType(AuthActions.LOGOUT_PENDING),
        switchMap(() => {
            return this.authService.removeTokenFromLocalStorage()
                .pipe(
                    mergeMap(() => [
                        new LogoutSuccess(),
                        new Go({path: ['login']})
                    ]),
                    catchError((err: Error) => of(new LogoutError(err)))
                );
        })
    ));

    public check$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
        ofType(ROOT_EFFECTS_INIT),
        switchMap(() => {
            return this.authService.getTokenFromLocalStorage()
                .pipe(
                    switchMap((token: string | null) => {
                        return this.authService.checkUser(token);
                    }),
                    mergeMap((user: IUser) => {
                        if (!user) {
                            return [new LogoutPending()];
                        }
                        return [
                        new LoginSuccess(user),
                        new SetUser(user)
                        ];
                    }),
                    catchError((err: Error) => of(new LogoutError(err)))
                );
        })
    ));

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}
}
