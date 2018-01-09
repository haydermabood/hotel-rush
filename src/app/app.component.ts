import {Component, OnInit} from '@angular/core';
import {HotelService} from "./services/hotel-offers.service";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   providers: [HotelService]
})
export class AppComponent implements OnInit
{
   constructor(){}

   ngOnInit()
   {
   }
}