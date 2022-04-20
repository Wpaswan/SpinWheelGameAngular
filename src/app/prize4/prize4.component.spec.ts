import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize4Component } from './prize4.component';

describe('Prize4Component', () => {
  let component: Prize4Component;
  let fixture: ComponentFixture<Prize4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
