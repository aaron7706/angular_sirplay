import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportbetComponent } from './sportbet.component';

describe('SportbetComponent', () => {
  let component: SportbetComponent;
  let fixture: ComponentFixture<SportbetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportbetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportbetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
