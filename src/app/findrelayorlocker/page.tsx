import React from "react";
import SearchRelayPoint from "@/components/SearchRelayPoint";
import SearchResults from "@/components/SearchResults";
import Map from "@/components/Map"; // Assurez-vous d'importer le composant de la carte

const BentoLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Barre de recherche en haut */}
      <div className="bg-white-500 h-36 flex items-center justify-center border">
        <SearchRelayPoint />
      </div>

      {/* Conteneur principal en dessous */}
      <div className="flex flex-1">
        {/* Résultats de recherche à gauche */}
        <div className="bg-white-500 w-1/4 flex items-center justify-center border ">
          <SearchResults lockers={[]} />
        </div>

        {/* Carte à droite */}
        <div className="bg-white-500 w-3/4 flex items-center justify-center border overflow-hidden">
          {/* Ajoutez ici le composant Mapbox */}
          <div className="w-full h-full">
            <Map lockers={[{ id: 1, name: "Locker A", latitude: 48.8566, longitude: 2.3522 }]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
