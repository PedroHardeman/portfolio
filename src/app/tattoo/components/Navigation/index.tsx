'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NavContainer, NavContent, Logo, NavMenu, NavItem, MobileMenuButton, MobileMenu, MobileNavItem } from './styles';

interface NavigationProps {
  onMenuClick: (screen: string) => void;
}

export default function Navigation({ onMenuClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuClick = (screen: string) => {
    onMenuClick(screen);
    closeMobileMenu();
  };

  const menuItems = [
    { id: "info", label: "Info" },
    { id: "faq", label: "FAQ" },
    { id: "shop", label: "Shop" },
    { id: "gallery", label: "Gallery" }
  ];

  return (
    <NavContainer
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
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <NavContent>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ISRAEL CELLI
        </Logo>

        <NavMenu>
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              onClick={() => handleMenuClick(item.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </NavItem>
          ))}
        </NavMenu>

        <MobileMenuButton
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </MobileMenuButton>
      </NavContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3, ease: "easeOut" }
              },
              exit: {
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.2, ease: "easeIn" }
              }
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {menuItems.map((item, index) => (
              <MobileNavItem
                key={index}
                onClick={() => handleMenuClick(item.id)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </MobileNavItem>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
}
