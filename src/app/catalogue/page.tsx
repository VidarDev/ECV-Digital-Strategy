"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const shoes = [
    {
        id: 1,
        name: "Chaussure écoresponsable A",
        brand: "EcoRent",
        price: 19.99,
        image: "/assets/images/shoe1.webp",
        ecoCleaning: true,
        durableMaterials: true,
        recyclable: true,
        carbonNeutral: false,
        type: "route",
        intensity: "medium",
    },
    {
        id: 2,
        name: "Chaussure classique B",
        brand: "ClassicRental",
        price: 15.0,
        image: "/assets/images/shoe2.jpeg",
        ecoCleaning: false,
        durableMaterials: false,
        recyclable: false,
        carbonNeutral: false,
        type: "trail",
        intensity: "low",
    },
    {
        id: 3,
        name: "Chaussure recyclée C",
        brand: "ReCycle",
        price: 22.5,
        image: "/assets/images/shoe3.jpeg",
        ecoCleaning: true,
        durableMaterials: true,
        recyclable: true,
        carbonNeutral: true,
        type: "route",
        intensity: "high",
    },
    {
        id: 4,
        name: "Chaussure légère D",
        brand: "LightStep",
        price: 18.0,
        image: "/assets/images/shoe4.jpeg",
        ecoCleaning: false,
        durableMaterials: true,
        recyclable: false,
        carbonNeutral: true,
        type: "trail",
        intensity: "medium",
    },
    {
        id: 5,
        name: "Chaussure en matériaux recyclés E",
        brand: "GreenPath",
        price: 25.0,
        image: "/assets/images/shoe1.webp",
        ecoCleaning: true,
        durableMaterials: true,
        recyclable: true,
        carbonNeutral: false,
        type: "route",
        intensity: "low",
    },
    {
        id: 6,
        name: "Chaussure minimaliste F",
        brand: "BareStep",
        price: 20.99,
        image: "/assets/images/shoe2.jpeg",
        ecoCleaning: false,
        durableMaterials: false,
        recyclable: true,
        carbonNeutral: true,
        type: "trail",
        intensity: "high",
    },
    {
        id: 7,
        name: "Chaussure performance G",
        brand: "Performance+",
        price: 28.0,
        image: "/assets/images/shoe3.jpeg",
        ecoCleaning: true,
        durableMaterials: false,
        recyclable: false,
        carbonNeutral: true,
        type: "route",
        intensity: "high",
    },
    {
        id: 8,
        name: "Chaussure éthique H",
        brand: "FairSteps",
        price: 30.0,
        image: "/assets/images/shoe4.jpeg",
        ecoCleaning: true,
        durableMaterials: true,
        recyclable: true,
        carbonNeutral: true,
        type: "trail",
        intensity: "medium",
    },
    {
        id: 9,
        name: "Chaussure pour trail I",
        brand: "TrailRun",
        price: 24.5,
        image: "/assets/images/shoe2.jpeg",
        ecoCleaning: false,
        durableMaterials: true,
        recyclable: false,
        carbonNeutral: false,
        type: "trail",
        intensity: "high",
    },
    {
        id: 10,
        name: "Chaussure pour running J",
        brand: "RunFlex",
        price: 27.99,
        image: "/assets/images/shoe1.webp",
        ecoCleaning: true,
        durableMaterials: false,
        recyclable: true,
        carbonNeutral: false,
        type: "route",
        intensity: "medium",
    },
];



const CataloguePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [ecologicalFilters, setEcologicalFilters] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string>("");
    const [selectedIntensity, setSelectedIntensity] = useState<string>("");

    const filteredShoes = shoes.filter((shoe) => {
        const matchesSearch =
            shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shoe.brand.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesBrand = selectedBrand ? shoe.brand === selectedBrand : true;

        const matchesEcological = ecologicalFilters.every((filter) => {
            if (filter === "eco-cleaning") return shoe.ecoCleaning;
            if (filter === "durable-materials") return shoe.durableMaterials;
            if (filter === "recyclable") return shoe.recyclable;
            if (filter === "carbon-neutral") return shoe.carbonNeutral;
            return true;
        });

        const matchesType = selectedType ? shoe.type === selectedType : true;
        const matchesIntensity = selectedIntensity ? shoe.intensity === selectedIntensity : true;

        return matchesSearch && matchesBrand && matchesEcological && matchesType && matchesIntensity;
    });

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Catalogue de chaussures</h1>

            <div className="grid gap-6 md:grid-cols-4">
                {/* Sidebar des filtres */}
                <aside className="p-4 bg-white shadow-lg rounded-lg">
                    <h2 className="font-semibold text-lg mb-4">Filtres</h2>

                    {/* Recherche */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Rechercher</h3>
                        <Input
                            placeholder="Nom ou marque..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full"
                        />
                    </div>

                    {/* Marques */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Marques</h3>
                        {["EcoRent", "ClassicRental", "ReCycle"].map((brand) => (
                            <label key={brand} className="flex items-center gap-2 mb-2">
                                <Checkbox
                                    checked={selectedBrand === brand}
                                    onCheckedChange={() =>
                                        setSelectedBrand(selectedBrand === brand ? "" : brand)
                                    }
                                />
                                <span>{brand}</span>
                            </label>
                        ))}
                    </div>

                    {/* Critères écologiques */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Critères écologiques</h3>
                        {["eco-cleaning", "durable-materials", "recyclable", "carbon-neutral"].map(
                            (filter) => (
                                <label key={filter} className="flex items-center gap-2 mb-2">
                                    <Checkbox
                                        checked={ecologicalFilters.includes(filter)}
                                        onCheckedChange={(checked) =>
                                            setEcologicalFilters((prev) =>
                                                checked
                                                    ? [...prev, filter]
                                                    : prev.filter((f) => f !== filter)
                                            )
                                        }
                                    />
                                    <span>
                                        {filter === "eco-cleaning" && "Entretien écoresponsable"}
                                        {filter === "durable-materials" && "Matériaux durables"}
                                        {filter === "recyclable" && "Recyclable"}
                                        {filter === "carbon-neutral" && "Neutre en carbone"}
                                    </span>
                                </label>
                            )
                        )}
                    </div>

                    {/* Type de course */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Type de course</h3>
                        {["route", "trail"].map((type) => (
                            <label key={type} className="flex items-center gap-2 mb-2">
                                <Checkbox
                                    checked={selectedType === type}
                                    onCheckedChange={() =>
                                        setSelectedType(selectedType === type ? "" : type)
                                    }
                                />
                                <span>
                                    {type === "route" && "Course sur route"}
                                    {type === "trail" && "Trail"}
                                </span>
                            </label>
                        ))}
                    </div>

                    {/* Intensité */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Intensité</h3>
                        {["low", "medium", "high"].map((intensity) => (
                            <label key={intensity} className="flex items-center gap-2 mb-2">
                                <Checkbox
                                    checked={selectedIntensity === intensity}
                                    onCheckedChange={() =>
                                        setSelectedIntensity(selectedIntensity === intensity ? "" : intensity)
                                    }
                                />
                                <span>
                                    {intensity === "low" && "Basse"}
                                    {intensity === "medium" && "Moyenne"}
                                    {intensity === "high" && "Haute"}
                                </span>
                            </label>
                        ))}
                    </div>
                </aside>

                {/* Liste des produits */}
                <section className="md:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredShoes.length ? (
                        filteredShoes.map((shoe) => (
                            <Card key={shoe.id} className="p-4 flex flex-col items-center">
                                <CardHeader className="mb-4">
                                    <img
                                        src={shoe.image}
                                        alt={shoe.name}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                    <h3 className="text-lg font-semibold mt-4">{shoe.name}</h3>
                                    <p className="text-sm text-gray-500">{shoe.brand}</p>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-700 font-semibold">{shoe.price}€ / location</p>
                                    <button
                                        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black border-2 border-black transition duration-300 mt-4"
                                        onClick={() => alert(`Voir ${shoe.name}`)}
                                    >
                                        Voir le produit
                                    </button>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p className="text-center col-span-full">Aucune chaussure ne correspond à vos filtres.</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default CataloguePage;
