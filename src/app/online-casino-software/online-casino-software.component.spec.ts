import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCasinoSoftwareComponent } from './online-casino-software.component';

describe('OnlineCasinoSoftwareComponent', () => {
  let component: OnlineCasinoSoftwareComponent;
  let fixture: ComponentFixture<OnlineCasinoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineCasinoSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCasinoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
