import { Params, NavigationExtras, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

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
