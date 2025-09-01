import { useState } from 'react'

export interface AboutSection {
  id: string
  title?: string
  content: string
  order: number
}

const defaultAboutContent: AboutSection[] = [
  {
    id: '1',
    content: `I'm a passionate full-stack developer with a love for creating beautiful,
              functional, and user-friendly applications. With experience in both frontend
              and backend development, I enjoy bringing ideas to life through clean code
              and intuitive design.`,
    order: 1
  },
  {
    id: '2',
    content: `When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.`,
    order: 2
  }
]

export const useAboutContent = () => {
  const [aboutSections, setAboutSections] = useState<AboutSection[]>(defaultAboutContent)

  const sortedSections = aboutSections.sort((a, b) => a.order - b.order)

  const addSection = (section: Omit<AboutSection, 'id'>) => {
    const newSection: AboutSection = {
      ...section,
      id: Date.now().toString()
    }
    setAboutSections(prev => [...prev, newSection])
  }

  const removeSection = (id: string) => {
    setAboutSections(prev => prev.filter(section => section.id !== id))
  }

  const updateSection = (id: string, updates: Partial<AboutSection>) => {
    setAboutSections(prev => prev.map(section => 
      section.id === id ? { ...section, ...updates } : section
    ))
  }

  const reorderSections = (fromIndex: number, toIndex: number) => {
    setAboutSections(prev => {
      const newSections = [...prev]
      const [movedSection] = newSections.splice(fromIndex, 1)
      newSections.splice(toIndex, 0, movedSection)
      
      // Update order values
      return newSections.map((section, index) => ({
        ...section,
        order: index + 1
      }))
    })
  }

  return {
    aboutSections: sortedSections,
    addSection,
    removeSection,
    updateSection,
    reorderSections
  }
}
