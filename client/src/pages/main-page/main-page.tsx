import React, { JSX, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useAppSelector } from '../../hooks';
import { Logo } from '../../components/logo/logo';
import { CitiesList } from '../../components/cities-list/cities-list';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { SortOptions } from '../../components/sort-options/sort-options';
import { Map } from '../../components/map/map';
import { sortOffersByType } from '../../utils';
import type { SortOffer } from '../../types/sort';

export function MainPage(): JSX.Element {
  const city       = useAppSelector((s) => s.city);
  const offersList = useAppSelector((s) => s.offersList);

  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

  const sortedOffers = sortOffersByType(offersList, activeSort);

  const rentalOffersCount = sortedOffers.length;
  const mapPoints = sortedOffers.map((o) => ({
    latitude: o.location.latitude,
    longitude: o.location.longitude
  }));
  const mapCenter: [number, number] = [
    city.location.latitude,
    city.location.longitude
  ];

  return (
    <div className="page page--gray page--main">
      <Helmet><title>Шесть городов</title></Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                   </a>
                </li>
              </ul>
            </nav> 
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {rentalOffersCount} places to stay in {city.name}
              </b>

              <SortOptions
                activeSorting={activeSort}
                onChange={setActiveSort}
              />

              <CitiesCardList offersList={sortedOffers} />
            </section>

            <div className="cities__right-section">
              <section
                className="cities__map map"
                style={{ height: '300px', width: '100%' }}
              >
                <Map
                  points={mapPoints}
                  center={mapCenter}
                  zoom={city.location.zoom}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
