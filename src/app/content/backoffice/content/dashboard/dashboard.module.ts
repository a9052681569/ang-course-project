import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from './search/search.component';
import { RepoCardComponent } from './search/repo-card/repo-card.component';
import { SortByStarsPipe } from 'src/app/pipes/sort-by-stars/sort-by-stars.pipe';



@NgModule({
  declarations: [DashboardComponent, SearchComponent, RepoCardComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
