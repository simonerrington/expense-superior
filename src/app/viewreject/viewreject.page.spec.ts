import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrejectPage } from './viewreject.page';

describe('ViewrejectPage', () => {
  let component: ViewrejectPage;
  let fixture: ComponentFixture<ViewrejectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrejectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrejectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
