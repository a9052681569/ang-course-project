import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { ISearchState } from 'src/app/store/reducers/search.reducer';
import { Observable } from 'rxjs';
import { SearchPending } from 'src/app/store/actions/search.actions';
import { opacityChangeAnimation } from 'src/app/animations/opacity-change/opacity-change.animation';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [opacityChangeAnimation]
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(private store: Store<IRootState>, private formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      request: ''
    });
  }
  public get state$(): Observable<ISearchState> {
    return this.store.select('search');
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.store.dispatch(new SearchPending(this.searchForm.get('request').value));
    });
  }
}
