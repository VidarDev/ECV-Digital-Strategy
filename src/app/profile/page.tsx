import ProfileSettings from "@/components/ProfileSettings"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Manage your profile information and preferences.",
}

export default function ProfileSettingsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      <div className="max-w-4xl mx-auto">
        <ProfileSettings />
      </div>
    </div>
  )
}
