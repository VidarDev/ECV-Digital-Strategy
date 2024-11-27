'use client';
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

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
  const mapContainer = useRef<HTMLDivElement | null>(null); // Référence pour le conteneur de la carte

  useEffect(() => {
    if (mapContainer.current) {
      // Initialiser Mapbox avec la clé API
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
      const map = new mapboxgl.Map({
        container: mapContainer.current, // Conteneur de la carte
        style: "mapbox://styles/mapbox/streets-v11", // Style de la carte
        center: [2.3522, 48.8566], // Position initiale de la carte (ici Paris)
        zoom: 12, // Niveau de zoom initial
      });

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
          .addTo(map);
      });

      // Cleanup de la carte lorsqu'on quitte le composant
      return () => {
        map.remove();
      };
    }
  }, [lockers]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-lg border border-gray-200"
    ></div>
  );
};

export default Map;
