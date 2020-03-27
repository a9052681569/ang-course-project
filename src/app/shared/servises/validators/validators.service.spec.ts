import { TestBed, inject } from '@angular/core/testing';

import { ValidatorsService } from './validators.service';
import { AuthService } from '../auth/auth.service';
import { ValidationErrors } from '@angular/forms';

describe('ValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthService, ValidatorsService]
  }));

  it('test uniqUsernameValidator', inject([ValidatorsService], (validatorsService: ValidatorsService) => {
    validatorsService.uniqUsernameValidator('andrew').subscribe((err: ValidationErrors | null) => {
      expect(err).toEqual(null);
    });
  }));
});
