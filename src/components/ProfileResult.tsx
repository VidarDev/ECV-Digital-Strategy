"use client"

import { useProfileStore } from "@/store/useProfileStore"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ProfileResult() {
  const profile = useProfileStore((state) => state.currentProfile)

  if (!profile) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="overflow-hidden">
        <CardHeader className="text-center space-y-4 pb-2">
          <div className="flex items-center justify-center space-x-2">
            <Badge variant="secondary" className="text-sm">
              Votre profil
            </Badge>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              {profile.title}
            </h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {profile.image && (
            <div className="relative w-full h-48 mx-auto overflow-hidden rounded-lg">
              <Image
                src={profile.image}
                alt={profile.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="space-y-4">
            <Separator />
            <div className="prose prose-sm max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {profile.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
