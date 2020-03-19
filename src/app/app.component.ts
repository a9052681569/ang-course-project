import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public drawer: MatSidenav;

  public setDrawerControl(drawer: MatSidenav): void {
    Promise.resolve().then(_ => this.drawer = drawer);
  }
}
