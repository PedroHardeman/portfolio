'use client'

import Topbar from '../../topbar'
import { PageContainer, SectionTitle, SectionContent } from '../styles'

export default function TechStack() {
  return (
    <>
      <PageContainer>
        <Topbar />
        <SectionTitle>Tech Stack</SectionTitle>
        <SectionContent>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>Frontend</h3>
              <p>React, Next.js, TypeScript, Styled Components</p>
            </div>
            <div className="tech-item">
              <h3>Backend</h3>
              <p>Node.js, Express, Python, Django</p>
            </div>
            <div className="tech-item">
              <h3>Database</h3>
              <p>PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="tech-item">
              <h3>Tools</h3>
              <p>Git, Docker, AWS, CI/CD</p>
            </div>
          </div>
        </SectionContent>
      </PageContainer>
    </>
  )
}
