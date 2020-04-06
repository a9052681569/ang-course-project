import { Action } from '@ngrx/store';



export enum SearchActions {
    SEARCH_PENDING = '[Search] SEARCH_PENDING',
    SEARCH_SUCCESS = '[Search] SEARCH_SUCCESS',
<<<<<<< HEAD
    SEARCH_ERROR = '[Search] SEARCH_ERROR',
    MAKE_FAVOURITE = '[Search] MAKE_FAVOURITE',
    MAKE_UNFAVOURITE = '[Search] MAKE_UNFAVOURITE',
=======
    SEARCH_ERROR = '[Search] SEARCH_ERROR'
>>>>>>> f34434d8e4c0ef9b6cee9c9f5e077f199b012f0e
}

export class SearchPending implements Action {
    public type: string = SearchActions.SEARCH_PENDING;

    public constructor(public payload: any) {}
}
export class SearchSuccess implements Action {
    public type: string = SearchActions.SEARCH_SUCCESS;

    public constructor(public payload: any) {}
}
export class SearchError implements Action {
    public type: string = SearchActions.SEARCH_ERROR;

    public constructor(public payload: any) {}
}
export class MakeFavourite implements Action {
    public type: string = SearchActions.MAKE_FAVOURITE;

    public constructor(public payload: any) {}
}
export class MakeUnfavourite implements Action {
    public type: string = SearchActions.MAKE_UNFAVOURITE;

    public constructor(public payload: any) {}
}

export type SearchActionsType =
 | SearchPending
 | SearchSuccess
 | SearchError
 | MakeFavourite
 | MakeUnfavourite;
