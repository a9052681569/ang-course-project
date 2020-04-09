import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/typings';
import { IRootState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { LogoutPending } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/store/reducers/user.reducer';
import { Back, Forward } from 'src/app/store/actions/router.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public drawer: MatSidenav;

  public constructor(private store: Store<IRootState>) {}

  public logout(): void {
    this.store.dispatch(new LogoutPending());
  }

  get user$(): Observable<IUser> {
    return this.store.select('user');
  }

  public previousPage(): void {
    this.store.dispatch(new Back());
  }

  public nextPage(): void {
    this.store.dispatch(new Forward());
  }

}
