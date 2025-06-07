import React, { JSX } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { AppRoute, CITIES_LOCATION } from '../../const';

export function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((s) => s.city);

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LOCATION.map((city) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={() => dispatch(changeCity(city))}
        >
          <Link
            to={AppRoute.Main}
            className={
              city.name === selectedCity.name
                ? 'tabs__item tabs__item--active locations__item-link'
                : 'tabs__item locations__item-link'
            }
          >
            {city.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
