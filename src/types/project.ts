export type Project = {
  id: string
  name: string
  category: 'Web' | 'Backend' | 'Mobile'
  tagline: string
  description: string
  stack: string[]
  color: string
  url: string
  features: string[]
}
