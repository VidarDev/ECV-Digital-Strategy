'use client'

import { useProfileStore } from "@/store/useProfileStore"
import ProfileResult from "@/components/ProfileResult"
import QuestionDialog from "@/components/QuestionDialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfileSettings() {
  const profile = useProfileStore((state) => state.currentProfile)
  console.log(profile)

  return (
    <div className="space-y-6">
      {profile ? (
        <div className="space-y-6">
          <ProfileResult />
          <div className="flex justify-center">
            <QuestionDialog
              trigger={
                <Button variant="outline">
                  Refaire le test
                </Button>
              }
            />
          </div>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Découvrez votre profil de runner</CardTitle>
            <CardDescription>
              Répondez à quelques questions pour obtenir des recommandations personnalisées.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <QuestionDialog
              trigger={
                <Button>
                  Commencer le test
                </Button>
              }
            />
          </CardContent>
        </Card>
      )}
    </div>
  )
}