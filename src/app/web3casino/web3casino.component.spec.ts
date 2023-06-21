import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3casinoComponent } from './web3casino.component';

describe('Web3casinoComponent', () => {
  let component: Web3casinoComponent;
  let fixture: ComponentFixture<Web3casinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Web3casinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Web3casinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
