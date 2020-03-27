import { EqualValidatorDirective } from './equal-validator.directive';
import { ValidatorsService } from '../servises/validators/validators.service';

describe('EqualValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new EqualValidatorDirective(new ValidatorsService());
    expect(directive).toBeTruthy();
  });
});
