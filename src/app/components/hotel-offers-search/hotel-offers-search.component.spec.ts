import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOffersSearchComponent } from './hotel-offers-search.component';

describe('HotelOffersSearchComponent', () => {
  let component: HotelOffersSearchComponent;
  let fixture: ComponentFixture<HotelOffersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelOffersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOffersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
