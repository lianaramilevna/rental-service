import React, { JSX } from 'react';
import { Review } from '../../types/review';

type ReviewItemProps = {
  review: Review;
};

export function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { user, comment, rating, date } = review;
  const dateObj = new Date(date);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const formattedDate = `${monthNames[dateObj.getUTCMonth()]} ${dateObj.getUTCFullYear()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={`/img/${user.avatarUrl}`}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
        {user.isPro && <span className="reviews__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateObj.toISOString()}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}
