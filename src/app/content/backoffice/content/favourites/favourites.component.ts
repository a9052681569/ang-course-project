import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { Observable } from 'rxjs';
import { opacityChangeAnimation } from 'src/app/animations/opacity-change/opacity-change.animation';
import { IUser } from 'src/app/store/reducers/user.reducer';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  animations: [opacityChangeAnimation]
})
export class FavouritesComponent  {

  constructor(private store: Store<IRootState>) {}

  public get user$(): Observable<IUser> {
    return this.store.select('user');
  }

}
