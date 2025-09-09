export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link: string
  github?: string
}

export const useProjects = () => {
  const projects: Project[] = [
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
      tags: ['ReactJS', 'Next.js', 'TypeScript', 'TanStack Query', 'Styled-components'],
      link: '/pokemon',
    },
    // {
    //   id: '3',
    //   title: 'Tattoo',
    //   description: 'A website for a tattoo artist to show their work, with FAQ, Contact, and Gallery',
    //   tags: ['ReactJS', 'TypeScript', 'Framer-notion', 'Styled-components'],
    //   link: '/tattoo',
    // },
    {
      id: '4',
      title: 'Stopping game',
      description: 'A mini-game where you have to stop the timer as close to the goal as possible',
      tags: ['ReactJS', 'TypeScript', 'Styled-components'],
      link: '/stopping-game'
    }
  ]

  return {
    projects
  }
}
