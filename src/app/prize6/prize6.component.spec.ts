import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize6Component } from './prize6.component';

describe('Prize6Component', () => {
  let component: Prize6Component;
  let fixture: ComponentFixture<Prize6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
