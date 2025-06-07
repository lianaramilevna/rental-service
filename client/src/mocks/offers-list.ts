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
    isPremium: true,
    isFavorite: false,
    rating: 4.7
  },
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
    price: 150,
    previewImage: '7.1.jpg',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 4.2
  },
  {
    id: '8-2',
    title: 'Просторный дом на окраине Амстердама-2',
    type: 'house',
    price: 320,
    previewImage: '8.1.jpg',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.378998, longitude: 4.928425, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 4.7
  }
];
