import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-initials',
  templateUrl: './initials.component.html',
  styleUrls: ['./initials.component.css']
})
export class InitialsComponent implements OnInit {
  public initialsGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }
  private createForm() {
    this.initialsGroup = this.formBuilder.group({
      name: '',
      surname: '',
      male: [true]
    });
  }

  ngOnInit() {
  }
}
