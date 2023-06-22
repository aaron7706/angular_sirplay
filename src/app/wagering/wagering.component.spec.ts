import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageringComponent } from './wagering.component';

describe('WageringComponent', () => {
  let component: WageringComponent;
  let fixture: ComponentFixture<WageringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
