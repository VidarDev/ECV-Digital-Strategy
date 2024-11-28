'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const shoeDetails = {
  id: 1,
  name: "Chaussure de Course Eco-Friendly Pro Series",
  description: "Une chaussure révolutionnaire conçue pour les flottes d'entreprises et les clubs sportifs. Optimisée pour une durabilité maximale et un coût total de possession réduit.",
  image: "/assets/images/shoe1.webp",
  wholesalePrice: 25,
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
    { id: 1, name: "SportClub Pro", rating: 5, comment: "Excellent rapport qualité-prix pour notre club de 200 membres" },
    { id: 2, name: "FitnessCorp", rating: 4, comment: "Très bonne durabilité, parfait pour notre salle de sport" },
  ],
  faq: [
    { question: "Quel est le délai de livraison pour les commandes en gros ?", answer: "2-3 semaines pour les commandes de plus de 50 unités" },
    { question: "Proposez-vous des conditions de paiement spéciales ?", answer: "Oui, paiement à 30 jours pour les clients professionnels" },
  ],
  suggestions: [
    { id: 2, name: "Chaussure Trail Durable", image: "/assets/images/shoe2.jpeg", rentalPrice: 30 },
    { id: 3, name: "Chaussure Running Recyclable", image: "/assets/images/shoe3.jpeg", rentalPrice: 28 },
    { id: 4, name: "Chaussure Ville Éco-Responsable", image: "/assets/images/shoe4.jpeg", rentalPrice: 22 },
  ]
};

const ShoeDetailPage: React.FC = () => {
  return (
     <div className="container mx-auto py-8 px-4">
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

        <Card className="flex flex-col">
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
          
          <CardContent className="space-y-6 h-full">
            <div className="space-y-4">          
              <div className="space-y-2">
                <p className="text-lg font-semibold">
                  Prix unitaire: {shoeDetails.wholesalePrice}€ / semaine
                </p>
                <p className="text-sm text-muted-foreground">
                  Stock disponible: {shoeDetails.stockAvailable} unités
                </p>
              </div>
              </div>
          </CardContent>

          <CardFooter>
            <Link href="/checkout" className="w-full">
              <Button className="w-full" size="lg">
                Louer
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Tabs defaultValue="features" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="features">Details</TabsTrigger>
          <TabsTrigger value="sustainability">Durabilité</TabsTrigger>
          <TabsTrigger value="faq">Faq</TabsTrigger>
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

        <TabsContent value="sustainability">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Impact Carbone (kg CO2e)</h3>
                  <Table>
                    <TableCaption>Impact environnemental détaillé</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Étape</TableHead>
                        <TableHead className="text-right">Impact CO₂e</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-green-50">
                        <TableCell className="font-medium">Fabrication</TableCell>
                        <TableCell className="text-right">{shoeDetails.carbonImpact.fabrication} kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Matières premières</TableCell>
                        <TableCell className="text-right">{shoeDetails.carbonImpact.rawMaterials} kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Approvisionnement</TableCell>
                        <TableCell className="text-right">{shoeDetails.carbonImpact.supply} kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Mise en forme</TableCell>
                        <TableCell className="text-right">{shoeDetails.carbonImpact.shaping} kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Assemblage et Distribution</TableCell>
                        <TableCell className="text-right">{shoeDetails.carbonImpact.assemblyAndDistribution} kg</TableCell>
                      </TableRow>
                      <TableRow className="bg-green-50">
                        <TableCell className="font-medium">Fin de vie</TableCell>
                        <TableCell className="text-right">{shoeDetails.carbonImpact.endOfLife} kg</TableCell>
                      </TableRow>
                      <TableRow className="font-semibold">
                        <TableCell>Total pour un mois d&apos;utilisation</TableCell>
                        <TableCell className="text-right">{shoeDetails.carbonImpact.total} kg</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq">
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {shoeDetails.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardContent className="pt-6">
              <ScrollArea className="pr-4">
                <div className="space-y-4">
                  {shoeDetails.reviews.map((review) => (
                    <Card key={review.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
                        </div>
                        <Badge variant="secondary" className="text-yellow-500">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-900">Suggestions de chaussures</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {shoeDetails.suggestions.length ? (
                           shoeDetails.suggestions.map((shoe) => (
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
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <span className="font-semibold">{shoe.rentalPrice}€ / semaine</span>
                                            <Link href='/details-shoe'>
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
      </section>

      <section className="mt-16 rounded-xl border text-card-foreground shadow bg-gray-100 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900">Abonnez-vous à notre newsletter</h3>
        <p className="mt-4 text-gray-700">Recevez nos offres exclusives et dernières nouveautés directement dans votre boîte mail.</p>
        <div className="mt-4 flex justify-center">
          <Input
            type="email"
            placeholder="Entrez votre email"
            className="w-72"
          />
          <Button className="ml-4">
            S&apos;abonner
          </Button>
        </div>
      </section>
      </div>
  );
};

export default ShoeDetailPage;
