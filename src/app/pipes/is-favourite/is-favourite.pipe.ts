import { Pipe, PipeTransform } from '@angular/core';
import { IRepository } from 'src/app/store/reducers/search.reducer';

@Pipe({
  name: 'isFavourite'
})
export class IsFavouritePipe implements PipeTransform {

  transform(repos: IRepository[]): IRepository[] {
    return repos.map((item) => {
      item.isFavourite = false;
      return item;
    });
  }
}
