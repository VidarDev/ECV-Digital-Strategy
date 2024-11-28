'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

const shoeDetails = {
  id: 1,
  name: "Chaussure de Course Eco-Friendly Pro Series",
  description: "Une chaussure révolutionnaire conçue pour les flottes d'entreprises et les clubs sportifs. Optimisée pour une durabilité maximale et un coût total de possession réduit.",
  image: "/assets/images/shoe1.webp",
  wholesalePrice: 25,
  bulkPricing: [
    { quantity: 10, discount: 10 },
    { quantity: 50, discount: 20 },
    { quantity: 100, discount: 30 },
  ],
  minOrderQuantity: 10,
  stockAvailable: 500,
  sizes: ["38", "40", "42", "44"],
  material: "Matériaux recyclés à 100%",
  durability: "Testée pour une durabilité de 500 km",
  sustainability: "Réduction de l'empreinte carbone de 50%",
  businessFeatures: [
    "Personnalisation de marque disponible",
    "Service de maintenance inclus",
    "Garantie commerciale de 12 mois",
    "Support dédié aux entreprises"
  ],
  certifications: [
    "ISO 14001",
    "Éco-label européen",
    "Fair Trade"
  ],
  carbonImpact: {
    total: 1.6,
    fabrication: 1.5,
    rawMaterials: 0.2,
    supply: 0.06,
    shaping: 0.24,
    assemblyAndDistribution: 0.3,
    endOfLife: 0.1,
  },
  reviews: [
    { id: 1, companyName: "SportClub Pro", rating: 5, comment: "Excellent rapport qualité-prix pour notre club de 200 membres" },
    { id: 2, companyName: "FitnessCorp", rating: 4, comment: "Très bonne durabilité, parfait pour notre salle de sport" },
  ],
  faq: [
    { question: "Quel est le délai de livraison pour les commandes en gros ?", answer: "2-3 semaines pour les commandes de plus de 50 unités" },
    { question: "Proposez-vous des conditions de paiement spéciales ?", answer: "Oui, paiement à 30 jours pour les clients professionnels" },
  ]
};

const ShoeDetailPage: React.FC = () => {
  const [quantity, setQuantity] = useState(10);
  
  const calculatePrice = (qty: number) => {
    const basePrice = shoeDetails.wholesalePrice;
    const discount = shoeDetails.bulkPricing.reduce((acc, curr) => {
      return qty >= curr.quantity ? curr.discount : acc;
    }, 0);
    return (basePrice * (1 - discount / 100)).toFixed(2);
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardContent className="p-0">
            <Image
              src={shoeDetails.image}
              alt={shoeDetails.name}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col space-y-2">
              <CardTitle className="text-3xl">{shoeDetails.name}</CardTitle>
              <div className="flex flex-wrap gap-2">
                {shoeDetails.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary">{cert}</Badge>
                ))}
              </div>
            </div>
            <CardDescription className="text-lg">{shoeDetails.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="quantity">Quantité</Label>
                <Input
                  id="quantity"
                  type="number"
                  min={shoeDetails.minOrderQuantity}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-32"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-semibold">
                  Prix unitaire: {calculatePrice(quantity)}€
                </p>
                <p className="text-sm text-muted-foreground">
                  Commande minimum: {shoeDetails.minOrderQuantity} unités
                </p>
                <p className="text-sm text-muted-foreground">
                  Stock disponible: {shoeDetails.stockAvailable} unités
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Remises par volume:</h3>
              <div className="grid grid-cols-3 gap-2">
                {shoeDetails.bulkPricing.map((tier) => (
                  <Card key={tier.quantity} className="p-2 text-center">
                    <p className="font-semibold">{tier.quantity}+ unités</p>
                    <p className="text-green-600">-{tier.discount}%</p>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full" size="lg">
              Demander un devis
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="features" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="features">Caractéristiques</TabsTrigger>
          <TabsTrigger value="business">Services Pro</TabsTrigger>
          <TabsTrigger value="sustainability">Durabilité</TabsTrigger>
          <TabsTrigger value="reviews">Avis Clients</TabsTrigger>
        </TabsList>

        <TabsContent value="features" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Spécifications</h3>
                  <ul className="space-y-2">
                    <li>Matériau: {shoeDetails.material}</li>
                    <li>Durabilité: {shoeDetails.durability}</li>
                    <li>Tailles disponibles: {shoeDetails.sizes.join(", ")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Caractéristiques Pro</h3>
                  <ul className="space-y-2">
                    {shoeDetails.businessFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Services aux professionnels</h3>
                <ul className="space-y-2">
                  <li>✓ Service client dédié aux entreprises</li>
                  <li>✓ Personnalisation de marque disponible</li>
                  <li>✓ Formation et support technique</li>
                  <li>✓ Garantie commerciale étendue</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sustainability">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Impact Carbone (kg CO2e)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(shoeDetails.carbonImpact).map(([key, value]) => (
                      <Card key={key} className="p-4">
                        <p className="text-sm capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                        <p className="text-lg font-semibold">{value}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardContent className="pt-6">
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {shoeDetails.reviews.map((review) => (
                    <Card key={review.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{review.companyName}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
                        </div>
                        <Badge variant="secondary">{review.rating}/5</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ShoeDetailPage;
