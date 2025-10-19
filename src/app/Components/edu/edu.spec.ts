import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edu } from './edu';

describe('Edu', () => {
  let component: Edu;
  let fixture: ComponentFixture<Edu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Edu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
