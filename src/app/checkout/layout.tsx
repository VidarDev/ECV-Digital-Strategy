import { Card } from "@/components/ui/card"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container py-10 pb-40 mx-auto">
      <div className="mx-auto w-full">
        <Card className="p-6 w-full">
          {children}
        </Card>
      </div>
    </div>
  )
}
