import { IAuthState, authReducer } from './reducers/auth.reducer';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { AuthActionsType, AuthActions } from './actions/auth.actions';

import { IUser, userReducer } from './reducers/user.reducer';
import { IRouterStateUrl, customRouterReducer } from './reducers/router.reducer';

export interface IRootState {
    auth: IAuthState;
    user: IUser;
    router: RouterReducerState<IRouterStateUrl>;
}

export const reducer: ActionReducerMap<IRootState> = {
    auth: authReducer,
    user: userReducer,
    router: customRouterReducer
};


export function logoutAndClearState(red: ActionReducer<IRootState>): ActionReducer<IRootState> {
    return (state: IRootState, action: AuthActionsType): IRootState => {
        switch (action.type) {
            case AuthActions.LOGOUT_SUCCESS: {
                state = undefined;
            }
        }
        return red(state, action);
    };
}

export const metaReducers: MetaReducer<IRootState>[] = [logoutAndClearState];


