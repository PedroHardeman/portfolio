'use client'

import Topbar from '../../topbar'
import { PageContainer, SectionTitle, SectionContent } from '../styles'

export default function AboutMe() {
  return (
    <>
      <PageContainer>
        <Topbar />
        <SectionTitle>About Me</SectionTitle>
        <SectionContent>
          <div className="about-content">
            <p>
              {`I'm a passionate full-stack developer with a love for creating beautiful,
              functional, and user-friendly applications. With experience in both frontend
              and backend development, I enjoy bringing ideas to life through clean code
              and intuitive design.`}
            </p>
            <p>
              {`When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.`}
            </p>
          </div>
        </SectionContent>
      </PageContainer>
    </>
  )
}
