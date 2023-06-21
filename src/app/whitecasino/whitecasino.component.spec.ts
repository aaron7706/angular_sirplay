import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitecasinoComponent } from './whitecasino.component';

describe('WhitecasinoComponent', () => {
  let component: WhitecasinoComponent;
  let fixture: ComponentFixture<WhitecasinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitecasinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitecasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
