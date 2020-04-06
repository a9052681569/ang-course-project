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
            AddToFavouritesPending,
            AddToFavouritesSuccess,
            AddToFavouritesError,
            RemoveFromFavouritesPending,
            RemoveFromFavouritesSuccess,
            RemoveFromFavouritesError} from '../actions/user.actions';
import { IRepository } from '../reducers/search.reducer';
<<<<<<< HEAD
import { MakeFavourite, MakeUnfavourite } from '../actions/search.actions';

=======
>>>>>>> f34434d8e4c0ef9b6cee9c9f5e077f199b012f0e

@Injectable()
export class UserEffects {

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
                            new AddEventMessagePending({text: `Вы ${notificationMessage}`, date: new Date()})
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
            return this.userService.addMessageToLocalStorage(action.payload)
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

    public addToFavourites$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.ADD_TO_FAVOURITES_PENDING),
        switchMap((action: AddToFavouritesPending) => {
            return this.userService.addRepoToLocalStorage(action.payload)
                .pipe(
                    mergeMap((repo: IRepository) => {
                        this.snackBar.open('Добавлено в избранное');
                        return [
<<<<<<< HEAD
                            new MakeFavourite(repo),
=======
>>>>>>> f34434d8e4c0ef9b6cee9c9f5e077f199b012f0e
                            new AddToFavouritesSuccess(repo),
                            new AddEventMessagePending({text: `Вы добавили репозиторий в избранное`, date: new Date()})
                        ];
                    }),
                    catchError((err: Error) => {
                        this.snackBar.open('Не удалось добавить в избранное');
                        return of(new AddToFavouritesError(err));
                    })
                );
        })
    ));
    public removeFromFavourites$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.REMOVE_FROM_FAVOURITES_PENDING),
        switchMap((action: RemoveFromFavouritesPending) => {
            return this.userService.deleteRepoFromLocalStorage(action.payload)
                .pipe(
                    mergeMap((repo: IRepository) => {
                        this.snackBar.open('Удалено из избранного');
                        return [
<<<<<<< HEAD
                            new MakeUnfavourite(repo),
=======
>>>>>>> f34434d8e4c0ef9b6cee9c9f5e077f199b012f0e
                            new RemoveFromFavouritesSuccess(repo),
                            new AddEventMessagePending({text: `Вы удалили репозиторий из избранного`, date: new Date()})
                        ];
                    }),
                    catchError((err: Error) => {
                        this.snackBar.open('Не удалось удалить из избранного');
                        return of(new RemoveFromFavouritesError(err));
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
