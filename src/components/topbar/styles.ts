import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const NavContainer = styled(motion.nav)`
  padding: 20px 0;
  transition: all 0.3s ease;
`

export const NavContent = styled.div`
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
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

export const StyledLink = styled(Link)`
  text-decoration: none;

  @media (max-width: 768px) {
    width: 250px;
  }
`

export const NavMenu = styled.div`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled(motion.button)<{ $isActive?: boolean }>`
  color: ${({ $isActive }) => $isActive ? 'rgb(148, 143, 143)' : '#1a1a1a'};
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
    width: ${({ $isActive }) => $isActive ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(135deg,rgb(148, 143, 143), rgb(189, 185, 185));
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    color: rgb(148, 143, 143);
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