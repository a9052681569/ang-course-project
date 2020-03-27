import { UserActionsType, UserActions } from '../actions/user.actions';

export interface IAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
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
    password: ''
};

export function userReducer(state: IUser = initialState, action: UserActionsType): IUser {
    switch (action.type) {
        case UserActions.SET_USER: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}
