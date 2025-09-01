import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavContainer = styled(motion.nav)<{ $scrolled: boolean }>`
  background: ${({ $scrolled }) => $scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s ease;
`

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const NavMenu = styled.div`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled(motion.button)`
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding: 8px 0;
  background: none;
  border: none;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    color: #e74c3c;
  }
`

export const NavLink = styled.button<{ $isActive?: boolean }>`
  background: ${({ $isActive }) => $isActive ? 'rgba(0, 0, 0, 0.1)' : 'none'};
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $isActive }) => $isActive ? '#111827' : '#4b5563'};
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #111827;
    background: rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(231, 76, 60, 0.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`

export const MobileMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MobileNavItem = styled(motion.button)`
  color: #1a1a1a;
  text-decoration: none;
  padding: 20px 0;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  transition: color 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #e74c3c;
  }
`