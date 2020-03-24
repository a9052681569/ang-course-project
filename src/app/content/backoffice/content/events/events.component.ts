import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/interfaces/i-event';
import { events$ } from 'src/app/mock/data';
import { softAppearAnimation } from 'src/app/animations/soft-appear/soft-appear.animation';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [softAppearAnimation]
})
export class EventsComponent implements OnInit {
  public searchText: string;
  public events$: Observable<IEvent[]> = events$;

  public search(e: KeyboardEvent) {
    const inputElement: HTMLInputElement = e.target as HTMLInputElement;
    this.searchText = inputElement.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
