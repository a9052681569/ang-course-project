import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/typings';
import { StyleObject } from 'src/app/interfaces/style-object';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public drawer: MatSidenav;

  public headerStyles: StyleObject = {
    color: 'orange',
    'font-size': '18px'
  };

  public ngOnInit() {
  }

}
