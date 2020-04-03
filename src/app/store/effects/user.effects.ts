import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { IUser, IEvent } from '../reducers/user.reducer';
import { UserActions, PatchUserPending, PatchUserSuccess,
     PatchUserError, AddMessagePending, AddMessageSuccess,
     AddMessageError, ClearMessagesPending, ClearMessagesSuccess,
     ClearMessagesError, DeleteMessagePending, DeleteMessageSuccess,
     DeleteMessageError } from '../actions/user.actions';

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
    public addMessage$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.ADD_MESSAGE_PENDING),
        switchMap((action: AddMessagePending) => {
            return this.userService.addMessageToLocalStorage(action.payload)
                .pipe(
                    mergeMap((event: IEvent) => {
                        return [
                            new AddMessageSuccess(event)
                        ];
                    }),
                    catchError((err: Error) => {
                        return of(new AddMessageError(err));
                    })
                );
        })
    ));
    public deleteMessage$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.DELETE_MESSAGE_PENDING),
        switchMap((action: DeleteMessagePending) => {
            return this.userService.deleteMessageFromLocalStorage(action.payload)
                .pipe(
                    mergeMap((index: number) => {
                        return [
                            new DeleteMessageSuccess(index)
                        ];
                    }),
                    catchError((err: Error) => {
                        return of(new DeleteMessageError(err));
                    })
                );
        })
    ));
    public clearMessages$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.CLEAR_MESSAGES_PENDING),
        switchMap((action: ClearMessagesPending) => {
            return this.userService.clearMessagesInLocalStorage(action.payload)
                .pipe(
                    mergeMap((event: IEvent) => {
                        return [
                            new ClearMessagesSuccess(event)
                        ];
                    }),
                    catchError((err: Error) => {
                        return of(new ClearMessagesError(err));
                    })
                );
        })
    ));

    constructor(
        private actions$: Actions,
        private userService: UsersService
    ) {}
}
