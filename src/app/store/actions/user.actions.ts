import { Action } from '@ngrx/store';
import { IEvent } from '../reducers/user.reducer';

export enum UserActions {
    SET_USER = '[User] SET_USER',
    PATCH_USER_PENDING = '[User] PATCH_USER_PENDING',
    PATCH_USER_SUCCESS = '[User] PATCH_USER_SUCCESS',
    PATCH_USER_ERROR = '[User] PATCH_USER_ERROR',



    ADD_EVENT_MESSAGE_PENDING = '[User] ADD_MESSAGE_PENDING',
    ADD_EVENT_MESSAGE_SUCCESS = '[User] ADD_MESSAGE_SUCCESS',
    ADD_EVENT_MESSAGE_ERROR = '[User] ADD_MESSAGE_ERROR',

    DELETE_EVENT_MESSAGE_PENDING = '[User] DELETE_MESSAGE_PENDING',
    DELETE_EVENT_MESSAGE_SUCCESS = '[User] DELETE_MESSAGE_SUCCESS',
    DELETE_EVENT_MESSAGE_ERROR = '[User] DELETE_MESSAGE_ERROR',

    CLEAR_EVENT_MESSAGES_PENDING = '[User] CLEAR_MESSAGES_PENDING',
    CLEAR_EVENT_MESSAGES_SUCCESS = '[User] CLEAR_MESSAGES_SUCCESS',
    CLEAR_EVENT_MESSAGES_ERROR = '[User] CLEAR_MESSAGES_ERROR',



    ADD_TO_FAVOURITES_PENDING = '[User] ADD_TO_FAVOURITES_PENDING',
    ADD_TO_FAVOURITES_SUCCESS = '[User] ADD_TO_FAVOURITES_SUCCESS',
    ADD_TO_FAVOURITES_ERROR = '[User] ADD_TO_FAVOURITES_ERROR',

    REMOVE_FROM_FAVOURITES_PENDING = '[User] REMOVE_FROM_FAVOURITES_PENDING',
    REMOVE_FROM_FAVOURITES_SUCCESS = '[User] REMOVE_FROM_FAVOURITES_SUCCESS',
    REMOVE_FROM_FAVOURITES_ERROR = '[User] REMOVE_FROM_FAVOURITES_ERROR',
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




export class AddEventMessagePending implements Action {
    public type: string = UserActions.ADD_EVENT_MESSAGE_PENDING;

    public constructor(public payload: any) {}
}
export class AddEventMessageSuccess implements Action {
    public type: string = UserActions.ADD_EVENT_MESSAGE_SUCCESS;

    public constructor(public payload: IEvent) {}
}
export class AddEventMessageError implements Action {
    public type: string = UserActions.ADD_EVENT_MESSAGE_ERROR;

    public constructor(public payload: any) {}
}
export class DeleteEventMessagePending implements Action {
    public type: string = UserActions.DELETE_EVENT_MESSAGE_PENDING;

    public constructor(public payload: any) {}
}
export class DeleteEventMessageSuccess implements Action {
    public type: string = UserActions.DELETE_EVENT_MESSAGE_SUCCESS;

    public constructor(public payload: number) {}
}
export class DeleteEventMessageError implements Action {
    public type: string = UserActions.DELETE_EVENT_MESSAGE_ERROR;

    public constructor(public payload: any) {}
}

export class ClearEventMessagesPending implements Action {
    public type: string = UserActions.CLEAR_EVENT_MESSAGES_PENDING;

    public constructor(public payload: any) {}
}
export class ClearEventMessagesSuccess implements Action {
    public type: string = UserActions.CLEAR_EVENT_MESSAGES_SUCCESS;

    public constructor(public payload: any) {}
}
export class ClearEventMessagesError implements Action {
    public type: string = UserActions.CLEAR_EVENT_MESSAGES_ERROR;

    public constructor(public payload: any) {}
}




export class AddToFavouritesPending implements Action {
    public type: string = UserActions.ADD_TO_FAVOURITES_PENDING;

    public constructor(public payload: any) {}
}
export class AddToFavouritesSuccess implements Action {
    public type: string = UserActions.ADD_TO_FAVOURITES_SUCCESS;

    public constructor(public payload: any) {}
}
export class AddToFavouritesError implements Action {
    public type: string = UserActions.ADD_TO_FAVOURITES_ERROR;

    public constructor(public payload: any) {}
}
export class RemoveFromFavouritesPending implements Action {
    public type: string = UserActions.REMOVE_FROM_FAVOURITES_PENDING;

    public constructor(public payload: any) {}
}
export class RemoveFromFavouritesSuccess implements Action {
    public type: string = UserActions.REMOVE_FROM_FAVOURITES_SUCCESS;

    public constructor(public payload: any) {}
}
export class RemoveFromFavouritesError implements Action {
    public type: string = UserActions.REMOVE_FROM_FAVOURITES_ERROR;

    public constructor(public payload: any) {}
}

export type UserActionsType =
    | SetUser
    | PatchUserPending
    | PatchUserSuccess
    | PatchUserError
    | AddEventMessagePending
    | AddEventMessageSuccess
    | AddEventMessageError
    | DeleteEventMessagePending
    | DeleteEventMessageSuccess
    | DeleteEventMessageError
    | ClearEventMessagesPending
    | ClearEventMessagesSuccess
    | ClearEventMessagesError
    | AddToFavouritesPending
    | AddToFavouritesSuccess
    | AddToFavouritesError
    | RemoveFromFavouritesPending
    | RemoveFromFavouritesSuccess
    | RemoveFromFavouritesError;
