import { TestBed } from '@angular/core/testing';

import { EasyToEatLibService } from './easy-to-eat-lib.service';

describe('EasyToEatLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasyToEatLibService = TestBed.get(EasyToEatLibService);
    expect(service).toBeTruthy();
  });
});
