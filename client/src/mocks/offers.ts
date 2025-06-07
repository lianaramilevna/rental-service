import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
  {
    id: '1',
    title: 'Уютная квартира в центре Парижа',
    description: 'Светлая и современная квартира рядом с Лувром и Сенной. Отличный вариант для пары или небольшой семьи.',
    type: 'apartment',
    price: 200,
    images: [
      '672982285.jpg',
      '672982286.jpg',
      '672982292.jpg',
      '672982293.jpg',
      '672982300.jpg',
      '672982302.jpg'
    ],
    city: {
      name: 'Paris',
      location: { latitude: 48.8566, longitude: 2.3522, zoom: 13 }
    },
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 16 },
    goods: ['Breakfast', 'Laptop friendly workspace', 'Towels'],
    host: { name: 'Liana', avatarUrl: 'avatar-liana.jpg', isPro: true },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 2,
    maxAdult: 4
  },
  {
    id: '3',
    title: 'Люкс в Брюсселе на Гранд-Плас',
    description: 'Престижные апартаменты в самом сердце Брюсселя с видом на Гранд-Плас.',
    type: 'apartment',
    price: 220,
    images: [
      '3.1.jpg',
      '3.2.jpg',
      '672982292.jpg',
      '672982293.jpg',
      '672982300.jpg',
      '672982302.jpg'
    ],
    city: {
      name: 'Brussels',
      location: { latitude: 50.8503, longitude: 4.3517, zoom: 13 }
    },
    location: { latitude: 50.8466, longitude: 4.3528, zoom: 16 },
    goods: ['Air conditioning', 'Breakfast', 'Towels'],
    host: { name: 'Angelina', avatarUrl: 'avatar-angelina.jpg', isPro: true },
    isPremium: true,
    isFavorite: true,
    rating: 4.7,
    bedrooms: 2,
    maxAdult: 4
  },
  {
    id: '5',
    title: 'Очаровательный домик рядом с Рейном',
    description: 'Уютный дом с садом и камином в историческом центре Кельна.',
    type: 'house',
    price: 150,
    images: [
      '5.1.jpg',
      '5.2.jpg',
      '672982292.jpg',
      '672982293.jpg',
      '672982300.jpg',
      '672982302.jpg'
    ],
    city: {
      name: 'Cologne',
      location: { latitude: 50.9375, longitude: 6.9603, zoom: 13 }
    },
    location: { latitude: 50.9375, longitude: 6.9603, zoom: 16 },
    goods: ['Fridge', 'Towels', 'Breakfast'],
    host: { name: 'Tom', avatarUrl: 'avatar-tom.jpg', isPro: false },
    isPremium: false,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 2,
    maxAdult: 4
  },
  {
    id: '7',
    title: 'Квартира-студия у каналов Амстердама',
    description: 'Маленькая, но стильная студия прямо на берегу канала. Идеальна для романтического уик-энда.',
    type: 'apartment',
    price: 180,
    images: [
      '7.1.jpg',
      '7.2.jpg',
      '672982292.jpg',
      '672982293.jpg',
      '672982300.jpg',
      '672982302.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16 },
    goods: ['Air conditioning', 'Towels', 'Breakfast'],
    host: { name: 'Sophie', avatarUrl: 'avatar-sophie.jpg', isPro: true },
    isPremium: false,
    isFavorite: true,
    rating: 4.6,
    bedrooms: 1,
    maxAdult: 2
  },
  {
    id: '8',
    title: 'Просторный дом на окраине Амстердама',
    description: 'Большой дом с садом и камином, идеален для семейного отдыха.',
    type: 'house',
    price: 350,
    images: [
      '8.1.jpg',
      '8.2.jpg',
      '672982292.jpg',
      '672982293.jpg',
      '672982300.jpg',
      '672982302.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16 },
    goods: ['Air conditioning', 'Towels', 'Washer'],
    host: { name: 'Sophie', avatarUrl: 'avatar-sophie.jpg', isPro: true },
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    bedrooms: 4,
    maxAdult: 8
  },
  {
    id: '7-2',
    title: 'Квартира-студия у каналов Амстердама-2',
    description: 'Маленькая, но стильная студия прямо на берегу канала. Идеальна для романтического уик-энда.',
    type: 'apartment',
    price: 150,
    images: [
      '7.1.jpg',
      '7.2.jpg',
      '672982292.jpg',
      '672982293.jpg',
      '672982300.jpg',
      '672982302.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    goods: ['Air conditioning', 'Towels', 'Breakfast'],
    host: { name: 'Sophie', avatarUrl: 'avatar-sophie.jpg', isPro: true },
    isPremium: false,
    isFavorite: false,
    rating: 4.2,
    bedrooms: 1,
    maxAdult: 2
  },
  {
    id: '8-2',
    title: 'Просторный дом на окраине Амстердама',
    description: 'Большой дом с садом и камином, идеален для семейного отдыха.',
    type: 'house',
    price: 320,
    images: [
      '8.1.jpg',
      '8.2.jpg',
      '672982292.jpg',
      '672982293.jpg',
      '672982300.jpg',
      '672982302.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 13 }
    },
    location: { latitude: 52.378998, longitude: 4.928425, zoom: 16 },
    goods: ['Air conditioning', 'Towels', 'Washer'],
    host: { name: 'Sophie', avatarUrl: 'avatar-sophie.jpg', isPro: true },
    isPremium: true,
    isFavorite: true,
    rating: 4.7,
    bedrooms: 4,
    maxAdult: 8
  }
];
