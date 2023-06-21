import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoTournamentComponent } from './casino-tournament.component';

describe('CasinoTournamentComponent', () => {
  let component: CasinoTournamentComponent;
  let fixture: ComponentFixture<CasinoTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
