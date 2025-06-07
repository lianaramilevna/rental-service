import { CityOffer, OffersList } from './types/offer';
import { SortOffer } from './types/sort';
import { SortOffersType } from './const';

export function getCityByName(name: string, cities: CityOffer[]): CityOffer | undefined {
  return cities.find((c) => c.name === name);
}

export function filterOffersByCity(cityName: string, offers: OffersList[]): OffersList[] {
  return offers.filter((o) => o.city.name === cityName);
}

export function sortOffersByType(
  offers: OffersList[],
  type: SortOffer
): OffersList[] {
  switch (type) {
    case 'PriceToHigh':
      return [...offers].sort((a, b) => a.price - b.price);
    case 'PriceToLow':
      return [...offers].sort((a, b) => b.price - a.price);
    case 'TopRated':
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}