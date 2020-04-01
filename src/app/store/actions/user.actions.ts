import { Action } from '@ngrx/store';

export enum UserActions {
    SET_USER = '[User] SET_USER',
    PATCH_USER_PENDING = '[User] PATCH_USER_PENDING',
    PATCH_USER_SUCCESS = '[User] PATCH_USER_SUCCESS',
    PATCH_USER_ERROR = '[User] PATCH_USER_ERROR'
}

export class SetUser implements Action {
    public type: string = UserActions.SET_USER;

    public constructor( public payload: any) {}
}
export class PatchUserPending implements Action {
    public type: string = UserActions.PATCH_USER_PENDING;

    public constructor( public payload: any) {}
}
export class PatchUserSuccess implements Action {
    public type: string = UserActions.PATCH_USER_SUCCESS;

    public constructor( public payload: any) {}
}
export class PatchUserError implements Action {
    public type: string = UserActions.PATCH_USER_ERROR;

    public constructor( public payload: any) {}
}

export type UserActionsType =
    | SetUser
    | PatchUserPending
    | PatchUserSuccess
    | PatchUserError;
