export interface ContributionItem {
  id: string | number
  label?: string | undefined
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
  sections?: ContributionSection[] | undefined
  contributions?: ContributionItem[] | undefined
  technologies: string[]
  gitHub?: string
  apk?: string
}