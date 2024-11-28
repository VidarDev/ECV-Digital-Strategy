import { create } from 'zustand'

interface AuthStore {
  isLogged: boolean
  user: {
    email: string
    name: string
  } | null
  login: (email: string, name: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLogged: false,
  user: null,
  login: (email: string, name: string) => set({ isLogged: true, user: { email, name } }),
  logout: () => set({ isLogged: false, user: null }),
}))
