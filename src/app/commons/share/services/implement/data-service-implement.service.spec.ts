import { TestBed } from '@angular/core/testing';

import { DataServiceImplementService } from './data-service-implement.service';

describe('DataServiceImplementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServiceImplementService = TestBed.get(DataServiceImplementService);
    expect(service).toBeTruthy();
  });
});
