import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IRepository } from 'src/app/store/reducers/search.reducer';
import { favouriteAdapter, IFavouriteState } from 'src/app/store/reducers/favourites.reducer';
import { isNull } from 'util';

@Injectable()
export class FavouritesService {

  private getActualFavourites(): IFavouriteState {
    const actualFavourites = JSON.parse(localStorage.getItem(`${localStorage.getItem('token')}Favourites`));
    return isNull(actualFavourites) ? favouriteAdapter.getInitialState() : actualFavourites;
  }

  public getActualFavourites$(): Observable<IFavouriteState> {
    return of(this.getActualFavourites());
  }

  public addRepoToLocalStorage(repo: IRepository): Observable<IRepository> {
    let actualFavourites: IFavouriteState = this.getActualFavourites();
    actualFavourites = favouriteAdapter.addOne({...repo, isFavourite: true}, actualFavourites);
    localStorage.setItem(`${localStorage.getItem('token')}Favourites`, JSON.stringify(actualFavourites));
    return of(repo);
  }


  public deleteRepoFromLocalStorage(repo: IRepository): Observable<IRepository> {
    let actualFavourites: IFavouriteState = this.getActualFavourites();
    actualFavourites = favouriteAdapter.removeOne(repo.id, actualFavourites);
    localStorage.setItem(`${localStorage.getItem('token')}Favourites`, JSON.stringify(actualFavourites));
    return of(repo);
  }
}
