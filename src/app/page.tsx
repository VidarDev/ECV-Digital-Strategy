'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { cn } from "@/lib/utils";
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface InfoCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  { id: 1, title: "Répondez à un questionnaire", description: "Aidez-nous à trouver la paire parfaite.", icon: "/assets/images/step1.webp" },
  { id: 2, title: "Louez votre paire", description: "Choisissez une paire qui vous convient.", icon: "/assets/images/step2.png" },
  { id: 3, title: "Pratiquez avec confiance", description: "Testez votre paire en toute sérénité.", icon: "/assets/images/step3.webp" },
  { id: 4, title: "Retournez votre paire", description: "Nous nous occupons du reste.", icon: "/assets/images/step4.png" },
  { id: 5, title: "Préservez l’environnement", description: "Contribuez à réduire l’empreinte carbone.", icon: "/assets/images/environment.png" },
];

const infoCards: InfoCard[] = [
  { id: 1, title: "Impact environnemental", description: "Réduisez votre empreinte carbone grâce à notre modèle circulaire.", icon: "/assets/images/environment.png" },
  { id: 2, title: "Économie", description: "Louez à un prix abordable sans compromis sur la qualité.", icon: "/assets/images/savings.png" },
  { id: 3, title: "Flexibilité", description: "Changez de paire selon vos besoins sans tracas.", icon: "/assets/images/flexibility.png" },
];

const carouselImages: string[] = [
  "/assets/images/shoe1.webp",
  "/assets/images/shoe2.jpeg",
  "/assets/images/shoe3.jpeg",
  "/assets/images/shoe4.jpeg",
];

const HomePage: React.FC = () => {
  return (
      <main>
          {/* Hero Section */}
          <section
              className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
              style={{backgroundImage: "url('/assets/images/running.jpg')"}}
          >
              <h1 className="text-5xl font-bold mb-4">Réduisez votre empreinte carbone en courant avec style</h1>
              <p className="text-lg mb-8">La première plateforme de location de chaussures écoresponsable.</p>
              <div className="space-x-4">
                  <Button className="bg-green-600 hover:bg-green-700">Découvrir le concept</Button>
                  <Button variant="outline" className="text-black border-white">
                      Commencer dès maintenant
                  </Button>
              </div>
          </section>

          {/* Comment ça marche Section */}
          <section className="py-16 px-5 bg-gray-50">
              <h2 className="text-3xl font-bold text-center mb-10">Comment ça marche ?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                  {steps.map((step) => (
                      <Card key={step.id} className="p-4 flex flex-col items-center justify-center text-center">
                          <CardHeader className="flex flex-col items-center justify-center">
                              <img src={step.icon} alt={step.title} className="w-16 h-16 mb-4"/>
                              <h3 className="text-xl font-semibold">{step.title}</h3>
                          </CardHeader>
                          <CardContent className="text-center">{step.description}</CardContent>
                      </Card>
                  ))}
              </div>
          </section>


          {/* Pourquoi nous choisir Section */}
          <section className="py-16 px-5 bg-white">
              <h2 className="text-3xl font-bold text-center mb-10">Pourquoi nous choisir ?</h2>
              <div className="grid gap-6 md:grid-cols-3">
                  {infoCards.map((card) => (
                      <Card key={card.id} className="p-4 flex flex-col items-center text-center">
                          <CardHeader className="flex flex-col items-center justify-center">
                              <img src={card.icon} alt={card.title} className="w-16 h-16 mb-4"/>
                              <h3 className="text-xl font-semibold">{card.title}</h3>
                          </CardHeader>
                          <CardContent>{card.description}</CardContent>
                      </Card>
                  ))}
              </div>

          </section>

          {/* Carousel Section */}
          <section className="py-16 bg-gray-50 overflow-hidden">
              <h2 className="text-3xl font-bold text-center mb-10">Découvrez nos modèles</h2>


              <Carousel>
                  <CarouselContent>
                      {carouselImages.map((src, index) => (
                          <CarouselItem key={index} className="flex justify-center items-center basis-1/3">
                              <div
                                  className="relative w-full sm:w-60 md:w-72 lg:w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
                                  <Image
                                      src={src}
                                      alt={`Chaussure ${index + 1}`}
                                      className="object-cover w-full h-72"
                                      width={288}
                                      height={288}
                                      layout="intrinsic"
                                  />
                                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                      <button
                                          className="bg-white text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white border border-black transition duration-300"
                                          onClick={() => alert(`Voir le produit ${index + 1}`)} // Remplacer par un lien réel
                                      >
                                          Voir le produit
                                      </button>


                                  </div>
                              </div>
                          </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious/>
                  <CarouselNext/>
              </Carousel>
          </section>

          {/* Footer */}
          <footer className="py-8 bg-gray-800 text-white text-center">
              <p className="text-sm">© 2024 Location de Chaussures. Tous droits réservés.</p>
          </footer>
      </main>
  );
};

export default HomePage;
