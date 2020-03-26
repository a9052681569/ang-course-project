import { IAuthState, authReducer } from './reducers/auth.reducer';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { RouterStateSerializer, RouterReducerState, routerReducer } from '@ngrx/router-store';
import { AuthActionsType, AuthActions } from './actions/auth.actions';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Params, NavigationExtras } from '@angular/router';
import { IUser, userReducer } from './reducers/user.reducer';
import { IRouterStateUrl } from './reducers/router.reducer';

export interface IRootState {
    auth: IAuthState;
    user: IUser;
    router: RouterReducerState<IRouterStateUrl>;
}

export const reducer: ActionReducerMap<IRootState> = {
    auth: authReducer,
    user: userReducer,
    router: routerReducer
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


