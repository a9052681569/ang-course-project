import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/typings';
import { IEvent } from './interfaces/i-event';
import { events$ } from './mock/data';
import { Observable } from 'rxjs';
import { softAppearAnimation } from './animations/soft-appear/soft-appear.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
