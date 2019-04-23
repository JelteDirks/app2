import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelOnsPage } from './bel-ons.page';

describe('BelOnsPage', () => {
  let component: BelOnsPage;
  let fixture: ComponentFixture<BelOnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelOnsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelOnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
