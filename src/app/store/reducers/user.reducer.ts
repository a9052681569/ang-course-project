import { UserActionsType, UserActions } from '../actions/user.actions';
import { IRepository } from './search.reducer';

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
    favoriteRepos: IRepository[];
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
    events: [],
    favoriteRepos: []
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
            const updatedEvents = state.events.length > 30 ?
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
        case UserActions.ADD_TO_FAVOURITES_SUCCESS: {
            return {...state, favoriteRepos: [...state.favoriteRepos, {...action.payload, isFavourite: true}]};
        }
        case UserActions.REMOVE_FROM_FAVOURITES_SUCCESS: {
            const updatedItems = state.favoriteRepos.slice().filter(item => item.id !== action.payload.id);
            return {...state, favoriteRepos: updatedItems};
        }
        default: {
            return state;
        }
    }
}
