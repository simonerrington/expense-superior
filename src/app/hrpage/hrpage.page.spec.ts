import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpagePage } from './hrpage.page';

describe('HrpagePage', () => {
  let component: HrpagePage;
  let fixture: ComponentFixture<HrpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
