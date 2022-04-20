import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize1Component } from './prize1.component';

describe('Prize1Component', () => {
  let component: Prize1Component;
  let fixture: ComponentFixture<Prize1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
