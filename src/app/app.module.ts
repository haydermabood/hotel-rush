import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
   InputTextModule, ButtonModule, DataListModule, DialogModule, PanelModule,
   CalendarModule, SpinnerModule
} from 'primeng/primeng';

import {AppComponent} from './app.component';
import { HotelOffersSearchComponent } from './components/hotel-offers-search/hotel-offers-search.component';
import { HotelOffersComponentResults } from './components/hotel-offers-results/hotel-offers-results.component';
import { FieldErrorsComponent } from './components/common/field-errors/field-errors.component';

@NgModule({
   declarations: [
      AppComponent,
      HotelOffersSearchComponent,
      HotelOffersComponentResults,
      FieldErrorsComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      DataListModule,
      HttpClientModule,
      InputTextModule,
      DialogModule,
      ButtonModule,
      PanelModule,
      CalendarModule,
      SpinnerModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule
{
}
