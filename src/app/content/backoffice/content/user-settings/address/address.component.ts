import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { IUser } from 'src/app/store/reducers/user.reducer';
import { PatchUserPending } from 'src/app/store/actions/user.actions';

export interface IAddressGroup {
  street: string;
  city: string;
  state: string;
  zip: string;
}
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  public addressGroup: IAddressGroup = {
    street: '',
    city: '',
    state: '',
    zip: ''
  };
  public addressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IRootState>
    ) {
    this.createForm();
    this.getAddressFromStore();
  }

  private createForm() {
    this.addressForm = this.formBuilder.group({
      address: this.formBuilder.array([])
    });
  }
  public addAddress(group: IAddressGroup) {
    this.addressGroups.push(
      this.formBuilder.group(group)
    );
  }
  public removeAddress(index: number): void {
    this.addressGroups.removeAt(index);
  }

  public get addressGroups(): FormArray {
    return this.addressForm.get('address') as FormArray;
  }

  public submit() {
    this.store.dispatch(new PatchUserPending({address: this.addressGroups.value}));
  }

  private getAddressFromStore() {
    this.store.select('user').subscribe(({address}: IUser) => {
      // если на экране не отображено ни одной группы адреса и в хранилище они есть то добавляем их
      if (this.addressGroups.length === 0 && address.length > 0) {
        address.forEach((item) => {
          this.addAddress(item);
        });
      // если мы дошли до этого условия и в хранилище нет адресов - добавляем пустую форму
      } else if (address.length === 0) {
        this.addAddress(this.addressGroup);
      }
    });
  }
}
