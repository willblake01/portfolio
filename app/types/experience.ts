interface Responsibility {
  id: number
  text: string
}

export interface Job {
  id: number
  title: string
  team: string
  image: string
  responsibilities: Responsibility[]
  technologies: string[]
}
