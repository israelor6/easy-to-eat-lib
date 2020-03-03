import { TestBed } from '@angular/core/testing';

import { RestaurantCategoryService } from './restaurant-category.service';

describe('RestauranyCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantCategoryService = TestBed.get(RestaurantCategoryService);
    expect(service).toBeTruthy();
  });
});
