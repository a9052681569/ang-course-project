import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login(loginInfo: {username: string, password: string}) {
    console.log(loginInfo);
  }

}
