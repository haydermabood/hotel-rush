import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import * as moment from "moment";

import {HOTEL_OFFERS_URL} from "../../common/constants";
import {HotelService} from "../../services/hotel-offers.service";

@Component({
   selector: 'app-hotel-offers-search',
   templateUrl: './hotel-offers-search.component.html',
   styleUrls: ['./hotel-offers-search.component.css']
})
export class HotelOffersSearchComponent implements OnInit
{
   hotelOfferForm: FormGroup;

   //search params
   destinationName: string;
   minTripStartDate = new Date();
   maxTripStartDate = new Date();
   lengthOfStay: number;
   minStarRating: number;
   maxStarRating: number;
   minTotalRate: number;
   maxTotalRate: number;
   minGuestRating: number;
   maxGuestRating: number;

   constructor(private fb: FormBuilder, private hotelOfferService: HotelService)
   {
   }

   ngOnInit()
   {
      this.hotelOfferForm = this.fb.group(
         {
            destinationName: ['', [Validators.required, Validators.minLength(3)]],
            minTripStartDate: ['', Validators.required],
            maxTripStartDate: ['', Validators.required],
            lengthOfStay: [1, Validators.required],
            minStarRating: [],
            maxStarRating: [],
            minTotalRate: [],
            maxTotalRate: [],
            minGuestRating: [],
            maxGuestRating: []
         });

      this.hotelOfferService.getOffers(this.getURL());
   }

   hasFormErrors()
   {
      return !this.hotelOfferForm.valid;
   }

   onSubmit()
   {
      this.hotelOfferService.getOffers(this.getURL());
   }

   getURL()
   {
      let url = HOTEL_OFFERS_URL;

      this.hotelOfferForm.value.destinationName  && (url += `&destinationName=${this.hotelOfferForm.value.destinationName}`);
      this.hotelOfferForm.value.minTripStartDate && (url += `&minTripStartDate=${moment(this.hotelOfferForm.value.minTripStartDate).format('YYYY-MM-DD')}`);
      this.hotelOfferForm.value.maxTripStartDate && (url += `&maxTripStartDate=${moment(this.hotelOfferForm.value.maxTripStartDate).format('YYYY-MM-DD')}`);
      this.hotelOfferForm.value.lengthOfStay     && (url += `&lengthOfStay=${this.hotelOfferForm.value.lengthOfStay}`);
      this.hotelOfferForm.value.minStarRating    && (url += `&minStarRating=${this.hotelOfferForm.value.minStarRating}`);
      this.hotelOfferForm.value.maxStarRating    && (url += `&maxStarRating=${this.hotelOfferForm.value.maxStarRating}`);
      this.hotelOfferForm.value.minTotalRate     && (url += `&minTotalRate=${this.hotelOfferForm.value.minTotalRate}`);
      this.hotelOfferForm.value.maxTotalRate     && (url += `&maxTotalRate=${this.hotelOfferForm.value.maxTotalRate}`);
      this.hotelOfferForm.value.minGuestRating   && (url += `&minGuestRating=${this.hotelOfferForm.value.minGuestRating}`);
      this.hotelOfferForm.value.maxGuestRating   && (url += `&destinationName=${this.hotelOfferForm.value.maxGuestRating}`);

      console.log('URL: ', url);

      return url;
   }
}
