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
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatSnackBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { ValidatorsService } from './servises/validators/validators.service';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { UniqUsernameValidatorDirective } from './directives/uniq-username-validator.directive';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './servises/auth/auth.service';
import { SearchService } from './servises/search/search.service';
import { UsersService } from './servises/users/users.service';
import { SortByStarsPipe } from '../pipes/sort-by-stars/sort-by-stars.pipe';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { IsFavouritePipe } from '../pipes/is-favourite/is-favourite.pipe';

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
  ReactiveFormsModule,
  MatExpansionModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [...modules, UsernameValidatorDirective,
    EqualValidatorDirective, UniqUsernameValidatorDirective,
     SortByStarsPipe, RepoCardComponent, IsFavouritePipe],
  declarations: [UsernameValidatorDirective, EqualValidatorDirective,
     UniqUsernameValidatorDirective, SortByStarsPipe, RepoCardComponent, IsFavouritePipe],
  providers: [ValidatorsService, AuthService, UsersService, SearchService, HttpClient]
})
export class SharedModule { }
