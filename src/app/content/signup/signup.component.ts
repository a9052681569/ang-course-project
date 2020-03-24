import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signup(value: {username: string, email: string, password: string, confirmpassword: string}) {
    console.log(value);
  }

}
