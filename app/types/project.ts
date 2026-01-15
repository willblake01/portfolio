interface Contribution {
  id: number
  text: string
}

export interface Project {
  id: number
  url?: string
  image: string
  title: string
  description: string
  contributions: Contribution[]
  technologies: string[]
  gitHub?: string
  apk?: string
}
