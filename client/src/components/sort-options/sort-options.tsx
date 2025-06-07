import React, { useState, KeyboardEvent, JSX } from 'react';
import { SortOffersType } from '../../const';
import type { SortOffer } from '../../types/sort';
import classNames from 'classnames';

type SortOptionsProps = {
  activeSorting: SortOffer;
  onChange: (newSorting: SortOffer) => void;
};

export function SortOptions({ activeSorting, onChange }: SortOptionsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = {
    transform: isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)'
  };

  const keyDownHandler = (evt: KeyboardEvent<HTMLFormElement>) => {
    if (evt.key === 'Escape' && isOpen) {
      evt.preventDefault();
      setIsOpen(false);
    }
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={keyDownHandler}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleOpen}
      >
        {SortOffersType[activeSorting]}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={classNames(
          'places__options',
          'places__options--custom',
          { 'places__options--opened': isOpen }
        )}
      >
        {Object.entries(SortOffersType).map(([key, label]) => (
          <li
            key={key}
            className={classNames(
              'places__option',
              { 'places__option--active': key === activeSorting }
            )}
            tabIndex={0}
            onClick={() => {
              onChange(key as SortOffer);
              setIsOpen(false);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}
