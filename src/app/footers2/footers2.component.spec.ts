import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footers2Component } from './footers2.component';

describe('Footers2Component', () => {
  let component: Footers2Component;
  let fixture: ComponentFixture<Footers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footers2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
