import {Component, OnDestroy, OnInit} from '@angular/core';
import {HotelOffer} from '../../domain/hotel-offer.interface';
import {HotelService} from '../../services/hotel-offers.service';
import {Subscription} from "rxjs/Subscription";

@Component({
   selector: 'app-hotel-offers-results',
   templateUrl: './hotel-offers-results.component.html',
   styleUrls: ['./hotel-offers-results.component.css']
})
export class HotelOffersComponentResults implements OnInit, OnDestroy
{
   hotelOfferList: HotelOffer[];
   hotelOfferListSubscription: Subscription;

   constructor(private hotelOfferService: HotelService)
   {
   }

   redirectToMoreInfo(hotelOffer: HotelOffer)
   {
      window.location.href = decodeURIComponent(hotelOffer.hotelUrls.hotelSearchResultUrl);
   }

   ngOnInit()
   {
      this.hotelOfferListSubscription = this.hotelOfferService.hotelOfferList.subscribe((offers) =>
      {
         console.log('>>>>', offers);

         this.hotelOfferList = offers;
      });
   }

   ngOnDestroy()
   {
      this.hotelOfferListSubscription.unsubscribe();
      this.hotelOfferListSubscription = null;
   }
}