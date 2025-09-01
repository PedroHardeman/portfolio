'use client'

import { NavContainer, NavContent, Logo, NavMenu, NavItem, MobileMenuButton, MobileMenu, MobileNavItem } from './styles';
import { useScroll, useMobileMenu } from '@/hooks';
import { ScreenType } from '@/hooks/useNavigation';

interface TopBarProps {
  setCurrentScreen: (screen: ScreenType) => void
}

export default function Topbar({ setCurrentScreen }: TopBarProps) {
  const scrolled = useScroll(50)
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu()

  return (
    <NavContainer
      $scrolled={scrolled}
      variants={{
        hidden: { y: -100, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      <NavContent>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => setCurrentScreen('')}
        >
          Portfolio
        </Logo>
        <NavMenu>
          <NavItem
            onClick={() => setCurrentScreen('about-me')}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + 0 * 0.1 }}
            whileHover={{ y: -2 }}
          >
            About me
          </NavItem>
          <NavItem
            onClick={() => setCurrentScreen('tech-stack')}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + 1 * 0.1 }}
            whileHover={{ y: -2 }}
          >
            Tech Stack
          </NavItem>
          <NavItem
            onClick={() => setCurrentScreen('projects')}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + 1 * 0.1 }}
            whileHover={{ y: -2 }}
          >
            Projects
          </NavItem>
        </NavMenu>

        <MobileMenuButton
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </MobileMenuButton>
      </NavContent>
    </NavContainer>
  )
}
