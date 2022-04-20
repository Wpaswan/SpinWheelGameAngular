import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize5Component } from './prize5.component';

describe('Prize5Component', () => {
  let component: Prize5Component;
  let fixture: ComponentFixture<Prize5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
