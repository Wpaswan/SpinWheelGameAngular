import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize7Component } from './prize7.component';

describe('Prize7Component', () => {
  let component: Prize7Component;
  let fixture: ComponentFixture<Prize7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
