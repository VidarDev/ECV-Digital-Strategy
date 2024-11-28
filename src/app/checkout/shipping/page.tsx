'use client'

import { CheckoutSteps } from "@/components/checkout/CheckoutSteps"
import SearchRelayPoint from "@/components/SearchRelayPoint";
import Map from "@/components/Map";
import React from "react"; // Assur

export default function ShippingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Informations de livraison</h1>

        <div className="flex flex-col h-screen">
          {/* Barre de recherche en haut */}
          <div className="bg-white-500 h-36 flex items-center justify-center">
            <SearchRelayPoint/>
          </div>

          {/* Conteneur principal en dessous */}
          <div className="flex flex-1">
            {/* Résultats de recherche à gauche */}
            {/* Si tu veux afficher les résultats à gauche, décommente le bloc suivant */}
            {/* <div className="bg-white-500 w-1/4 flex items-center justify-center border "> */}
            {/*   <SearchResults lockers={[]} /> */}
            {/* </div> */}

            {/* Carte à droite */}
            <div className="bg-white-500 flex-1 flex items-center justify-center border overflow-hidden">
              {/* Carte Mapbox prend toute la largeur et la hauteur */}
              <div className="w-full h-full">
                <Map lockers={[{id: 1, name: "Locker A", latitude: 48.8566, longitude: 2.3522}]}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutSteps/>
    </div>
  )
}
