import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapprovePage } from './viewapprove.page';

describe('ViewapprovePage', () => {
  let component: ViewapprovePage;
  let fixture: ComponentFixture<ViewapprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewapprovePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
