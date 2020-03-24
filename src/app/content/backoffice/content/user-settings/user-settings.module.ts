import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';
import { PasswordComponent } from './password/password.component';
import { InitialsComponent } from './initials/initials.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [UserSettingsComponent, PasswordComponent, InitialsComponent, AddressComponent],
  imports: [
    SharedModule,
    UserSettingsRoutingModule
  ]
})
export class UserSettingsModule { }
