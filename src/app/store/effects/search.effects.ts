import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { SearchActions, SearchPending, SearchSuccess, SearchError } from '../actions/search.actions';
import { SearchService } from 'src/app/shared/servises/search/search.service';
import { ISearchState } from '../reducers/search.reducer';

@Injectable()
export class SearchEffects {

    public search$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(SearchActions.SEARCH_PENDING),
        switchMap((action: SearchPending) => {
            return this.searchService.sendRequest(action.payload)
                .pipe(
                    mergeMap((res: ISearchState) => {
                        return [
                            new SearchSuccess(res)
                        ];
                    }),
                    catchError((err: Error) => {
                        return of(new SearchError(err));
                    })
                );
        })
    ));

    constructor(
        private actions$: Actions,
        private searchService: SearchService
    ) {}
}
