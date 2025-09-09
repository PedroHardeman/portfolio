'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

type MobileMenuContextValue = {
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  openMobileMenu: () => void
}

const MobileMenuContext = createContext<MobileMenuContextValue | undefined>(undefined)

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true)
  }, [])

  const value = useMemo<MobileMenuContextValue>(() => ({
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu,
  }), [isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, openMobileMenu])

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export const useMobileMenu = (): MobileMenuContextValue => {
  const ctx = useContext(MobileMenuContext)
  if (!ctx) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider')
  }
  return ctx
}
