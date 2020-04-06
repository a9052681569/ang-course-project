import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventsFilterPipe } from 'src/app/pipes/events-filter/events-filter.pipe';
import { EventCardComponent } from './event-card/event-card.component';



@NgModule({
  declarations: [EventsComponent, EventsFilterPipe, EventCardComponent],
  imports: [
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
