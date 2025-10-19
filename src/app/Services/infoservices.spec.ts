import { TestBed } from '@angular/core/testing';

import { Infoservices } from './infoservices';

describe('Infoservices', () => {
  let service: Infoservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Infoservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
