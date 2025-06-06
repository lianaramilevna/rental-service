import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';
import { offersList } from './mocks/offers-list';
import { offers } from './mocks/offers';
import { Setting } from './setting';
import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App
      rentalOffersCount={Setting.RentalOffersCount}
      offersList={offersList}
      offers={offers}
    />
  </StrictMode>
);
