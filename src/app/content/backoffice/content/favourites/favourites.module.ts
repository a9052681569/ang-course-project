import { NgModule } from '@angular/core';
import { FavouritesComponent } from './favourites.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavouritesRoutingModule } from './favourites-routing.module';




@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    SharedModule,
    FavouritesRoutingModule
  ]
})
export class FavouritesModule { }
