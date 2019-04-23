import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodnummersPage } from './noodnummers.page';

describe('NoodnummersPage', () => {
  let component: NoodnummersPage;
  let fixture: ComponentFixture<NoodnummersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoodnummersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodnummersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
