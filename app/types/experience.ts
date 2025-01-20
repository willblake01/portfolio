interface Responsibility {
  id: number
  text: string
}

export interface Job {
  id: number
  image: string
  team: string
  responsibilities: Responsibility[]
}
