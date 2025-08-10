'use client'

import Topbar from '../../topbar'
import { PageContainer, SectionTitle, SectionContent } from '../styles'

export default function Projects() {
  return (
    <>
      <PageContainer>
        <Topbar />
        <SectionTitle>Projects</SectionTitle>
        <SectionContent>
          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p>A full-stack e-commerce solution with React, Node.js, and PostgreSQL</p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Task Management App</h3>
              <p>A collaborative task management application with real-time updates</p>
              <div className="project-tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Socket.io</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>A modern portfolio website built with Next.js and styled-components</p>
              <div className="project-tags">
                <span>Next.js</span>
                <span>Styled Components</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </SectionContent>
      </PageContainer>
    </>
  )
}
