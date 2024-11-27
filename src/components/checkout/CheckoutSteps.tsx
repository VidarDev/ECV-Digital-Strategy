'use client'

import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

const steps = [
  { title: "Panier", path: "/checkout" },
  { title: "Livraison", path: "/checkout/shipping" },
  { title: "Paiement", path: "/checkout/payment" },
  { title: "Confirmation", path: "/checkout/confirmation" },
]

export function CheckoutSteps() {
  const router = useRouter()
  const pathname = usePathname()

  const currentStepIndex = steps.findIndex(step => step.path === pathname)

  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      router.push(steps[currentStepIndex + 1].path)
    }
  }

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      router.push(steps[currentStepIndex - 1].path)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="container max-w-2xl mx-auto p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.path} className="flex flex-col items-center flex-1">
                <div className="flex items-center w-full">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      index <= currentStepIndex
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-[2px] w-full mx-2 ${
                        index < currentStepIndex ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
                <span className="text-sm mt-2 text-muted-foreground">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={goToPreviousStep}
              disabled={currentStepIndex === 0}
              className="flex-1"
            >
              Précédent
            </Button>
            <Button
              onClick={goToNextStep}
              disabled={currentStepIndex === steps.length - 1}
              className="flex-1"
            >
              {currentStepIndex === steps.length - 2 ? "Confirmer" : "Suivant"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
