import { TestBed, inject } from '@angular/core/testing';

import { SelectValidationService } from './select-validation.service';

describe('SelectValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectValidationService]
    });
  });

  it('should be created', inject([SelectValidationService], (service: SelectValidationService) => {
    expect(service).toBeTruthy();
  }));
});
