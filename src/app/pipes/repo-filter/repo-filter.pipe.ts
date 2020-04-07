import { Pipe, PipeTransform } from '@angular/core';
import { IRepository } from 'src/app/store/reducers/search.reducer';

@Pipe({
  name: 'repoFilter'
})
export class RepoFilterPipe implements PipeTransform {

  transform(repos: IRepository[], searchText: string): IRepository[] {
    if (!searchText) {
      return repos;
    }
    return repos.filter((repo: IRepository) => {
      return repo.name
        .trim()
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }

}
