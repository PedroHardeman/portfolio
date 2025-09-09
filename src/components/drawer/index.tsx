'use client'

import { Drawer as MUIDrawer } from '@mui/material';
import { useMobileMenu } from '@/hooks';
import {
  StyledLink,
  NavItem,
} from './styles';
import { usePathname } from 'next/navigation';

export default function Drawer() {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu()
  const pathname = usePathname()

  return (
    <MUIDrawer
      open={isMobileMenuOpen}
      onClose={toggleMobileMenu}
      anchor='right'
    >
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
    </MUIDrawer>
  )
}