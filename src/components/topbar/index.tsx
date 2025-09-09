'use client'

import {
  NavContainer,
  NavContent,
  Logo,
  StyledLink,
  NavMenu,
  NavItem,
  MobileMenuButton,
} from './styles';
import { useMobileMenu } from '@/hooks';
import { usePathname } from 'next/navigation';

export default function Topbar() {
  const { toggleMobileMenu } = useMobileMenu()
  const pathname = usePathname()

  return (
    <NavContainer
      variants={{
        hidden: { y: -100, opacity: 0 },
        visible: {
          y: 2,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      <NavContent>
        <StyledLink href="/">
          <Logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PH
          </Logo>
        </StyledLink>
        <NavMenu>
          <StyledLink href="/projects">
            <NavItem
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + 1 * 0.1 }}
              whileHover={{ y: -2 }}
              $isActive={pathname === '/projects'}
            >
              Projects
            </NavItem>
          </StyledLink>
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
