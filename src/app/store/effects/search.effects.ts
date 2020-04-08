import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { SearchActions, SearchPending, SearchSuccess, SearchError, SearchEmpty } from '../actions/search.actions';
import { SearchService } from 'src/app/shared/servises/search/search.service';
import { ISearchState, ISearchResult } from '../reducers/search.reducer';
import { AddEventMessagePending } from '../actions/user.actions';

@Injectable()
export class SearchEffects {

    public search$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(SearchActions.SEARCH_PENDING),
        switchMap((action: SearchPending) => {
            if (action.payload.trim() !== '') {
                return this.searchService.sendRequest(action.payload)
                    .pipe(
                        switchMap((res: ISearchResult) => this.searchService.handleResponse(res)),
                        mergeMap((res: ISearchState) => [
                                new AddEventMessagePending(`Вы запросили репозиторий с названием ${action.payload}`),
                                new SearchSuccess(res)
                        ]),
                        catchError((err: Error) => of(new SearchError(err)))
                    );
            }
            return of(new SearchEmpty(action.payload));
        })
    ));

    constructor(
        private actions$: Actions,
        private searchService: SearchService
    ) {}
}
