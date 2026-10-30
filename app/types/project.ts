export interface ContributionItem {
  id: string | number
  label?: string
  text: string
}

export interface ContributionSection {
  title: string
  items: ContributionItem[]
}

export interface Project {
  id: number
  url?: string
  image: string
  title: string
  description: string
  sections?: ContributionSection[]
  contributions: ContributionItem[]
  technologies: string[]
  gitHub?: string
  apk?: string
}