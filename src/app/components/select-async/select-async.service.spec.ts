import { TestBed, inject } from '@angular/core/testing';

import { SelectAsyncService } from './select-async.service';

describe('SelectAsyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectAsyncService]
    });
  });

  it('should be created', inject([SelectAsyncService], (service: SelectAsyncService) => {
    expect(service).toBeTruthy();
  }));
});
