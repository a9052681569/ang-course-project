import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { IUser, IAddress } from 'src/app/store/reducers/user.reducer';
import { PatchUserPending } from 'src/app/store/actions/user.actions';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public addressGroup: IAddress = {
    street: '',
    city: '',
    state: '',
    zip: ''
  };
  public addressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IRootState>
    ) {}

  ngOnInit() {
    this.createForm();
    this.getAddressFromStore();
  }

  private createForm() {
    this.addressForm = this.formBuilder.group({
      address: this.formBuilder.array([])
    });
  }
  public addAddress(group: IAddress) {
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
      if (this.addressGroups.length === 0) {
        if (address.length > 0) {
          address.forEach((item) => {
            this.addAddress(item);
          });
        } else {
          this.addAddress(this.addressGroup);
        }
      }
    });
  }
}
