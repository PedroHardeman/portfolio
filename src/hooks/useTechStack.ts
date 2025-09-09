export interface TechCategory {
  id: string
  title: string
  technologies: string[]
  description?: string
}

export const useTechStack = () => {
  const techStack: TechCategory[] = [
    {
      id: '1',
      title: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Styled Components'],
      description: 'Modern frontend technologies for building responsive user interfaces'
    }
  ]

  return {
    techStack
  }
}
