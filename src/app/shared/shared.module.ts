import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatBadgeModule,
  MatMenuModule,
  MatCardModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { ValidatorsService } from './servises/validators/validators.service';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { UniqUsernameValidatorDirective } from './directives/uniq-username-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

export const modules: any[] = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule,
  MatMenuModule,
  MatCardModule,
  FormsModule,
  HttpClientModule,
  FlexLayoutModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: [...modules, UsernameValidatorDirective, EqualValidatorDirective, UniqUsernameValidatorDirective],
  declarations: [UsernameValidatorDirective, EqualValidatorDirective, UniqUsernameValidatorDirective],
  providers: [ValidatorsService]
})
export class SharedModule { }
