import { TestBed } from '@angular/core/testing';

import { ComisApiService } from './comis-api.service';

describe('ComisApiService', () => {
  let service: ComisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
