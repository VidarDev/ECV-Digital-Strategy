import ProfileSettings from "@/components/ProfileSettings"
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Manage your profile information and preferences.",
}

export default function ProfileSettingsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
<section>
        <h2 className="text-3xl font-bold tracking-tight mt-12 mx-auto w-full text-center">Votre impact environnemental</h2>
        <p className="text-muted-foreground mx-auto w-full text-center">
          Découvrez votre contribution à la réduction de l&apos;empreinte carbone grâce à la location.
        </p>
        <div className="mt-6 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Économie Carbone</CardTitle>
              <CardDescription>
                Par rapport à l&apos;achat traditionnel
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/assets/images/environment.png"
                  alt="Économie carbone"
                  width={128}
                  height={128}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="text-5xl font-bold text-green-600">-45%</div>
                <p className="text-sm text-muted-foreground mt-2">
                  d&apos;émissions de CO2 en moyenne par rapport à l&apos;achat de chaussures neuves
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
      <h2 className="text-3xl font-bold tracking-tight mt-12 mx-auto w-full text-center">Votre profil utilisateur</h2>
        <p className="text-muted-foreground mx-auto w-full text-center">
        </p>
      <div className="max-w-4xl mx-auto mt-6">
        <ProfileSettings />
      </div>
      </section>

      
    </div>
  )
}
