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

  public sendRequest(repoName: string): Observable<object | string> {
    // сервер ответит ошибкой если нет запроса, но логически для пользователя это не ошибка,
    // поэтому возвращаем строку и обрабатываем этот случай в редьюсере
    return repoName.length > 0 ?
      this.http.get(`https://api.github.com/search/repositories?q=${repoName}`).pipe(
        distinctUntilChanged(),
        take(1),
        switchMap((res: ISearchResult) => {
          return this.store.pipe(
            select('user'),
            distinctUntilChanged(),
            take(1),
            map((user: IUser) => {
              res.items.forEach((searchItem) => {
                user.favoriteRepos.forEach((userItem) => {
                  if (searchItem.id === userItem.id) {
                    searchItem.isFavourite = true;
                  }
                });
              });
              return res;
            })
          );
        })
      )
      :
      of('строка');
  }
}
