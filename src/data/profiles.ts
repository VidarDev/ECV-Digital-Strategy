export type Profile = {
  id: string
  title: string
  description: string
  image?: string
}

export const profiles: Profile[] = [
  {
    id: "1",
    title: "Profil 1",
    description: "Description du profil 1",
    image: "/assets/images/shoe2.jpeg"
  },
  {
    id: "2",
    title: "Profil 2",
    description: "Description du profil 2",
    image: "/assets/images/shoe3.jpeg"
  },
  {
    id: "3",
    title: "Profil 3",
    description: "Description du profil 3",
    image: "/assets/images/shoe4.jpeg"
  },
]
