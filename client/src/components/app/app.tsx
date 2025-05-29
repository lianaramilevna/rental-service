import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { MainPage } from "../../pages/main-page/main-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { OfferPage } from "../../pages/offer-page/offer-page";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from '../../types/offer';
import { Logo } from "../logo/logo";
import { JSX } from "react";


type AppMainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  offers: FullOffer[];
};

function App({ rentalOffersCount, offersList, offers }: AppMainPageProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              rentalOffersCount={rentalOffersCount}
              offersList={offersList}
            />
          }
        />

        <Route path={AppRoute.Login} element={<LoginPage />} />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Offer} element={<OfferPage offers={offers} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };