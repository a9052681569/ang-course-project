import { AuthActionsType, AuthActions } from '../actions/auth.actions';
import { MatSnackBar } from '@angular/material';

export interface IAuthState {
    isLogged: boolean;
}

export const initialState: IAuthState = {
    isLogged: false
};

export function authReducer(state: IAuthState = initialState, action: AuthActionsType): IAuthState {
    switch (action.type) {
        case AuthActions.LOGIN_SUCCESS: {
            return {...state, isLogged: true};
        }
        case AuthActions.LOGIN_ERROR: {
            return state;
        }
        case AuthActions.SIGNUP_SUCCESS: {
            return {...state, isLogged: true};
        }
        case AuthActions.LOGOUT_SUCCESS: {
            return {...initialState};
        }
        default: {
            return state;
        }
    }
}
