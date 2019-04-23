import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HulpNodigPage } from './hulp-nodig.page';

describe('HulpNodigPage', () => {
  let component: HulpNodigPage;
  let fixture: ComponentFixture<HulpNodigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HulpNodigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HulpNodigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
