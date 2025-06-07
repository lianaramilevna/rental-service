import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffersList, setFullOffers } from './action';
import { offersList as mockList } from '../mocks/offers-list';
import { offers as mockFull } from '../mocks/offers';
import { filterOffersByCity } from '../utils';
import type { CityOffer, OffersList, FullOffer } from '../types/offer';
import { getCityByName } from '../utils';
import { CITIES_LOCATION } from '../const';

const defaultCity: CityOffer = getCityByName('Paris', CITIES_LOCATION)!;

export interface OffersState {
  city: CityOffer;
  offersList: OffersList[];
  fullOffers: FullOffer[];
}

const initialState: OffersState = {
  city: defaultCity,
  offersList: filterOffersByCity(defaultCity.name, mockList),
  fullOffers: mockFull
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offersList = filterOffersByCity(action.payload.name, mockList);
    })
    .addCase(setOffersList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(setFullOffers, (state, action) => {
      state.fullOffers = action.payload;
    });
});
