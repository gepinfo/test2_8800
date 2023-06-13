import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen129985Component } from './screen129985.component';

describe('Screen129985Component', () => {
  let component: Screen129985Component;
  let fixture: ComponentFixture<Screen129985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen129985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen129985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});