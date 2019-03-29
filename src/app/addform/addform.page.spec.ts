import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformPage } from './addform.page';

describe('AddformPage', () => {
  let component: AddformPage;
  let fixture: ComponentFixture<AddformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
