import { UserActionsType, UserActions } from '../actions/user.actions';

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
    events: [{text: 'прпмиве', date: new Date()},
     {text: 'sdafsadf', date: new Date()}, {text: 'xzfsdfgccxc', date: new Date()}]
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
            alert('Change Successfully');
            return {
                ...state,
                ...action.payload
            };
        }
        case UserActions.PATCH_USER_ERROR: {
            alert('Change failed');
            return state;
        }
        case UserActions.ADD_MESSAGE_SUCCESS: {
            return {...state, events: [...state.events, action.payload]};
        }
        case UserActions.DELETE_MESSAGE_SUCCESS: {
            const updatedEvents = state.events.slice().reduce((acc, item, index) => {
                if (index !== action.payload) {
                    acc.push(item);
                }
                return acc;
            }, []);
            return {...state, events: updatedEvents};
        }
        case UserActions.CLEAR_MESSAGES_SUCCESS: {
            return {...state, events: []};
        }
        default: {
            return state;
        }
    }
}
