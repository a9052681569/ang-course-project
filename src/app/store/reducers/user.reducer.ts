import { UserActionsType, UserActions } from '../actions/user.actions';
import { IRepository } from './search.reducer';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface IAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
}
export interface IEvent {
    text: string;
    date: Date;
}


export interface IUser {
    name: string;
    surname: string;
    createdAt: Date;
    email: string;
    username: string;
    id: string;
    address?: IAddress[];
    gender: boolean;
    password: string;
    events: IEvent[];
}

export const initialState: IUser = {
    name: '',
    surname: '',
    createdAt: new Date(),
    email: '',
    username: '',
    id: '',
    address: [],
    gender: false,
    password: '',
    events: []
};

export function userReducer(state: IUser = initialState, action: UserActionsType): IUser {
    switch (action.type) {
        case UserActions.SET_USER: {
            localStorage.setItem(action.payload.username, JSON.stringify({...state, ...action.payload}));
            return {
                ...state,
                ...action.payload
            };
        }
        case UserActions.PATCH_USER_SUCCESS: {
            return {
                ...state,
                ...action.payload
            };
        }
        case UserActions.ADD_EVENT_MESSAGE_SUCCESS: {
            const updatedEvents = state.events.length >= 30 ?
            [...state.events.slice().splice(1), action.payload]
            :
            [...state.events, action.payload];
            return {...state, events: updatedEvents};
        }
        case UserActions.DELETE_EVENT_MESSAGE_SUCCESS: {
            const updatedEvents = state.events.slice().filter((item, index) => index !== action.payload);
            return {...state, events: updatedEvents};
        }
        case UserActions.CLEAR_EVENT_MESSAGES_SUCCESS: {
            return {...state, events: []};
        }
        default: {
            return state;
        }
    }
}
