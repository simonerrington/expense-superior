import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectloginPage } from './selectlogin.page';

describe('SelectloginPage', () => {
  let component: SelectloginPage;
  let fixture: ComponentFixture<SelectloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
