import styled from 'styled-components'

export const TopbarContainer = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  .logo {
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #111827;
      margin: 0;
    }
  }

  .desktop-nav {
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
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

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: #4b5563;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover span {
    background: #111827;
  }
`

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  transition: all 0.3s ease;
  pointer-events: ${({ isOpen }) => isOpen ? 'auto' : 'none'};

  @media (max-width: 768px) {
    display: flex;
  }

  ${NavLink} {
    text-align: left;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    &:last-child {
      border-bottom: none;
    }
  }
`
