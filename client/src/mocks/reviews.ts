import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 'r1',
    comment: 'Маленькая, но очень уютная студия прямо у канала. Советую!',
    date: '2025-05-20T14:30:00.000Z',
    rating: 4,
    user: {
      name: 'Liana',
      avatarUrl: 'avatar-liana.jpg',
      isPro: false
    }
  },
  {
    id: 'r2',
    comment: 'Потрясающий вид, но немного шумно по вечерам. В целом — супер.',
    date: '2025-06-21T09:15:00.000Z',
    rating: 5,
    user: {
      name: 'Tom',
      avatarUrl: 'avatar-tom.jpg',
      isPro: true
    }
  }
];
