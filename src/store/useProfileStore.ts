import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Answer } from "@/data/questions"
import type { Profile } from "@/data/profiles"
import { profiles } from "@/data/profiles"

type ProfileState = {
  answers: Record<number, Answer>
  currentProfile: Profile | null
  setAnswers: (answers: Record<number, Answer>) => void
  determineProfile: () => void
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      answers: {},
      currentProfile: null,
      setAnswers: (answers) => set({ answers }),
      determineProfile: () => {
        set((state) => {
          const answerValues = Object.values(state.answers)
          
          // Count the frequency of each answer id
          const frequency: Record<number, number> = {}
          answerValues.forEach((answer) => {
            frequency[answer.id] = (frequency[answer.id] || 0) + 1
          })
          
          // Find the most frequent answer id
          let maxFreq = 0
          let mostCommonId = 1
          
          Object.entries(frequency).forEach(([id, freq]) => {
            if (freq > maxFreq) {
              maxFreq = freq
              mostCommonId = Number(id)
            }
          })
          
          // Map answer ids to profiles
          let profileId: string
          if (mostCommonId === 1) {
            profileId = "1"
          } else if (mostCommonId === 2) {
            profileId = "2"
          } else {
            profileId = "3"
          }
          
          // Find the profile in the profiles array
          const profile = profiles.find((p) => p.id === profileId)
          
          return { currentProfile: profile || null }
        })
      },
    }),
    {
      name: "profile-storage",
    }
  )
)
