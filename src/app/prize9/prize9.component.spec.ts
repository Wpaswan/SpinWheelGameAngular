import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize9Component } from './prize9.component';

describe('Prize9Component', () => {
  let component: Prize9Component;
  let fixture: ComponentFixture<Prize9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
