import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/servises/validators/validators.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IRootState } from 'src/app/store';
import { PatchUserPending } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  public changePasswordGroup: FormGroup;

  constructor(
    private validatorService: ValidatorsService,
    private store: Store<IRootState>
    ) {}
  private createForm() {
    this.changePasswordGroup = new FormGroup({
      oldPass: new FormControl('', [Validators.required], [this.checkPassword.bind(this)]),
      newPassword: new FormGroup({
        password: new FormControl('', [Validators.required]),
        confirmpassword: new FormControl('', [Validators.required])
      }, this.equalValidator.bind(this))
    });
  }

  ngOnInit() {
    this.createForm();
  }
  private equalValidator({value}: FormGroup): ValidationErrors | null {
    return this.validatorService.equalValidator(value);
  }
  private checkPassword({value}: FormControl): Observable<ValidationErrors | null> {
    return this.validatorService.checkPassword(value);
  }

  private resetForm() {
    this.changePasswordGroup.reset();
    this.changePasswordGroup.get('oldPass').setErrors(null);
    this.changePasswordGroup.get('newPassword').get('password').setErrors(null);
    this.changePasswordGroup.get('newPassword').get('confirmpassword').setErrors(null);
  }

  public submit() {
    const {value} = this.changePasswordGroup.get('newPassword').get('password');
    this.store.dispatch(new PatchUserPending({password: value}));
    this.resetForm();
  }

}
