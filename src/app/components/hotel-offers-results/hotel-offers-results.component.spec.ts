import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOffersComponentResults } from './hotel-offers-results.component';

describe('HotelOffersComponentResults', () => {
  let component: HotelOffersComponentResults;
  let fixture: ComponentFixture<HotelOffersComponentResults>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelOffersComponentResults ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOffersComponentResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
