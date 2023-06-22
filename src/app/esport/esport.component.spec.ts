import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportComponent } from './esport.component';

describe('EsportComponent', () => {
  let component: EsportComponent;
  let fixture: ComponentFixture<EsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
