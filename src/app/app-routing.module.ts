import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { CustomPreloadService } from './custom-preload.service';


const routes: Routes = [
  { path: 'login', loadChildren: './content/login/login.module#LoginModule', canActivate: [AuthGuard] },
  { path: 'signup', loadChildren: './content/signup/signup.module#SignupModule', canActivate: [AuthGuard] },
  { path: 'backoffice', loadChildren: './content/backoffice/backoffice.module#BackofficeModule', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'backoffice' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
