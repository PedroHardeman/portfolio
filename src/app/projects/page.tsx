'use client'

import { SectionTitle, SectionContent, ProjectsGrid, ProjectCard, ProjectTags } from './styles'
import { useProjects } from '@/hooks'

export default function Projects() {
  const { projects } = useProjects()

  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <SectionContent>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} onClick={() => {
              if (project.link) {
                window.location.href = `/${project.link}`
              }
            }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ProjectTags>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </ProjectTags>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </SectionContent>
    </>
  )
}
