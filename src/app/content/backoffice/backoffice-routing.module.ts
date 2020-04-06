import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';



const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      { path: '', loadChildren: './content/dashboard/dashboard.module#DashboardModule'},
      { path: 'events', loadChildren: './content/events/events.module#EventsModule'},
      { path: 'user', loadChildren: './content/user-settings/user-settings.module#UserSettingsModule'},
      { path: 'favourites', loadChildren: './content/favourites/favourites.module#FavouritesModule'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
