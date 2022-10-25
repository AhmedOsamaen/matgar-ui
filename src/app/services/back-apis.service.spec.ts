import { TestBed } from '@angular/core/testing';

import { BackAPIsService } from './back-apis.service';

describe('BackAPIsService', () => {
  let service: BackAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
