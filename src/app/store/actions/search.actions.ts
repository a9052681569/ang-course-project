import { Action } from '@ngrx/store';



export enum SearchActions {
    SEARCH_PENDING = '[Search] SEARCH_PENDING',
    SEARCH_SUCCESS = '[Search] SEARCH_SUCCESS',
    SEARCH_ERROR = '[Search] SEARCH_ERROR',
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

export type SearchActionsType =
 | SearchPending
 | SearchSuccess
 | SearchError;
