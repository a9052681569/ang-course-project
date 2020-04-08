import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, mergeMap, take, distinctUntilChanged } from 'rxjs/operators';
import { IRepository, ISearchState, ISearchResult } from 'src/app/store/reducers/search.reducer';
import { Store, select } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { IUser } from 'src/app/store/reducers/user.reducer';


@Injectable()
export class SearchService {

  constructor(private http: HttpClient, private store: Store<IRootState>) {   }

  public sendRequest(repoName: string): Observable<ISearchResult> {
    // сервер ответит ошибкой если название будет пустой строкой, но логически для пользователя это не ошибка,
    // поэтому возвращаем null и обрабатываем этот случай
    return this.http.get<ISearchResult>(`https://api.github.com/search/repositories?q=${repoName}`);
  }
  public handleResponse(res: ISearchResult): Observable<ISearchState> {
    const actualUser: IUser = JSON.parse(localStorage.getItem(localStorage.getItem('token')));
    res.items.forEach((searchItem) => {
      actualUser.favoriteRepos.forEach((userItem) => {
        if (searchItem.id === userItem.id) {
          searchItem.isFavourite = true;
        }
      });
    });
    return of(res);
  }
}
