import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, FormGroup } from '@angular/forms';
import { ValidatorsService } from '../servises/validators/validators.service';

@Directive({
  selector: '[appEqualValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualValidatorDirective,
      multi: true
    }
  ]
})
export class EqualValidatorDirective {

  constructor( private usernameValidatorService: ValidatorsService) { }

  public validate({value}: FormGroup): ValidationErrors | null {
    return this.usernameValidatorService.equalValidator(value);
  }

}
