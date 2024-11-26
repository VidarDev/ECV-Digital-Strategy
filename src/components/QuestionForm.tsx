"use client"

import { useState } from "react"
import { questions, type Answer } from "@/data/questions"
import { cn } from "@/utils/cn"
import Image from "next/image"
import { useProfileStore } from "@/store/useProfileStore"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "motion/react"

interface QuestionFormProps {
  onComplete?: () => void
}

export default function QuestionForm({ onComplete }: QuestionFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const { setAnswers, determineProfile } = useProfileStore()
  const [localAnswers, setLocalAnswers] = useState<Record<number, Answer>>({})

  const currentQuestion = questions[currentStep]

  const handleAnswer = (answer: Answer) => {
    const newAnswers = {
      ...localAnswers,
      [currentQuestion.id]: answer,
    }
    setLocalAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setAnswers(newAnswers)
      determineProfile()
      onComplete?.()
    }
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <div className="flex flex-col items-center justify-center px-4 max-w-4xl mx-auto">
      {/* Progress */}
      <div className="w-full mb-8 space-y-2">
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-muted-foreground text-center">
          Question {currentStep + 1} sur {questions.length}
        </p>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {currentQuestion.question}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Answers Grid */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {currentQuestion.answers.map((answer) => (
          <Card
            key={answer.id}
            className={cn(
              "cursor-pointer transition-all hover:border-primary",
              "group"
            )}
            onClick={() => handleAnswer(answer)}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-4">
              {answer.image && (
                <div className="relative w-16 h-16">
                  <Image
                    src={answer.image}
                    alt={answer.text}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <span className="font-medium text-foreground">{answer.text}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      {currentStep > 0 && (
        <Button
          variant="ghost"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="mt-8"
        >
          Retour à la question précédente
        </Button>
      )}
    </div>
  )
}
