'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

const questions = [
  {
    id: 1,
    question: "Quel est votre objectif principal ?",
    options: ["Développement personnel", "Croissance professionnelle", "Les deux"]
  },
  {
    id: 2,
    question: "Quelle est votre expérience actuelle ?",
    options: ["Débutant", "Intermédiaire", "Expert"]
  },
  {
    id: 3,
    question: "Combien de temps pouvez-vous consacrer par semaine ?",
    options: ["1-2 heures", "3-5 heures", "6+ heures"]
  }
]

export default function QuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const router = useRouter()
  const isLogged = useAuthStore((state) => state.isLogged)

  if (!isLogged) {
    router.push('/auth')
    return null
  }

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Ici vous pourriez envoyer les réponses à une API
      console.log('Réponses finales:', newAnswers)
      router.push('/')
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Question {currentQuestion + 1} / {questions.length}
          </h2>
          <p className="mt-2 text-center text-xl text-gray-600">
            {question.question}
          </p>
        </div>
        <div className="mt-8 space-y-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
