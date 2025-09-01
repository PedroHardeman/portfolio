import { useState, useMemo } from 'react'

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link: string
  github?: string
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A portfolio website with the goal to show my skills and projects',
    tags: ['ReactJS', 'TypeScript', 'React-query', 'Framer-notion', 'Styled-components'],
    link: '/',
  },
  {
    id: '2',
    title: 'Pokédex',
    description: 'A simple pokédex to shapen my skills with React-query',
    tags: ['ReactJS', 'Next.js', 'TypeScript', 'Styled-components'],
    link: '/pokemon',
  },
  {
    id: '3',
    title: 'Tattoo',
    description: 'A website for a tattoo artist to show their work, with FAQ, Contact, and Gallery',
    tags: ['ReactJS', 'TypeScript', 'Framer-notion', 'Styled-components'],
    link: '/tattoo',
  },
  {
    id: '4',
    title: 'Stopping game',
    description: 'A mini-game where you have to stop the timer as close to the goal as possible',
    tags: ['ReactJS', 'TypeScript', 'Styled-components'],
    link: '/stopping-game'
  }
]

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>(defaultProjects)
  const [filter, setFilter] = useState<string>('')

  const filteredProjects = useMemo(() => {
    if (!filter) return projects
    return projects.filter(project => 
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.description.toLowerCase().includes(filter.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
    )
  }, [projects, filter])

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString()
    }
    setProjects(prev => [...prev, newProject])
  }

  const removeProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id))
  }

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, ...updates } : project
    ))
  }

  return {
    projects: filteredProjects,
    allProjects: projects,
    filter,
    setFilter,
    addProject,
    removeProject,
    updateProject
  }
}
