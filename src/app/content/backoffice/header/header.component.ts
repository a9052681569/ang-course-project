import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/typings';
import { StyleObject } from 'src/app/interfaces/style-object';
import { IRootState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { LogoutPending } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/store/reducers/user.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public drawer: MatSidenav;

  public constructor(private store: Store<IRootState>) {}

  public headerStyles: StyleObject = {
    color: 'orange',
    'font-size': '18px'
  };

  public logout() {
    this.store.dispatch(new LogoutPending());
  }

  get user$(): Observable<IUser> {
    return this.store.select('user');
  }

}
