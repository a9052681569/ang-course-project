import { UniqUsernameValidatorDirective } from './uniq-username-validator.directive';
import { ValidatorsService } from '../servises/validators/validators.service';

describe('UniqUsernameValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new UniqUsernameValidatorDirective(new ValidatorsService());
    expect(directive).toBeTruthy();
  });
});
