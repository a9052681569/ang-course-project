import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { SignupPending } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public constructor(private store: Store<IRootState>) {}

  public signup(value: {
    username: string,
    email: string,
    password: {password: string, confirmpassword: string}
  }) {
    const {password: passwordGroup, ...user} = value;
    this.store.dispatch(new SignupPending({...user, password: passwordGroup.password}));
  }

}
