import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3sportbookComponent } from './web3sportbook.component';

describe('Web3sportbookComponent', () => {
  let component: Web3sportbookComponent;
  let fixture: ComponentFixture<Web3sportbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Web3sportbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Web3sportbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
