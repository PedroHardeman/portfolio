import { useState } from 'react'

export type ScreenType = 'about-me' | 'projects' | 'tech-stack' | 'stopping-game' | ''

export const useNavigation = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('')

  const navigateTo = (screen: ScreenType) => {
    setCurrentScreen(screen)
  }

  const isCurrentScreen = (screen: ScreenType) => {
    return currentScreen === screen
  }

  return {
    currentScreen,
    setCurrentScreen,
    navigateTo,
    isCurrentScreen
  }
}
