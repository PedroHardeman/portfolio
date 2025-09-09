'use client'

import {
  SectionContent,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ProjectTags
} from './styles'
import { useProjects } from '@/hooks'
import Link from 'next/link'

export default function Projects() {
  const { projects } = useProjects()

  return (
    <SectionContent>
      <ProjectsGrid>
        {projects.map((project) => (
          <Link key={project.id} href={project.link}>
            <ProjectCard>
              <ProjectTitle>
                {project.title}
              </ProjectTitle>
              <ProjectDescription>
                {project.description}
              </ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </ProjectTags>
            </ProjectCard>
          </Link>
        ))}
      </ProjectsGrid>
    </SectionContent>
  )
}
