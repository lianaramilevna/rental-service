import { createAction } from '@reduxjs/toolkit';
import { CityOffer, OffersList, FullOffer } from '../types/offer';

export const changeCity = createAction<CityOffer>('offers/changeCity');
export const setOffersList = createAction<OffersList[]>('offers/setOffersList');
export const setFullOffers = createAction<FullOffer[]>('offers/setFullOffers');
