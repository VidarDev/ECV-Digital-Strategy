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
}

export default function QuestionDialog({ trigger }: QuestionDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader></DialogHeader>
        <QuestionForm onComplete={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
