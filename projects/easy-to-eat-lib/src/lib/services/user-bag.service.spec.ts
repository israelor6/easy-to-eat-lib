import { TestBed } from '@angular/core/testing';

import { UserBagService } from './user-bag.service';

describe('UserBagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBagService = TestBed.get(UserBagService);
    expect(service).toBeTruthy();
  });
});
