import { TestBed } from '@angular/core/testing';

import { Tokenbot } from './tokenbot';

describe('Tokenbot', () => {
  let service: Tokenbot;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tokenbot);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
