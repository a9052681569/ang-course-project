import { Action } from '@ngrx/store';

export enum FavouritesActions {
    SET_FAVOURITES_PENDING = '[Favourites] SET_FAVOURITES_PENDING',
    SET_FAVOURITES_SUCCESS = '[Favourites] SET_FAVOURITES_SUCCESS',
    SET_FAVOURITES_ERROR = '[Favourites] SET_FAVOURITES_ERROR',

    ADD_TO_FAVOURITES_PENDING = '[Favourites] ADD_TO_FAVOURITES_PENDING',
    ADD_TO_FAVOURITES_SUCCESS = '[Favourites] ADD_TO_FAVOURITES_SUCCESS',
    ADD_TO_FAVOURITES_ERROR = '[Favourites] ADD_TO_FAVOURITES_ERROR',

    REMOVE_FROM_FAVOURITES_PENDING = '[Favourites] REMOVE_FROM_FAVOURITES_PENDING',
    REMOVE_FROM_FAVOURITES_SUCCESS = '[Favourites] REMOVE_FROM_FAVOURITES_SUCCESS',
    REMOVE_FROM_FAVOURITES_ERROR = '[Favourites] REMOVE_FROM_FAVOURITES_ERROR',
}

export class SetFavouritesPending implements Action {
    public type: string = FavouritesActions.SET_FAVOURITES_PENDING;

    public constructor( public payload: any) {}
}
export class SetFavouritesSuccess implements Action {
    public type: string = FavouritesActions.SET_FAVOURITES_SUCCESS;

    public constructor( public payload: any) {}
}
export class SetFavouritesError implements Action {
    public type: string = FavouritesActions.SET_FAVOURITES_ERROR;

    public constructor( public payload: any) {}
}

export class AddToFavouritesPending implements Action {
    public type: string = FavouritesActions.ADD_TO_FAVOURITES_PENDING;

    public constructor(public payload: any) {}
}
export class AddToFavouritesSuccess implements Action {
    public type: string = FavouritesActions.ADD_TO_FAVOURITES_SUCCESS;

    public constructor(public payload: any) {}
}
export class AddToFavouritesError implements Action {
    public type: string = FavouritesActions.ADD_TO_FAVOURITES_ERROR;

    public constructor(public payload: any) {}
}
export class RemoveFromFavouritesPending implements Action {
    public type: string = FavouritesActions.REMOVE_FROM_FAVOURITES_PENDING;

    public constructor(public payload: any) {}
}
export class RemoveFromFavouritesSuccess implements Action {
    public type: string = FavouritesActions.REMOVE_FROM_FAVOURITES_SUCCESS;

    public constructor(public payload: any) {}
}
export class RemoveFromFavouritesError implements Action {
    public type: string = FavouritesActions.REMOVE_FROM_FAVOURITES_ERROR;

    public constructor(public payload: any) {}
}

export type FavouritesActionsType =
    | SetFavouritesPending
    | SetFavouritesSuccess
    | SetFavouritesError
    | AddToFavouritesPending
    | AddToFavouritesSuccess
    | AddToFavouritesError
    | RemoveFromFavouritesPending
    | RemoveFromFavouritesSuccess
    | RemoveFromFavouritesError;
