import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  private addressGroup: object = {
    street: '',
    city: '',
    state: '',
    zip: ''
  };
  public addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.addressForm = this.formBuilder.group({
      address: this.formBuilder.array([
        this.formBuilder.group(this.addressGroup)
      ])
    });
  }
  public addAddress() {
    this.addressGroups.push(
      this.formBuilder.group(this.addressGroup)
    );
  }
  public removeAddress(index: number): void {
    this.addressGroups.removeAt(index);
  }

  public get addressGroups(): FormArray {
    return this.addressForm.get('address') as FormArray;
  }

  ngOnInit() {
  }
}
