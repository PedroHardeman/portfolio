'use client'

import React from 'react';
import Topbar from './topbar'
import { MainContainer, ContentWrapper, Title, Subtitle } from './styles'
import AboutMe from './about-me/page'
import Projects from './projects/page'
import TechStack from './tech-stack/page'
import { useNavigation } from '@/hooks'

export default function Home() {
  const { currentScreen, navigateTo } = useNavigation()

  const renderScreenContent = (screen: string) => {
    switch (screen) {
      case 'about-me':
        return <AboutMe />
      case 'projects':
        return <Projects />
      case 'tech-stack':
        return <TechStack />
      default:
        return (
          <>
            <Title>Hello there!</Title>
            <Subtitle>Please hire me</Subtitle>
          </>
        )
    }
  }

  return (
    <MainContainer>
      <Topbar setCurrentScreen={navigateTo} />
      <ContentWrapper>
        {renderScreenContent(currentScreen)}
      </ContentWrapper>
    </MainContainer>
  )
}
