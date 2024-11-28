"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import QuestionForm from "./QuestionForm"
import { useState } from "react"

interface QuestionDialogProps {
  trigger: React.ReactNode
  initialOpen?: boolean
  isRegistration?: boolean
}

export default function QuestionDialog({ trigger, initialOpen = false, isRegistration = false }: QuestionDialogProps) {
  const [open, setOpen] = useState(initialOpen)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader></DialogHeader>
        <QuestionForm onComplete={() => setOpen(false)} isRegistration={isRegistration} />
      </DialogContent>
    </Dialog>
  )
}
