import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchadeMeldenPage } from './schade-melden.page';

describe('SchadeMeldenPage', () => {
  let component: SchadeMeldenPage;
  let fixture: ComponentFixture<SchadeMeldenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchadeMeldenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchadeMeldenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
