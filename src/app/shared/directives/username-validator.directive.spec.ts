import { UsernameValidatorDirective } from './username-validator.directive';
import { ValidatorsService } from '../servises/validators/validators.service';

describe('UsernameValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new UsernameValidatorDirective(new ValidatorsService());
    expect(directive).toBeTruthy();
  });
});
