import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize11Component } from './prize11.component';

describe('Prize11Component', () => {
  let component: Prize11Component;
  let fixture: ComponentFixture<Prize11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
