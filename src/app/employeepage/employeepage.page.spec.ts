import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepagePage } from './employeepage.page';

describe('EmployeepagePage', () => {
  let component: EmployeepagePage;
  let fixture: ComponentFixture<EmployeepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
