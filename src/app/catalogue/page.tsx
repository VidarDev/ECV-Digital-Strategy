'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from '@/components/ui/checkbox'
import { shoes } from '@/data/products'
import Image from 'next/image'
import Link from "next/link"

export default function CataloguePage() {
    const [priceRange, setPriceRange] = useState([0, 100])
    const [size, setSize] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedBrand, setSelectedBrand] = useState("")
    const [ecologicalFilters, setEcologicalFilters] = useState<string[]>([])
    const [selectedType, setSelectedType] = useState<string>('')
    const [selectedIntensity, setSelectedIntensity] = useState<string>('')

    const filteredShoes = shoes.filter((shoe) => {
        const matchesSearch =
            shoe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            shoe.brand.toLowerCase().includes(searchQuery.toLowerCase());

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
        <div className="container py-10 mx-auto">
            <div className="flex flex-col space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Catalogue</h1>
                    <p className="text-muted-foreground">
                        Découvrez notre sélection de chaussures de running
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                    {/* Sidebar des filtres */}
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle>Filtres</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Recherche */}
                            <div className="space-y-2">
                                <Label htmlFor="search">Rechercher</Label>
                                <Input
                                    id="search"
                                    placeholder="Rechercher..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <Separator />

                            {/* Prix */}
                            <div className="space-y-4">
                                <Label>Prix</Label>
                                <Slider
                                    defaultValue={[0, 100]}
                                    max={100}
                                    step={1}
                                    value={priceRange}
                                    onValueChange={setPriceRange}
                                    className="w-full"
                                />
                                <div className="flex items-center justify-between text-sm">
                                    <span>{priceRange[0]}€</span>
                                    <span>{priceRange[1]}€</span>
                                </div>
                            </div>

                            <Separator />

                            {/* Taille */}
                            <div className="space-y-2">
                                <Label>Taille</Label>
                                <Select value={size} onValueChange={setSize}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionner une taille" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 13 }, (_, i) => i + 36).map((size) => (
                                            <SelectItem key={size} value={size.toString()}>
                                                {size}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <Separator />

                            {/* Marques */}
                            <div className="space-y-2">
                                <Label>Marques</Label>
                                {["EcoRent", "ClassicRental", "ReCycle"].map((brand) => (
                                    <div key={brand} className="flex items-center gap-2 mb-2">
                                        <Checkbox
                                    checked={selectedBrand === brand}
                                    onCheckedChange={() =>
                                        setSelectedBrand(selectedBrand === brand ? "" : brand)
                                    }
                                />
                                        <span>{brand}</span>
                                    </div>
                                ))}
                            </div>

                            <Separator />

                            {/* Critères écologiques */}
                            <div className="space-y-2">
                                <h3>Critères écologiques</h3>
                                {["eco-cleaning", "durable-materials", "recyclable", "carbon-neutral"].map(
                                    (filter) => (
                                        <div key={filter} className="flex items-center gap-2 mb-2">
                                            <Checkbox
                                                checked={ecologicalFilters.includes(filter)}
                                                onCheckedChange={() =>
                                                    setEcologicalFilters((prev) =>
                                                        prev.includes(filter)
                                                            ? prev.filter((f) => f !== filter)
                                                            : [...prev, filter]
                                                    )
                                                }
                                            />
                                            <span >
                                                {filter === "eco-cleaning" && "Entretien écoresponsable"}
                                                {filter === "durable-materials" && "Matériaux durables"}
                                                {filter === "recyclable" && "Recyclable"}
                                                {filter === "carbon-neutral" && "Neutre en carbone"}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>

                            <Separator />

                            {/* Type de course */}
                            <div className="space-y-2">
                                <Label>Type de course</Label>
                                {["route", "trail"].map((type) => (
                                    <div key={type} className="flex items-center gap-2 mb-2">
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
                                    </div>
                                ))}
                            </div>

                            <Separator />

                            {/* Intensité */}
                            <div className="space-y-2">
                                <Label>Intensité</Label>
                                {["low", "medium", "high"].map((intensity) => (
                                    <div key={intensity} className="flex items-center gap-2 mb-2">
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
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Grid des produits */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredShoes.length ? (
                            filteredShoes.map((shoe) => (
                                <Card key={shoe.id} className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="aspect-square relative">
                                            <Image
                                                src={shoe.image}
                                                alt={shoe.name}
                                                fill
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-4 flex-col items-start gap-2">
                                        <div>
                                            <h3 className="font-semibold">{shoe.name}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {shoe.brand}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <span className="font-semibold">{shoe.price}€</span>
                                            <Link href="/details-shoe">
                                            <Button variant="outline" size="sm">
                                                Voir plus
                                            </Button>
                                            </Link>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))
                        ) : (
                            <p className="text-center col-span-full">Aucune chaussure ne correspond à vos filtres.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
