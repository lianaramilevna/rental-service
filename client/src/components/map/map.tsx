import React, { JSX, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  points: { latitude: number; longitude: number }[];
  center: [number, number];
  zoom: number;
};

export function Map({ points, center, zoom }: MapProps): JSX.Element {
  useEffect(() => {
    const map = L.map('map').setView(center, zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const defaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    });

    const hoverIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    });

    points.forEach((pt) => {
      const marker = L.marker([pt.latitude, pt.longitude], {
        icon: defaultIcon
      }).addTo(map);

      marker.on('mouseover', () => {
        marker.setIcon(hoverIcon);
      });
      marker.on('mouseout', () => {
        marker.setIcon(defaultIcon);
      });
    });

    return () => {
      map.remove();
    };
  }, [points, center, zoom]);

  return <div id="map" style={{ height: '100%', width: '100%' }} />;
}
