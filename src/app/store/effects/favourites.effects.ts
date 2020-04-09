import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';
import { AddEventMessagePending } from '../actions/user.actions';
import { IRepository } from '../reducers/search.reducer';
import { MakeFavourite, MakeUnfavourite } from '../actions/search.actions';
import { FavouritesService } from 'src/app/shared/servises/favourites/favourites.service';
import { FavouritesActions,
        SetFavouritesSuccess,
        SetFavouritesError,
        AddToFavouritesPending,
        AddToFavouritesSuccess,
        AddToFavouritesError,
        RemoveFromFavouritesPending,
        RemoveFromFavouritesSuccess,
        RemoveFromFavouritesError
     } from '../actions/favourites.actions';
import { IFavouriteState } from '../reducers/favourites.reducer';


@Injectable()
export class FavouritesEffects {

    public set$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(FavouritesActions.SET_FAVOURITES_PENDING),
        switchMap(() => {
            return this.favouritesService.getActualFavourites$()
                .pipe(
                    mergeMap((state: IFavouriteState) => {
                        return [
                            new SetFavouritesSuccess(state),
                        ];
                    }),
                    catchError((err: Error) => {
                        return of(new SetFavouritesError(err));
                    })
                );
        })
    ));

    public addToFavourites$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(FavouritesActions.ADD_TO_FAVOURITES_PENDING),
        switchMap((action: AddToFavouritesPending) => {
            return this.favouritesService.addRepoToLocalStorage(action.payload)
                .pipe(
                    mergeMap((repo: IRepository) => {
                        this.snackBar.open('Добавлено в избранное', '' , { duration: 2000 });
                        return [
                            new MakeFavourite(repo),
                            new AddToFavouritesSuccess(repo),
                            new AddEventMessagePending(`Вы добавили репозиторий в избранное`)
                        ];
                    }),
                    catchError((err: Error) => {
                        this.snackBar.open('Не удалось добавить в избранное', '' , { duration: 2000 });
                        return of(new AddToFavouritesError(err));
                    })
                );
        })
    ));
    public removeFromFavourites$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(FavouritesActions.REMOVE_FROM_FAVOURITES_PENDING),
        switchMap((action: RemoveFromFavouritesPending) => {
            return this.favouritesService.deleteRepoFromLocalStorage(action.payload)
                .pipe(
                    mergeMap((repo: IRepository) => {
                        this.snackBar.open('Удалено из избранного', '' , { duration: 2000 });
                        return [
                            new MakeUnfavourite(repo),
                            new RemoveFromFavouritesSuccess(repo),
                            new AddEventMessagePending(`Вы удалили репозиторий из избранного`)
                        ];
                    }),
                    catchError((err: Error) => {
                        this.snackBar.open('Не удалось удалить из избранного', '' , { duration: 2000 });
                        return of(new RemoveFromFavouritesError(err));
                    })
                );
        })
    ));


    constructor(
        private actions$: Actions,
        private favouritesService: FavouritesService,
        private snackBar: MatSnackBar
    ) {}
}
