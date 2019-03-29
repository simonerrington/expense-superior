import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerpagePage } from './managerpage.page';

describe('ManagerpagePage', () => {
  let component: ManagerpagePage;
  let fixture: ComponentFixture<ManagerpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
