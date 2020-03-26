import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable,  } from 'rxjs';
import { Go, RouterActions, Back, Forward } from '../actions/router.actions';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {

    @Effect({dispatch: false})
    public navigate$: Observable<any> = this.actions$.pipe(
            ofType(RouterActions.GO),
            tap((action: Go) => {
                const {path, query: queryParams, extras} = action.payload;
                this.router.navigate(path, {queryParams, ...extras});
            })
        );
    @Effect({dispatch: false})
    public navigateBack$: Observable<any> = this.actions$.pipe(
            ofType(RouterActions.BACK),
            tap((action: Back) => {
                this.location.back();
            })
        );
    @Effect({dispatch: false})
    public navigateForward$: Observable<any> = this.actions$.pipe(
            ofType(RouterActions.FORWARD),
            tap((action: Forward) => {
                this.location.forward();
            })
        );
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) {}
}
