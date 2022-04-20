import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize3Component } from './prize3.component';

describe('Prize3Component', () => {
  let component: Prize3Component;
  let fixture: ComponentFixture<Prize3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
