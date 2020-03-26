import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { LoginPending } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public constructor(private store: Store<IRootState>) {}

  public login(loginInfo: {username: string, password: string}) {
    this.store.dispatch(new LoginPending(loginInfo));
  }

}
