import { Action } from '@ngrx/store';
import { IEvent } from '../reducers/user.reducer';

export enum UserActions {
    SET_USER = '[User] SET_USER',
    PATCH_USER_PENDING = '[User] PATCH_USER_PENDING',
    PATCH_USER_SUCCESS = '[User] PATCH_USER_SUCCESS',
    PATCH_USER_ERROR = '[User] PATCH_USER_ERROR',

    ADD_MESSAGE_PENDING = '[User] ADD_MESSAGE_PENDING',
    ADD_MESSAGE_SUCCESS = '[User] ADD_MESSAGE_SUCCESS',
    ADD_MESSAGE_ERROR = '[User] ADD_MESSAGE_ERROR',

    DELETE_MESSAGE_PENDING = '[User] DELETE_MESSAGE_PENDING',
    DELETE_MESSAGE_SUCCESS = '[User] DELETE_MESSAGE_SUCCESS',
    DELETE_MESSAGE_ERROR = '[User] DELETE_MESSAGE_ERROR',

    CLEAR_MESSAGES_PENDING = '[User] CLEAR_MESSAGES_PENDING',
    CLEAR_MESSAGES_SUCCESS = '[User] CLEAR_MESSAGES_SUCCESS',
    CLEAR_MESSAGES_ERROR = '[User] CLEAR_MESSAGES_ERROR'
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

export class AddMessagePending implements Action {
    public type: string = UserActions.ADD_MESSAGE_PENDING;

    public constructor(public payload: any) {}
}
export class AddMessageSuccess implements Action {
    public type: string = UserActions.ADD_MESSAGE_SUCCESS;

    public constructor(public payload: IEvent) {}
}
export class AddMessageError implements Action {
    public type: string = UserActions.ADD_MESSAGE_ERROR;

    public constructor(public payload: any) {}
}
export class DeleteMessagePending implements Action {
    public type: string = UserActions.DELETE_MESSAGE_PENDING;

    public constructor(public payload: any) {}
}
export class DeleteMessageSuccess implements Action {
    public type: string = UserActions.DELETE_MESSAGE_SUCCESS;

    public constructor(public payload: number) {}
}
export class DeleteMessageError implements Action {
    public type: string = UserActions.DELETE_MESSAGE_ERROR;

    public constructor(public payload: any) {}
}

export class ClearMessagesPending implements Action {
    public type: string = UserActions.CLEAR_MESSAGES_PENDING;

    public constructor(public payload: any) {}
}
export class ClearMessagesSuccess implements Action {
    public type: string = UserActions.CLEAR_MESSAGES_SUCCESS;

    public constructor(public payload: any) {}
}
export class ClearMessagesError implements Action {
    public type: string = UserActions.CLEAR_MESSAGES_ERROR;

    public constructor(public payload: any) {}
}

export type UserActionsType =
    | SetUser
    | PatchUserPending
    | PatchUserSuccess
    | PatchUserError
    | AddMessagePending
    | AddMessageSuccess
    | AddMessageError
    | DeleteMessagePending
    | DeleteMessageSuccess
    | DeleteMessageError
    | ClearMessagesPending
    | ClearMessagesSuccess
    | ClearMessagesError;
