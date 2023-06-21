import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecentralizedComponent } from './decentralized.component';

describe('DecentralizedComponent', () => {
  let component: DecentralizedComponent;
  let fixture: ComponentFixture<DecentralizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecentralizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecentralizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
