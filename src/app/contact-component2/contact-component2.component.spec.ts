import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent2Component } from './contact-component2.component';

describe('ContactComponent2Component', () => {
  let component: ContactComponent2Component;
  let fixture: ComponentFixture<ContactComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
