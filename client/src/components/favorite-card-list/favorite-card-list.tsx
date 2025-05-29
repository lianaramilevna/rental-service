import React, { JSX } from 'react';
import { FavoriteOffer } from '../../types/offer';
import { FavoriteCard } from '../favorite-card/favorite-card';

type FavoriteCardListProps = {
  offers: FavoriteOffer[];
};

export function FavoriteCardList({ offers }: FavoriteCardListProps): JSX.Element {
  const grouped = offers.reduce<Record<string, FavoriteOffer[]>>((acc, o) => {
    acc[o.city.name] = acc[o.city.name] || [];
    acc[o.city.name].push(o);
    return acc;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(grouped).map(([city, list]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <span className="locations__item-link">{city}</span>
            </div>
          </div>
          <div className="favorites__places">
            {list.map((offer) => (
              <FavoriteCard key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
