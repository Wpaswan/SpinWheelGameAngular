import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize10Component } from './prize10.component';

describe('Prize10Component', () => {
  let component: Prize10Component;
  let fixture: ComponentFixture<Prize10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
