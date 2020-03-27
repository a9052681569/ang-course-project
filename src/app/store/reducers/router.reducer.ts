import { Params, NavigationExtras, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer, RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterActionsType } from '../actions/router.actions';

export interface IRouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}
export interface IRouterPayload {
    path: any[];
    query?: any;
    extras?: NavigationExtras;
}

export class CustomRouterSerializer implements RouterStateSerializer<IRouterStateUrl> {
    public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
        const {
            url,
            root: {queryParams}
        } = routerState;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const {params} = state;
        return {url, params, queryParams};
    }
}

export function customRouterReducer(
    state: RouterReducerState<IRouterStateUrl>,
    action: RouterActionsType
    ): RouterReducerState<IRouterStateUrl> {
    return routerReducer(state, action);
}
