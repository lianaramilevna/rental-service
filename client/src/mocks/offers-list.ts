import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: '1',
    title: 'Уютная квартира в центре Парижа',
    type: 'apartment',
    price: 200,
    previewImage: '672982285.jpg',
    city: {
      name: 'Paris',
      location: { latitude: 48.8566, longitude: 2.3522, zoom: 13 }
    },
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: '3',
    title: 'Люкс в Брюсселе на Гранд-Плас',
    type: 'apartment',
    price: 220,
    previewImage: '3.1.jpg',
    city: {
      name: 'Brussels',
      location: { latitude: 50.8503, longitude: 4.3517, zoom: 13 }
    },
    location: { latitude: 50.8466, longitude: 4.3528, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 4.7
  },
  {
    id: '5',
    title: 'Очаровательный домик рядом с Рейном',
    type: 'house',
    price: 150,
    previewImage: '5.1.jpg',
    city: {
      name: 'Cologne',
      location: { latitude: 50.9375, longitude: 6.9603, zoom: 13 }
    },
    location: { latitude: 50.9375, longitude: 6.9603, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: '7',
    title: 'Квартира-студия у каналов Амстердама',
    type: 'apartment',
    price: 180,
    previewImage: '7.1.jpg',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.3702, longitude: 4.8952, zoom: 13 }
    },
    location: { latitude: 52.3702, longitude: 4.8952, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4.6
  }
];
