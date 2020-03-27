import { Action } from '@ngrx/store';
import { IRouterPayload } from '../reducers/router.reducer';



export enum RouterActions {
    GO = '[Router] GO',
    BACK = '[Router] BACK',
    FORWARD = '[Router] FORWARD'
}

export class Go implements Action {
    public type: string = RouterActions.GO;

    public constructor(public payload: IRouterPayload) {}
}

export class Back implements Action {
    public type: string = RouterActions.BACK;
}

export class Forward implements Action {
    public type: string = RouterActions.FORWARD;
}

export type RouterActionsType =
 | Go
 | Back
 | Forward;
