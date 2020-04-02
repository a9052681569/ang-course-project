import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {   }

  public sendRequest(repoName: string): Observable<object> {
    // сервер ответит ошибкой если нет запроса, но логически для пользователя это не ошибка,
    // поэтому возвращаем строку и обрабатываем этот случай в редьюсере
    return repoName ?
     this.http.get(`https://api.github.com/search/repositories?q=${repoName}`)
     :
     of('строка');
  }
}
