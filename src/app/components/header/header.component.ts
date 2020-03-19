import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material/typings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public drawer: MatSidenav;

  public headerStyles: SafeStyle = this.sanitizer.bypassSecurityTrustStyle('color: orange');

  public constructor(private sanitizer: DomSanitizer) { }

  public ngOnInit() {
  }

}
