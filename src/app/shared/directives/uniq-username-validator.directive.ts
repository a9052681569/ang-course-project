import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, NG_ASYNC_VALIDATORS, FormControl } from '@angular/forms';
import { ValidatorsService } from '../servises/validators/validators.service';

@Directive({
  selector: '[appUniqUsernameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqUsernameValidatorDirective,
      multi: true
    }
  ]
})
export class UniqUsernameValidatorDirective {

  constructor( private usernameValidatorService: ValidatorsService) { }

  public validate({value}: FormControl): ValidationErrors | null {
    return this.usernameValidatorService.uniqUsernameValidator(value);
  }

}
