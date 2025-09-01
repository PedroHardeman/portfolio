import { useState, useMemo } from 'react'

export interface TechCategory {
  id: string
  title: string
  technologies: string[]
  description?: string
}

const defaultTechStack: TechCategory[] = [
  {
    id: '1',
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Styled Components'],
    description: 'Modern frontend technologies for building responsive user interfaces'
  },
  {
    id: '2',
    title: 'Backend',
    technologies: ['Node.js', 'Express', 'Python', 'Django'],
    description: 'Robust backend solutions for scalable applications'
  },
  {
    id: '3',
    title: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis'],
    description: 'Various database technologies for different use cases'
  },
  {
    id: '4',
    title: 'Tools',
    technologies: ['Git', 'Docker', 'AWS', 'CI/CD'],
    description: 'Development and deployment tools for efficient workflows'
  }
]

export const useTechStack = () => {
  const [techStack, setTechStack] = useState<TechCategory[]>(defaultTechStack)
  const [filter, setFilter] = useState<string>('')

  const filteredTechStack = useMemo(() => {
    if (!filter) return techStack
    return techStack.filter(category => 
      category.title.toLowerCase().includes(filter.toLowerCase()) ||
      category.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase())) ||
      (category.description && category.description.toLowerCase().includes(filter.toLowerCase()))
    )
  }, [techStack, filter])

  const addCategory = (category: Omit<TechCategory, 'id'>) => {
    const newCategory: TechCategory = {
      ...category,
      id: Date.now().toString()
    }
    setTechStack(prev => [...prev, newCategory])
  }

  const removeCategory = (id: string) => {
    setTechStack(prev => prev.filter(category => category.id !== id))
  }

  const updateCategory = (id: string, updates: Partial<TechCategory>) => {
    setTechStack(prev => prev.map(category => 
      category.id === id ? { ...category, ...updates } : category
    ))
  }

  const getAllTechnologies = () => {
    return techStack.flatMap(category => category.technologies)
  }

  return {
    techStack: filteredTechStack,
    allTechStack: techStack,
    filter,
    setFilter,
    addCategory,
    removeCategory,
    updateCategory,
    getAllTechnologies
  }
}
