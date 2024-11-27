import React from "react";
import { Input } from "@/components/ui/input"; // ShadCN input
import { Button } from "@/components/ui/button"; // ShadCN button

const SearchRelayPoint: React.FC = () => {
  return (
    <div className="p-8 text-center text-2xl">
      {/* Première div : Image et Titre */}
      <div className="mb-8">
        {/* Ajoutez une image ici si nécessaire */}
        {/* <img 
          src="/path-to-your-image.jpg" 
          alt="Point Relais" 
          className="w-36 h-36 object-contain mb-4" 
        /> */}
        <h1 className="text-lg font-semibold">
          Trouver un point relais ou un locker à proximité de votre domicile
        </h1>
      </div>

      {/* Deuxième div : Formulaire */}
      <div className="flex flex-wrap justify-center gap-4">
        <Input type="text" placeholder="Code postal" className="w-40" />
        <Input type="text" placeholder="Ville" className="w-40" />
        <Button> Trouver </Button>
        <Button variant="outline"> Localiser </Button>
      </div>
    </div>
  );
};

export default SearchRelayPoint;
