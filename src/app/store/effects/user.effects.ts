import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { IUser } from '../reducers/user.reducer';
import { SetUser, UserActions, PatchUserPending, PatchUserSuccess, PatchUserError } from '../actions/user.actions';

import { Action } from '@ngrx/store';
import { UsersService } from 'src/app/shared/servises/users/users.service';

@Injectable()
export class UserEffects {

    public patch$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.PATCH_USER_PENDING),
        switchMap((action: PatchUserPending) => {
            return this.userService.patch(action.payload)
                .pipe(
                    mergeMap((user: IUser) => {
                        return [
                            new PatchUserSuccess(user)
                        ];
                    }),
                    catchError((err: Error) => of(new PatchUserError(err)))
                );
        })
    ));

    constructor(
        private actions$: Actions,
        private userService: UsersService
    ) {}
}
