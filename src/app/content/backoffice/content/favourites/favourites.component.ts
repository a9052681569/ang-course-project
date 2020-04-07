import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/store/reducers/user.reducer';
import { favouriteOnLeaveAnimation } from 'src/app/animations/favourite-on-leave/favourite-on-leave';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  animations: [favouriteOnLeaveAnimation]
})
export class FavouritesComponent  {

  public searchText: string;

  constructor(private store: Store<IRootState>) {}

  public get user$(): Observable<IUser> {
    return this.store.select('user');
  }

}
