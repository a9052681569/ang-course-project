import { NgModule } from '@angular/core';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BackofficeComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BackofficeRoutingModule,
    SharedModule
  ]
})
export class BackofficeModule { }
