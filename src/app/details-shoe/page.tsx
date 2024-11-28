'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const shoeDetails = {
  id: 1,
  name: "Chaussure de Course Eco-Friendly",
  description:
    "Une chaussure révolutionnaire conçue pour allier performance et respect de l’environnement. Fabriquée à partir de matériaux recyclés, elle offre un confort exceptionnel pour les coureurs de tous niveaux.",
  image: "/assets/images/shoe1.webp",
  rentalPrice: 25,
  sizes: ["38", "40", "42", "44"],
  material: "Matériaux recyclés à 100%",
  durability: "Testée pour une durabilité de 500 km",
  sustainability: "Réduction de l'empreinte carbone de 50%",
  returnPolicy: "Retour gratuit sous 30 jours",
  careInstructions: "Nettoyez à la main avec un chiffon humide. Ne pas laver en machine.",
  suggestedShoes: [
    {
      id: 2,
      name: "Chaussure Running X",
      description: "Idéale pour les courses en extérieur.",
      rentalPrice: 22,
      rating: 4,
      image: "/assets/images/shoe2.webp",
    },
    {
      id: 3,
      name: "Chaussure Trail Z",
      description: "Conçue pour les sentiers de montagne.",
      rentalPrice: 28,
      rating: 5,
      image: "/assets/images/shoe3.webp",
    },
    {
      id: 4,
      name: "Chaussure Urban Vibe",
      description: "Stylée et performante en ville.",
      rentalPrice: 30,
      rating: 3,
      image: "/assets/images/shoe4.webp",
    },
    {
      id: 5,
      name: "Chaussure Comfy Runner",
      description: "Pour un confort optimal lors de vos courses quotidiennes.",
      rentalPrice: 26,
      rating: 4,
      image: "/assets/images/shoe5.webp",
    },
  ],
};

const ShoeDetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Merci pour votre inscription à notre newsletter!");
      setEmail("");
    } else {
      alert("Veuillez entrer une adresse e-mail valide.");
    }
  };

  const reviews = [
    {
      name: "Samantha D.",
      rating: 5,
      comment: "J'adore cette chaussure ! Confort exceptionnel et design très moderne.",
      date: "14 août 2023",
    },
    {
      name: "Ethan R.",
      rating: 4,
      comment: "Très bonne chaussure, mais la couleur pourrait être améliorée.",
      date: "16 août 2023",
    },
    {
      name: "Alex M.",
      rating: 5,
      comment: "Elle dépasse mes attentes ! Parfaite pour les courses longues.",
      date: "15 août 2023",
    },
    {
      name: "Olivia P.",
      rating: 4,
      comment: "Bon confort, mais j'aurais aimé plus de choix de couleurs.",
      date: "17 août 2023",
    },
  ];

  return (
    <main className="py-8 px-4 md:px-16 bg-gray-50">
      <section className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <Image
            src={shoeDetails.image}
            alt={`${shoeDetails.name} Image`}
            width={400}
            height={100}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{shoeDetails.name}</h1>
          <p className="text-gray-700 text-lg">{shoeDetails.description}</p>
          <p className="text-lg font-semibold text-gray-800">
            Prix de location : <span className="text-green-600">{shoeDetails.rentalPrice}€ / semaine</span>
          </p>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Tailles disponibles :</h3>
            <ul className="flex space-x-2 mt-2">
              {shoeDetails.sizes.map((size) => (
                <li
                  key={size}
                  className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-800 shadow-md"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white mt-4 py-3 rounded-lg shadow-md transition duration-300">
            Louer cette paire
          </Button>
        </div>
      </section>
      <div className="mt-8 border-b-2 flex space-x-6 text-lg font-semibold text-gray-800">
        <button
          onClick={() => setActiveTab("details")}
          className={`pb-2 ${activeTab === "details" ? "border-b-2 border-black" : ""} hover:text-black transition duration-300`}
        >
          Détails
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 ${activeTab === "reviews" ? "border-b-2 border-black" : ""} hover:text-black transition duration-300`}
        >
          Avis
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className={`pb-2 ${activeTab === "faq" ? "border-b-2 border-black" : ""} hover:text-black transition duration-300`}
        >
          FAQ
        </button>
      </div>
      {activeTab === "details" && (
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Description détaillée</h3>
          <p className="text-lg mt-4 text-gray-700">{shoeDetails.description}</p>
          <h3 className="text-xl font-semibold mt-6 text-gray-800">Matériaux et Durabilité</h3>
          <p className="text-lg text-gray-700">{shoeDetails.material}</p>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Matériaux :</h3>
            <p className="text-gray-700">{shoeDetails.material}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Durabilité :</h3>
            <p className="text-gray-700">{shoeDetails.durability}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Engagement environnemental :</h3>
            <p className="text-gray-700">{shoeDetails.sustainability}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Politique de retour :</h3>
            <p className="text-gray-700">{shoeDetails.returnPolicy}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Instructions d’entretien :</h3>
            <p className="text-gray-700">{shoeDetails.careInstructions}</p>
          </div>
        </section>
      )}
      {activeTab === "reviews" && (
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Avis des clients</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="p-6 bg-white border rounded-lg shadow-md">
                <div className="flex items-center space-x-2">
                  <div className="font-semibold text-gray-800">{review.name}</div>
                  <div className="text-yellow-400">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>
                <p className="text-sm text-gray-500 mt-2">{review.date}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {activeTab === "faq" && (
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Questions fréquentes</h3>
          <div className="mt-4 space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Comment puis-je louer cette chaussure ?</h4>
              <p className="text-gray-700">Il vous suffit de cliquer sur le bouton "Louer cette paire" et de suivre les instructions pour compléter votre réservation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Puis-je retourner la chaussure après l'avoir louée ?</h4>
              <p className="text-gray-700">Oui, vous pouvez retourner la chaussure gratuitement sous 30 jours.</p>
            </div>
          </div>
        </section>
      )}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Chaussures similaires</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {shoeDetails.suggestedShoes.map((shoe) => (
            <div key={shoe.id} className="bg-white rounded-lg shadow-lg p-6">
              <Image
                src={shoe.image}
                alt={shoe.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{shoe.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{shoe.description}</p>
              <p className="font-semibold text-gray-700 mt-2">{shoe.rentalPrice}€ / semaine</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Inscrivez-vous à notre newsletter</h2>
          <p className="text-lg mb-6">Recevez les dernières nouveautés et offres spéciales directement dans votre boîte de réception.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex justify-center items-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Votre email"
              className="p-3 rounded-l-lg w-2/3 text-gray-800"
              required
            />
            <button type="submit" className="bg-green-600 text-white p-3 rounded-r-lg hover:bg-green-700 transition duration-300">
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ShoeDetailPage;
