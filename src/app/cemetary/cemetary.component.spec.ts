import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemetaryComponent } from './cemetary.component';

describe('CemetaryComponent', () => {
  let component: CemetaryComponent;
  let fixture: ComponentFixture<CemetaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemetaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemetaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
