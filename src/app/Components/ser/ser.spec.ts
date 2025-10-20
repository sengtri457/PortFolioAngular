import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ser } from './ser';

describe('Ser', () => {
  let component: Ser;
  let fixture: ComponentFixture<Ser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
