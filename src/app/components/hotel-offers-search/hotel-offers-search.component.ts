import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import * as _ from 'lodash';
import * as queryString from 'query-string';

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
            minTripStartDate: [''],
            maxTripStartDate: [''],
            lengthOfStay: [1],
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
      const query: any = _.pickBy(this.hotelOfferForm.value, _.identity);

      query.minTripStartDate && (query.minTripStartDate = moment(query.minTripStartDate).format('YYYY-MM-DD'));
      query.maxTripStartDate && (query.maxTripStartDate = moment(query.maxTripStartDate).format('YYYY-MM-DD'));

      return HOTEL_OFFERS_URL + queryString.stringify(query);
   }
}
