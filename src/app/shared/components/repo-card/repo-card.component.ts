import { Component, Input } from '@angular/core';
import { IRepository } from 'src/app/store/reducers/search.reducer';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { RemoveFromFavouritesPending, AddToFavouritesPending } from 'src/app/store/actions/favourites.actions';



@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent {

  @Input()
  public repo: IRepository;

  constructor( private store: Store<IRootState>) {}

  public favoritesToggle(): void {
    if (this.repo.isFavourite) {
      this.store.dispatch(new RemoveFromFavouritesPending(this.repo));
    } else {
      this.store.dispatch(new AddToFavouritesPending(this.repo));
    }
  }
}
