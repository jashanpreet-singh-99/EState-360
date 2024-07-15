import { TestBed } from '@angular/core/testing';

import { SharedSearchDataService } from './shared-search-data.service';

describe('SharedSearchDataService', () => {
  let service: SharedSearchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSearchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
