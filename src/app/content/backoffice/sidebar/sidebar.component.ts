import { Component, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/typings';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  @Output()
  public setSideBarControl: EventEmitter<MatSidenav> = new EventEmitter();

  @ViewChild('drawer', {static: false})
  public drawer: MatSidenav;

  constructor() { }

  ngAfterViewInit() {
    this.setSideBarControl.emit(this.drawer);
  }

}
