import React from "react";
import { Search, Info } from "lucide-react"; // Icônes ShadCN

type Locker = {
  id: number;
  name: string;
  address: string;
};

type SearchResultsProps = {
  lockers: Locker[];
};

const SearchResults: React.FC<SearchResultsProps> = ({ lockers }) => {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Première section : Informations sur les lockers */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <div className="text-left">
          <p className="mb-1 font-medium">Voir les lockers en premier</p>
          <p className="text-sm text-gray-500">
            Si grisé, c'est qu'il n'y a pas encore de Locker à proximité
          </p>
        </div>
        <div className="flex items-center justify-center bg-blue-600 p-2 rounded-full text-white">
          <Search className="w-6 h-6" />
        </div>
      </div>

      {/* Deuxième section : Résultats de la recherche */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="max-h-96 overflow-y-scroll space-y-4">
          {lockers.length === 0 ? (
            <p className="text-center">Aucun résultat trouvé.</p>
          ) : (
            lockers.map((locker) => (
              <div
                key={locker.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
              >
                {/* Informations du Locker */}
                <div>
                  <h3 className="font-medium">{locker.name}</h3>
                  <p className="text-sm text-gray-500">{locker.address}</p>
                </div>
                {/* Icône d'information */}
                <div className="flex items-center justify-center bg-blue-600 p-2 rounded-full text-white">
                  <Info className="w-5 h-5" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
