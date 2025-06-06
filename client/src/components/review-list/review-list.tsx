import React, { JSX } from 'react';
import { Review } from '../../types/review';
import { ReviewItem } from '../review/review';

type ReviewListProps = {
  reviews: Review[];
};

export function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((rev) => (
          <ReviewItem key={rev.id} review={rev} />
        ))}
      </ul>
    </section>
  );
}
