export type Answer = {
  id: number
  text: string
  image?: string
}

export type Question = {
  id: number
  question: string
  answers: Answer[]
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Quel runner êtes-vous ?",
    answers: [
      { id: 1, text: "Novice", image: "/images/default.svg" },
      { id: 2, text: "Intermediaire", image: "/images/default.svg" },
      { id: 3, text: "Avancé", image: "/images/default.svg" },
      { id: 4, text: "Professionnel", image: "/images/default.svg" },
    ],
  },
  {
    id: 2,
    question: "Quelle est votre frequence d'achat ?",
    answers: [
      { id: 1, text: "-1 mois", image: "/images/default.svg" },
      { id: 2, text: "1-3 mois", image: "/images/default.svg" },
      { id: 3, text: "3-6 mois", image: "/images/default.svg" },
      { id: 4, text: "+6 mois", image: "/images/default.svg" },
    ],
  },
  {
    id: 3,
    question: "Que recherchez-vous dans vos paires ?",
    answers: [
      { id: 1, text: "Des paires de qualité", image: "/images/default.svg" },
      { id: 2, text: "Des paires recyclables ", image: "/images/default.svg" },
      { id: 3, text: "Les 2", image: "/images/default.svg" },
      { id: 4, text: "Aucune de ces options", image: "/images/default.svg" },
    ],
  },
]
