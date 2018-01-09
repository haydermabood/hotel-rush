export interface OfferDateRange
{
   travelStartDate: number[];
   travelEndDate: number[];
   lengthOfStay: number;
}

export interface Destination
{
   regionID: string;
   associatedMultiCityRegionId: string;
   longName: string;
   shortName: string;
   country: string;
   province: string;
   city: string;
   tla: string;
   nonLocalizedCity: string;
}

export interface HotelInfo
{
   hotelId: string;
   hotelName: string;
   localizedHotelName: string;
   hotelDestination: string;
   hotelDestinationRegionID: string;
   hotelLongDestination: string;
   hotelStreetAddress: string;
   hotelCity: string;
   hotelProvince: string;
   hotelCountryCode: string;
   hotelLatitude: number;
   hotelLongitude: number;
   hotelStarRating: string;
   hotelGuestReviewRating: number;
   hotelReviewTotal: number;
   hotelImageUrl: string;
   isOfficialRating: boolean;
}

export interface HotelUrgencyInfo
{
   airAttachRemainingTime: number;
   numberOfPeopleViewing: number;
   numberOfPeopleBooked: number;
   numberOfRoomsLeft: number;
   lastBookedTime: number;
   almostSoldStatus: string;
   link: string;
   airAttachEnabled: boolean;
}

export interface HotelPricingInfo
{
   averagePriceValue: number;
   totalPriceValue: number;
   crossOutPriceValue: number;
   originalPricePerNight: number;
   currency: string;
   percentSavings: number;
   drr: boolean;
}

export interface HotelUrls
{
   hotelInfositeUrl: string;
   hotelSearchResultUrl: string;
}

export interface HotelOffer
{
   offerDateRange: OfferDateRange;
   destination: Destination;
   hotelInfo: HotelInfo;
   hotelUrgencyInfo: HotelUrgencyInfo;
   hotelPricingInfo: HotelPricingInfo;
   hotelUrls: HotelUrls;
}