import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  public constructor(@Inject(Router) private router: Router) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> {
      const {url} = state;
      return of(true)
        .pipe(
          switchMap((isLogged: boolean) => {
            if (!isLogged && (url === '/login' || url === '/signup')) {
              return of(true);
            }
            if (isLogged && (url === '/login' || url === '/signup')) {
              this.router.navigate(['/backoffice']);
              return of(false);
            }
            if (!isLogged) {
              this.router.navigate(['/login']);
            }
            return of(isLogged);
          })
        );
  }
}
