import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/store/reducers/user.reducer';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {

  @Input()
  public event: IEvent;

}
