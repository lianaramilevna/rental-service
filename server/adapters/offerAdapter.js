const cityCoordinates = {
  Paris: { latitude: 48.8566, longitude: 2.3522, zoom: 13 },
  Cologne: { latitude: 50.9375, longitude: 6.9603, zoom: 13 },
  Brussels: { latitude: 50.8503, longitude: 4.3517, zoom: 13 },
  Amsterdam: { latitude: 52.3676, longitude: 4.9041, zoom: 13 },
  Hamburg: { latitude: 53.5511, longitude: 9.9937, zoom: 13 },
  Dusseldorf: { latitude: 51.2277, longitude: 6.7735, zoom: 13 }
};

const getBaseUrl = () => `${process.env.HOST}:${process.env.PORT || 5000}`;

const adaptOfferToClient = (offer) => {
  const baseUrl = getBaseUrl();
  const cityLocation = cityCoordinates[offer.city];

  let previewImage = offer.previewImage;
  if (previewImage && !previewImage.startsWith('http')) {
    previewImage = `${baseUrl}${previewImage.startsWith('/') ? '' : '/'}${previewImage}`;
  }

  return {
    id: String(offer.id),
    title: offer.title,
    type: offer.type,
    price: offer.price,
    city: {
      name: offer.city,
      location: cityLocation
    },
    location: {
      latitude: offer.latitude || 0,
      longitude: offer.longitude || 0
    },
    isFavorite: offer.isFavorite,
    isPremium: offer.isPremium,
    rating: parseFloat(offer.rating),
    previewImage
  };
};

const adaptFullOfferToClient = (offer, author) => {
  const baseUrl = getBaseUrl();
  const cityLocation = cityCoordinates[offer.city];

  let previewImage = offer.previewImage;
  if (previewImage && !previewImage.startsWith('http')) {
    previewImage = `${baseUrl}${previewImage.startsWith('/') ? '' : '/'}${previewImage}`;
  }

  let photos = [];
  if (offer.photos && Array.isArray(offer.photos)) {
    photos = offer.photos.map(photo =>
      photo.startsWith('http') ? photo : `${baseUrl}${photo.startsWith('/') ? '' : '/'}${photo}`
    );
  }

  let avatarUrl = author?.avatarUrl;
  if (avatarUrl && !avatarUrl.startsWith('http')) {
    avatarUrl = `${baseUrl}${avatarUrl.startsWith('/') ? '' : '/'}${avatarUrl}`;
  }

  return {
    id: String(offer.id),
    title: offer.title,
    description: offer.description,
    publishDate: offer.publishDate,
    city: {
      name: offer.city,
      location: cityLocation
    },
    location: {
      latitude: offer.latitude,
      longitude: offer.longitude
    },
    isPremium: offer.isPremium,
    isFavorite: offer.isFavorite,
    rating: parseFloat(offer.rating),
    type: offer.type,
    rooms: offer.rooms,
    guests: offer.guests,
    price: offer.price,
    features: offer.features,
    commentsCount: offer.commentsCount,
    previewImage,
    photos,
    host: {
      id: String(author.id),
      name: author.name,
      email: author.email,
      avatarUrl,
      isPro: author.isPro
    }
  };
};


export { adaptOfferToClient, adaptFullOfferToClient };