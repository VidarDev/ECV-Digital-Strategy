'use client';
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

// Types pour les lockers
type Locker = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

type MapProps = {
  lockers: Locker[];
};

const Map: React.FC<MapProps> = ({ lockers }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      // Initialiser Mapbox avec la clé API
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

      // Initialiser la carte
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/dark-v10', // Style de la carte
        center: [2.3522, 48.8566], // Position initiale de la carte (ici Paris)
        zoom: 10, // Zoom initial plus adapté
      });

      // Ajouter le contrôle de géolocalisation
      mapRef.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true, // Suivre la position de l'utilisateur
          showUserHeading: true, // Afficher la direction de l'utilisateur
        })
      );

      // Ajouter les marqueurs pour chaque locker
      lockers.forEach((locker) => {
        new mapboxgl.Marker()
          .setLngLat([locker.longitude, locker.latitude]) // Position du marqueur
          .setPopup(
            new mapboxgl.Popup().setHTML(`
              <h3>${locker.name}</h3>
              <p>Latitude: ${locker.latitude}</p>
              <p>Longitude: ${locker.longitude}</p>
            `)
          ) // Pop-up du marqueur avec nom et coordonnées
      });

      // Cleanup de la carte lorsqu'on quitte le composant
      return () => {
        mapRef.current?.remove();
      };
    }
  }, [lockers]); // Dépendance sur les lockers pour recharger la carte si nécessaire

  return (
    <div
      ref={mapContainerRef}
      style={{ height: '100%', width: '100%' }} // Assurer que la carte occupe tout l'espace disponible
    ></div>
  );
};

export default Map;
