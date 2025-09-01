'use client'

import { SectionTitle, SectionContent } from './styles'
import { useAboutContent } from '@/hooks'

export default function AboutMe() {
  const { aboutSections } = useAboutContent()

  return (
    <>
      <SectionTitle>About Me</SectionTitle>
      <SectionContent>
        <div className="about-content">
          {aboutSections.map((section) => (
            <p key={section.id}>
              {section.content}
            </p>
          ))}
        </div>
      </SectionContent>
    </>
  )
}
