import { TestBed } from '@angular/core/testing';

import { MovieManagementService } from './movie-management.service';

describe('MovieManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieManagementService = TestBed.get(MovieManagementService);
    expect(service).toBeTruthy();
  });
});
