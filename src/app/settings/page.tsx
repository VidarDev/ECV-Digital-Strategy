import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
          <p className="text-gray-600">
            Manage your account preferences and settings
          </p>
        </div>
      </div>
    </div>
  )
}
