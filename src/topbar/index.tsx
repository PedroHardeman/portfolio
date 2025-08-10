'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TopbarContainer, Nav, NavLink, MobileMenuButton, MobileMenu } from './styles'

export default function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <TopbarContainer>
      <Nav>
        <div className="logo">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>Portfolio</h2>
          </Link>
        </div>
        
        <div className="desktop-nav">
          <Link href="/tech-stack" style={{ textDecoration: 'none' }}>
            <NavLink $isActive={pathname === '/tech-stack'}>
              Tech Stack
            </NavLink>
          </Link>
          <Link href="/about-me" style={{ textDecoration: 'none' }}>
            <NavLink $isActive={pathname === '/about-me'}>
              About Me
            </NavLink>
          </Link>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <NavLink $isActive={pathname === '/projects'}>
              Projects
            </NavLink>
          </Link>
        </div>

        <MobileMenuButton onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </Nav>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <Link href="/tech-stack" style={{ textDecoration: 'none' }}>
          <NavLink $isActive={pathname === '/tech-stack'} onClick={closeMobileMenu}>
            Tech Stack
          </NavLink>
        </Link>
        <Link href="/about-me" style={{ textDecoration: 'none' }}>
          <NavLink $isActive={pathname === '/about-me'} onClick={closeMobileMenu}>
            About Me
          </NavLink>
        </Link>
        <Link href="/projects" style={{ textDecoration: 'none' }}>
          <NavLink $isActive={pathname === '/projects'} onClick={closeMobileMenu}>
            Projects
          </NavLink>
        </Link>
      </MobileMenu>
    </TopbarContainer>
  )
}
