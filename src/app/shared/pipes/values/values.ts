import { Pipe, PipeTransform } from '@angular/core';
import { IRepository } from 'src/app/store/reducers/search.reducer';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(reposEntities: {[key: string]: IRepository}): IRepository[] {
    return Object.values(reposEntities);
  }

}
