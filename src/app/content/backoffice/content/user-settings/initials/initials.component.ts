import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { PatchUserPending, AddMessagePending } from 'src/app/store/actions/user.actions';
import { IUser } from 'src/app/store/reducers/user.reducer';

@Component({
  selector: 'app-initials',
  templateUrl: './initials.component.html',
  styleUrls: ['./initials.component.css']
})
export class InitialsComponent implements OnInit {
  public initialsGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IRootState>
    ) {
    this.createForm();
  }
  private createForm() {
    this.initialsGroup = this.formBuilder.group({
      name: '',
      surname: '',
      email: '',
      gender: [true]
    });
  }

  public submit() {
    this.store.dispatch(new PatchUserPending(this.initialsGroup.value));
    this.store.dispatch(new AddMessagePending({text: 'Вы изменили данные о себе', date: new Date()}));
  }

  public ngOnInit() {
    this.store.select('user').subscribe(({name, surname, email, gender}: IUser) => {
      this.initialsGroup.patchValue({
        name,
        surname,
        email,
        gender
      });
    });
  }
}
