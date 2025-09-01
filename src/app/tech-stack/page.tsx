'use client'

import { SectionTitle, SectionContent, TechDescription } from './styles'
import { useTechStack } from '@/hooks'

export default function TechStack() {
  const { techStack } = useTechStack()

  return (
    <>
      <SectionTitle>Tech Stack</SectionTitle>
      <SectionContent>
        <div className="tech-grid">
          {techStack.map((category) => (
            <div key={category.id} className="tech-item">
              <h3>{category.title}</h3>
              <p>{category.technologies.join(', ')}</p>
              {category.description && (
                <TechDescription>
                  {category.description}
                </TechDescription>
              )}
            </div>
          ))}
        </div>
      </SectionContent>
    </>
  )
}
