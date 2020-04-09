import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { IUser, IEvent } from '../reducers/user.reducer';
import { Action } from '@ngrx/store';
import { UsersService } from 'src/app/shared/servises/users/users.service';
import { MatSnackBar } from '@angular/material';
import { PatchUserError,
    PatchUserSuccess,
    PatchUserPending, UserActions,
    AddEventMessageSuccess,
     AddEventMessageError,
      AddEventMessagePending,
       DeleteEventMessagePending,
        DeleteEventMessageSuccess,
         DeleteEventMessageError,
          ClearEventMessagesPending,
           ClearEventMessagesSuccess,
            ClearEventMessagesError,
            SetUser,
            } from '../actions/user.actions';
import { IRepository } from '../reducers/search.reducer';
import { MakeFavourite, MakeUnfavourite } from '../actions/search.actions';
import { SetFavouritesPending } from '../actions/favourites.actions';


@Injectable()
export class UserEffects {

    public onSetUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.SET_USER),
        switchMap((action: SetUser) => {
            return of(new SetFavouritesPending(action.payload));
        })
    ));
    public patch$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.PATCH_USER_PENDING),
        switchMap((action: PatchUserPending) => {
            const {name, password} = action.payload;
            const notificationMessage = name ? 'изменили данные о себе' : password ? 'изменили пароль' : 'изменили адрес';

            return this.userService.patch(action.payload)
                .pipe(
                    mergeMap((user: IUser) => {
                        this.snackBar.open(`Вы успешно ${notificationMessage}`, '' , { duration: 2000 });
                        return [
                            new PatchUserSuccess(user),
                            new AddEventMessagePending(`Вы ${notificationMessage}`)
                        ];
                    }),
                    catchError((err: Error) => {
                        this.snackBar.open('Change Failed', '' , { duration: 2000 });
                        return of(new PatchUserError(err));
                    })
                );
        })
    ));
    public addMessage$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.ADD_EVENT_MESSAGE_PENDING),
        switchMap((action: AddEventMessagePending) => {
            return this.userService.addMessageToLocalStorage({text: action.payload, date: new Date()} as IEvent)
                .pipe(
                    mergeMap((event: IEvent) => {
                        return [
                            new AddEventMessageSuccess(event)
                        ];
                    }),
                    catchError((err: Error) => {
                        return of(new AddEventMessageError(err));
                    })
                );
        })
    ));
    public deleteMessage$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.DELETE_EVENT_MESSAGE_PENDING),
        switchMap((action: DeleteEventMessagePending) => {
            return this.userService.deleteMessageFromLocalStorage(action.payload)
                .pipe(
                    mergeMap((index: number) => {
                        return [
                            new DeleteEventMessageSuccess(index)
                        ];
                    }),
                    catchError((err: Error) => {
                        return of(new DeleteEventMessageError(err));
                    })
                );
        })
    ));
    public clearMessages$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.CLEAR_EVENT_MESSAGES_PENDING),
        switchMap((action: ClearEventMessagesPending) => {
            return this.userService.clearMessagesInLocalStorage(action.payload)
                .pipe(
                    mergeMap((event: IEvent) => {
                        return [
                            new ClearEventMessagesSuccess(event)
                        ];
                    }),
                    catchError((err: Error) => {
                        return of(new ClearEventMessagesError(err));
                    })
                );
        })
    ));

    constructor(
        private actions$: Actions,
        private userService: UsersService,
        private snackBar: MatSnackBar
    ) {}
}
