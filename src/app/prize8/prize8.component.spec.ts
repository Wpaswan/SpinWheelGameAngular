import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize8Component } from './prize8.component';

describe('Prize8Component', () => {
  let component: Prize8Component;
  let fixture: ComponentFixture<Prize8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prize8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
