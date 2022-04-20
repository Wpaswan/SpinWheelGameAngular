import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize2Component } from './prize2.component';

describe('Prize2Component', () => {
  let component: Prize2Component;
  let fixture: ComponentFixture<Prize2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
