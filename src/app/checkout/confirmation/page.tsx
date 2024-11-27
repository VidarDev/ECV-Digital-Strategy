'use client'

import { CheckoutSteps } from "@/components/checkout/CheckoutSteps"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold">Commande confirmée</h1>
        <p className="text-muted-foreground">
          Merci pour votre commande ! Vous recevrez un email de confirmation.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="font-semibold">Détails de la commande</h2>
            <p className="text-sm text-muted-foreground">Numéro de commande: #123456</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Adresse de livraison</h3>
            <p className="text-sm text-muted-foreground">
              John Doe<br />
              123 rue Example<br />
              75000 Paris
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Mode de livraison</h3>
            <p className="text-sm text-muted-foreground">
              Standard (3-5 jours ouvrés)
            </p>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Sous-total</span>
              <span>89.99 €</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Livraison</span>
              <span>Gratuit</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>89.99 €</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button asChild>
          <Link href="/">
            Retour à l&apos;accueil
          </Link>
        </Button>
      </div>

      <CheckoutSteps />
    </div>
  )
}
