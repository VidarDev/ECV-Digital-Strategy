'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { shoes } from "@/data/products";
import Link from "next/link";

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
    <main className="bg-white">
      <section className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center">
        <Image
          src="/assets/images/running.jpg"
          alt="Coureur en train de courir"
          layout="fill"
          objectFit="cover"
          className="absolute w-full h-full"
        />
        <h1 className="text-5xl font-bold z-10 mb-4">Réduisez votre empreinte carbone en courant avec style</h1>
        <p className="text-lg z-10 mb-8">La première plateforme de location de chaussures écoresponsable.</p>
        <div className="space-x-4 z-10">
          <Button className="bg-green-600 hover:bg-green-700">Découvrir le concept</Button>
          <Button variant="outline" className="text-black border-white">
            Commencer dès maintenant
          </Button>
        </div>
      </section>

      <section className="py-16 px-5 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Comment ça marche ?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
          <Card key={step.id} 
          className="p-4 flex flex-col items-center justify-center text-center shadow-md"
        >
          <CardHeader className="mb-4 flex justify-center items-center">
            <Image src={step.icon} alt={step.title} width={24} height={24} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">{step.title}</h3>
          </CardHeader>
          <CardContent>
          {step.description}
          </CardContent>
        </Card>
                    
                  ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Pourquoi nous choisir ?</h2>
        <div className="grid gap-6 md:grid-cols-3">
        {infoCards.map((card) => (
                      <Card key={card.id} className="p-4 flex flex-col items-center justify-center text-center shadow-md">
                          <CardHeader className="mb-4 flex justify-center items-center">
                              <Image src={card.icon} alt={card.title} width={24} height={24} className="w-16 h-16 mb-4"/>
                              <h3 className="text-xl font-semibold">{card.title}</h3>
                          </CardHeader>
                          <CardContent>{card.description}</CardContent>
                      </Card>
                  ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Choisissez votre abonnement</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Card
            className="p-6 flex flex-col items-center text-center shadow-md w-full max-w-sm"
          >
            <CardHeader className="mb-4">
              <h3 className="text-2xl font-bold text-green-600">Novice</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>✔ 2 paires par mois</li>
                <li>✔ 10% de réduction sur les paires</li>
                <li>✔ Assistance standard</li>
              </ul>
              <Button className="mt-6 bg-green-600 hover:bg-green-700">Choisir</Button>
            </CardContent>
          </Card>

          <Card
            className="p-6 flex flex-col items-center text-center shadow-md w-full max-w-sm"
          >
            <CardHeader className="mb-4">
              <h3 className="text-2xl font-bold text-blue-600">Intermédiaire</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>✔ 5 paires par mois</li>
                <li>✔ 20% de réduction sur les paires</li>
                <li>✔ Accès prioritaire aux nouveautés</li>
              </ul>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Choisir</Button>
            </CardContent>
          </Card>

          <Card
            className="p-6 flex flex-col items-center text-center shadow-md w-full max-w-sm"
          >
            <CardHeader className="mb-4">
              <h3 className="text-2xl font-bold text-purple-600">Pro</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>✔ Paires illimitées</li>
                <li>✔ 30% de réduction sur les paires</li>
                <li>✔ Personnalisation avancée</li>
                <li>✔ Assistance premium 24/7</li>
              </ul>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700">Choisir</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-10">Découvrez nos modèles</h2>
        <Carousel>
          <CarouselContent>
            {carouselImages.map((src, index) => (
              <CarouselItem key={index} className="flex justify-center items-center basis-1/4">
                 <Card className="overflow-hidden w-full">
                                    <CardContent className="p-0">
                                        <div className="aspect-square relative">
                                        <Image
                                            src={src}
                                            alt={`Chaussure ${index + 1}`}
                                            className="object-cover w-full h-72"
                                            width={288}
                                            height={288}
                                            layout="intrinsic"
                                          />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-4 flex-col items-start gap-2">
                                        <div>
                                            <h3 className="font-semibold">{shoes[index].name}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {shoes[index].brand}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <span className="font-semibold">{shoes[index].price}€ / semaine</span>
                                            <Link href='/details-shoe'>
                                            <Button variant="outline" size="sm">
                                                Voir plus
                                            </Button>
                                            </Link>
                                        </div>
                                    </CardFooter>
                                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      </main>
  );
};

export default HomePage;
