import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: '7',
    title: 'Квартира-студия у каналов Амстердама',
    type: 'apartment',
    price: 180,
    previewImage: '7.1.jpg',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4.6
  },
  {
    id: '8',
    title: 'Просторный дом на окраине Амстердама',
    type: 'house',
    price: 350,
    previewImage: '8.1.jpg',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4.8
  },
  {
    id: '7-2',
    title: 'Квартира-студия у каналов Амстердама-2',
    type: 'apartment',
    price: 180,
    previewImage: '7.1.jpg',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4.6
  },
  {
    id: '8-2',
    title: 'Просторный дом на окраине Амстердама-2',
    type: 'house',
    price: 350,
    previewImage: '8.1.jpg',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.378998, longitude: 4.928425, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4.8
  }
];
