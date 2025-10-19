import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp } from './exp';

describe('Exp', () => {
  let component: Exp;
  let fixture: ComponentFixture<Exp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
