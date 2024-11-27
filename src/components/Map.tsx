'use client';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { geojson } from '@/geojson/geojson'; // Tes données GeoJSON

// Importation des composants ShadCN UI
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  // State pour afficher ou non la barre latérale
  const [info, setInfo] = useState<{ name: string, adresse: string, type: string } | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      // Initialiser Mapbox avec la clé API
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

      // Initialiser la carte
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/dark-v10', // Style de la carte
        center: [2.3522, 48.8566], // Position initiale de la carte (ici Paris)
        zoom: 10, // Zoom initial
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

      mapRef.current.on('load', () => {
        // Vérifier si la source existe déjà
        if (mapRef.current?.getSource('lockers-source')) {
          // Si elle existe, on la supprime
          mapRef.current?.removeSource('lockers-source');
        }

        // Ajouter une nouvelle source avec les données GeoJSON
        mapRef.current?.addSource('lockers-source', {
          type: 'geojson',
          data: geojson, // Tes données GeoJSON
          cluster: true, // Activer les clusters
          clusterMaxZoom: 14, // Zoom max pour les clusters
          clusterRadius: 50, // Rayon des clusters
        });

        // Ajouter le layer des clusters
        mapRef.current?.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'lockers-source',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': [
              'step',
              ['get', 'point_count'],
              '#51bbd6', // Couleur de base des clusters
              10,
              '#f1f075',
              50,
              '#f28cb1',
            ],
            'circle-radius': [
              'step',
              ['get', 'point_count'],
              15, // Taille des clusters
              10,
              20,
              50,
              25,
            ],
          },
        });

        // Ajouter le layer des points non-clusterisés
        mapRef.current?.addLayer({
          id: 'unclustered-point',
          type: 'circle',
          source: 'lockers-source',
          filter: ['!', ['has', 'point_count']], // Filtrer les points non-clusterisés
          paint: {
            'circle-color': '#11b4da', // Couleur des points
            'circle-radius': 6, // Taille des points
          },
        });

        // Ajouter le layer du count des clusters
        mapRef.current?.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'lockers-source',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
          },
          paint: {
            'text-color': '#ffffff',
          },
        });

        // Ajouter un événement de clic sur les points
        mapRef.current?.on('click', 'unclustered-point', (e) => {
          const features = mapRef.current?.queryRenderedFeatures(e.point, {
            layers: ['unclustered-point'],
          });

          if (features && features.length > 0) {
            const feature = features[0];
            // Récupérer les informations du point cliqué
            const { name, adresse, type } = feature.properties;

            // Mettre à jour l'état de la barre d'infos avec les données du point
            setInfo({ name, adresse, type });
          }
        });
      });

      // Cleanup de la carte lorsqu'on quitte le composant
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    }
  }, []); // Vide pour ne charger qu'une seule fois lors du montage


  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Carte */}
      <div
        ref={mapContainerRef}
        style={{ width: '80%', height: '100%' }} // Carte prenant 80% de l'espace
      ></div>

      {/* Barre d'information à droite */}
      <div
        style={{
          width: '20%', // Largeur de la barre d'infos
          height: '100%',
          padding: '10px',
          backgroundColor: '#f4f4f4',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
          transition: 'transform 0.3s ease',
          transform: info ? 'translateX(0)' : 'translateX(100%)', // Afficher ou cacher la barre d'infos
        }}
      >
        {info ? (
          <Card>
            <CardHeader>
              <CardTitle>{info.name}</CardTitle>
              <CardDescription>{info.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p><strong>Adresse:</strong> {info.adresse}</p>
              <div className="flex justify-between mt-4">
                <Button onClick={() => setInfo(null)} style={{ marginTop: '10px' }}>
                  Fermer
                </Button>
                {/* Bouton Valider sans action */}
                <Button style={{ marginTop: '10px' }}>
                  Valider ce point
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <p>Cliquez sur un point pour voir les informations.</p>
        )}
      </div>
    </div>
  );
};

export default Map;
