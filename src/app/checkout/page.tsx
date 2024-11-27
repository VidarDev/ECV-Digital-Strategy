'use client'

import { CheckoutSteps } from "@/components/checkout/CheckoutSteps"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CartPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Votre panier</h1>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="relative w-24 h-24">
                  <Image
                    src="/assets/images/shoe2.jpeg"
                    alt="Product"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Nike Air Max</h3>
                  <p className="text-sm text-muted-foreground">Taille: 42</p>
                  <p className="text-sm text-muted-foreground">Quantité: 1</p>
                  <p className="font-semibold mt-2">89.99 €</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between py-4 border-t">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">89.99 €</span>
        </div>
      </div>

      <CheckoutSteps />
    </div>
  )
}
