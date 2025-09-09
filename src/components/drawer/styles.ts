import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const StyledLink = styled(Link)`
  text-decoration: none;

  @media (max-width: 768px) {
    width: 150px;
    text-align: center;
    padding: 2rem 0 2rem 0;
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
