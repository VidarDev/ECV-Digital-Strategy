'use client'

import { CheckoutSteps } from "@/components/checkout/CheckoutSteps"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PaymentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Paiement</h1>

        <div className="space-y-6">
          <div className="space-y-4">
            <Label>Méthode de paiement</Label>
            <RadioGroup defaultValue="card">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-2">
                  Carte bancaire
                  <div className="flex gap-2">
                    <Image src="/assets/images/visa.png" alt="Visa" width={32} height={20} />
                    <Image src="/assets/images/mastercard.png" alt="Mastercard" width={32} height={20} />
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex items-center gap-2">
                  PayPal
                  <Image src="/assets/images/paypal.png" alt="PayPal" width={60} height={20} />
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Numéro de carte</Label>
                <Input id="cardNumber" placeholder="4242 4242 4242 4242" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Date d&apos;expiration</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </CardContent>
          </Card>

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
        </div>
      </div>

      <CheckoutSteps />
    </div>
  )
}
