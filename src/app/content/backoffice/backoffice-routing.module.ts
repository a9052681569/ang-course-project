import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';



const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      { path: '', loadChildren: () => import('./content/dashboard/dashboard.module').then(m => m.DashboardModule)},
      { path: 'events', loadChildren: () => import('./content/events/events.module').then(m => m.EventsModule)},
      { path: 'user', loadChildren: () => import('./content/user-settings/user-settings.module').then(m => m.UserSettingsModule)},
      { path: 'favourites', loadChildren: () => import('./content/favourites/favourites.module').then(m => m.FavouritesModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
