import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { softAppearAnimation } from 'src/app/animations/soft-appear/soft-appear.animation';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { IUser } from 'src/app/store/reducers/user.reducer';
import { DeleteMessagePending, ClearMessagesPending } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [softAppearAnimation]
})
export class EventsComponent implements OnInit {
  public searchText: string;

  public search(e: KeyboardEvent): void {
    const inputElement: HTMLInputElement = e.target as HTMLInputElement;
    this.searchText = inputElement.value;
  }
  constructor( private store: Store<IRootState>) { }

  public get user$(): Observable<IUser> {
    return this.store.select('user');
  }

  public deleteEvent(index: number): void {
    this.store.dispatch(new DeleteMessagePending(index));
  }
  public clear(): void {
    this.store.dispatch(new ClearMessagesPending('sdf'));
  }
  ngOnInit() {
  }

}