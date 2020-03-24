import { Directive } from '@angular/core';
import { ValidatorsService } from '../servises/validators/validators.service';
import { Validator, ValidationErrors, FormControl, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appUsernameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsernameValidatorDirective,
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements Validator {

  constructor( private usernameValidatorService: ValidatorsService) { }

  public validate({value}: FormControl): ValidationErrors | null {
    return this.usernameValidatorService.usernameValidator(value);
  }

}
