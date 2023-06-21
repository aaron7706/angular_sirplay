import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSportsbookComponent } from './online-sportsbook.component';

describe('OnlineSportsbookComponent', () => {
  let component: OnlineSportsbookComponent;
  let fixture: ComponentFixture<OnlineSportsbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineSportsbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineSportsbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
