import { Pipe, PipeTransform } from '@angular/core';
import { IRepository } from 'src/app/store/reducers/search.reducer';

@Pipe({
  name: 'sortByStars'
})
export class SortByStarsPipe implements PipeTransform {

  transform(repos: IRepository[]): IRepository[] {
    return repos ?
    repos.slice().sort((a: IRepository, b: IRepository): number => {
      return b.stargazers_count - a.stargazers_count;
    })
    :
    repos;
  }

}
