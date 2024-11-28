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
    { id: 1, name: "Alice", rating: 5, comment: "Excellente chaussure, très confortable et écologique!" },
    { id: 2, name: "Thomas", rating: 4, comment: "Bonne qualité, mais la taille est un peu petite." },
    { id: 3, name: "Marie", rating: 5, comment: "Parfaite pour mes courses longues distances. Très légère!" }
  ],
  faq: [
    { question: "Comment choisir la taille ?", answer: "Consultez notre guide des tailles pour trouver votre taille parfaite." },
    { question: "Puis-je retourner les chaussures ?", answer: "Oui, les retours sont gratuits sous 30 jours." },
    { question: "Les chaussures sont-elles imperméables ?", answer: "Non, elles ne sont pas imperméables mais résistantes à l'humidité." }
  ],
  suggestions: [
    { id: 2, name: "Chaussure Trail Durable", image: "/assets/images/shoe2.webp", rentalPrice: 30 },
    { id: 3, name: "Chaussure Running Recyclable", image: "/assets/images/shoe3.webp", rentalPrice: 28 },
    { id: 4, name: "Chaussure Ville Éco-Responsable", image: "/assets/images/shoe4.webp", rentalPrice: 22 },
  ]
};

const ShoeDetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <main className="py-8 px-4 md:px-16 bg-gray-50">
      <section className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <Image
            src={shoeDetails.image}
            alt={`${shoeDetails.name} Image`}
            width={400}
            height={100}
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{shoeDetails.name}</h1>
          <p className="text-gray-600 text-lg">{shoeDetails.description}</p>
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
          className={`pb-2 ${activeTab === "details" ? "border-b-2 border-green-600" : ""} hover:text-green-600 transition duration-300`}
        >
          Détails
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 ${activeTab === "reviews" ? "border-b-2 border-green-600" : ""} hover:text-green-600 transition duration-300`}
        >
          Avis
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className={`pb-2 ${activeTab === "faq" ? "border-b-2 border-green-600" : ""} hover:text-green-600 transition duration-300`}
        >
          FAQ
        </button>
      </div>

      {activeTab === "details" && (
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Description détaillée</h3>
          <p className="text-lg mt-4 text-gray-700">{shoeDetails.description}</p>
          
          <h3 className="text-xl font-semibold mt-6 text-gray-800">Impact environnemental</h3>
          <div className="p-6 rounded-lg bg-green-50 shadow-xl">
            <table className="w-full table-auto border-collapse mt-4">
              <tbody>
                <tr className="border-b border-gray-200 bg-green-100">
                  <td className="py-3 px-4 text-gray-700 font-semibold">Fabrication</td>
                  <td className="py-3 px-4 text-gray-700 font-semibold">{shoeDetails.carbonImpact.fabrication} kg CO₂e</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Matières premières</td>
                  <td className="py-3 px-4 text-gray-700">{shoeDetails.carbonImpact.rawMaterials} kg CO₂e</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Approvisionnement</td>
                  <td className="py-3 px-4 text-gray-700">{shoeDetails.carbonImpact.supply} kg CO₂e</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Mise en forme</td>
                  <td className="py-3 px-4 text-gray-700">{shoeDetails.carbonImpact.shaping} kg CO₂e</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700">Assemblage et Distribution</td>
                  <td className="py-3 px-4 text-gray-700">{shoeDetails.carbonImpact.assemblyAndDistribution} kg CO₂e</td>
                </tr>
                <tr className="border-b border-gray-200 bg-green-100">
                  <td className="py-3 px-4 text-gray-700 font-semibold">Fin de vie</td>
                  <td className="py-3 px-4 text-gray-700 font-semibold">{shoeDetails.carbonImpact.endOfLife} kg CO₂e</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-6">
              <span className="text-lg font-semibold text-gray-700">Total pour un mois d'utilisation</span>
              <span className="text-lg font-semibold text-gray-800">{shoeDetails.carbonImpact.total} kg CO₂e</span>
            </div>
          </div>
        </section>
      )}

      {activeTab === "reviews" && (
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">Avis des clients</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {shoeDetails.reviews.map((review) => (
              <div key={review.id} className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center space-x-2">
                  <div className="font-semibold text-gray-800">{review.name}</div>
                  <div className="text-yellow-400">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "faq" && (
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900">FAQ</h3>
          <div className="mt-4">
            {shoeDetails.faq.map((item, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800">{item.question}</h4>
                <p className="text-gray-700 mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-900">Suggestions de chaussures</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shoeDetails.suggestions.map((suggestion) => (
            <div key={suggestion.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Image
                src={suggestion.image}
                alt={suggestion.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h4 className="text-xl font-semibold mt-4">{suggestion.name}</h4>
              <p className="text-lg text-gray-700 mt-2">{suggestion.rentalPrice}€ / semaine</p>
              <Button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300">Louer</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-gray-100 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900">Abonnez-vous à notre newsletter</h3>
        <p className="mt-4 text-gray-700">Recevez nos offres exclusives et dernières nouveautés directement dans votre boîte mail.</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Entrez votre email"
            className="px-4 py-2 w-72 border rounded-md"
          />
          <Button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300">
            S'abonner
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ShoeDetailPage;
