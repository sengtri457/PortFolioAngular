import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCounter } from './skill-counter';

describe('SkillCounter', () => {
  let component: SkillCounter;
  let fixture: ComponentFixture<SkillCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
