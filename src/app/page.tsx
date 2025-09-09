'use client'

import Carousel from 'react-material-ui-carousel'
import { SectionContent, SectionParagraph, CarrouselContainer, SectionRecommendation } from './styles'
import { useAboutContent, useRecommendations } from '@/hooks'

export default function Home() {
  const { aboutSections } = useAboutContent()
  const { recommendations } = useRecommendations()

  return (
    <SectionContent>
      {aboutSections.map((section) => (
        <SectionParagraph
          key={section.id}
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      ))}
      <CarrouselContainer>
        <Carousel
          autoPlay={false}
          indicators={false}
          navButtonsAlwaysVisible
          sx={{ overflow: "visible" }}
        >
          {recommendations.map(recommendation => (
            <SectionRecommendation key={recommendation.id}>
              <p>&apos;...{recommendation.content}...&apos;</p>
            </SectionRecommendation>
          ))}
        </Carousel>
      </CarrouselContainer>
    </SectionContent>
  )
}
