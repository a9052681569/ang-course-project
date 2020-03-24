import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  public drawer: MatSidenav;


  public setDrawerControl(drawer: MatSidenav): void {
    Promise.resolve().then(_ => this.drawer = drawer);
  }

}
