import 'rxjs/add/operator/toPromise';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {HotelOffer} from '../domain/hotel-offer.interface';


@Injectable()
export class HotelService
{
   public hotelOfferList: BehaviorSubject<HotelOffer[]>;

   constructor(private http: HttpClient)
   {
      this.hotelOfferList = new BehaviorSubject([]);
   }

   ngOnInit()
   {
   }

   getOffers(url: string)
   {
      return this.http.get<any>(url)
         .toPromise<HotelOffer[]>()
         .then((res: any) => <HotelOffer[]>res && res.offers && res.offers.Hotel)
         .then(data =>
         {
            console.log(data);

            this.hotelOfferList.next(data);

            return data;
         });
   }
}