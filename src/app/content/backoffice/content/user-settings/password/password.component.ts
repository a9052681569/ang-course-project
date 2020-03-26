import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidationErrors, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/servises/validators/validators.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  public changePasswordGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private validatorService: ValidatorsService) {
    this.createForm();
  }
  private createForm() {
    this.changePasswordGroup = this.formBuilder.group({
      oldPass: ['', [Validators.required]],
      newPassword: this.formBuilder.group({
        password: ['', Validators.required],
        confirmpassword: ['', Validators.required]
      }, this.equalValidator)
    });
  }

  ngOnInit() {
  }
  private equalValidator({value}: FormGroup): ValidationErrors | null {
    return this.validatorService.equalValidator(value);
  }

}
