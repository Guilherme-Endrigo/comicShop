import { TestBed } from '@angular/core/testing';

import { CharApiService } from './char-api.service';

describe('CharApiService', () => {
  let service: CharApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
