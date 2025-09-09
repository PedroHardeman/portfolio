'use client'

import { usePathname } from 'next/navigation'
import Topbar from '../components/topbar'
import Drawer from '../components/drawer'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideNav = pathname?.startsWith('/tattoo')

  return (
    <>
      {!hideNav && (
        <>
          <Topbar />
          <Drawer />
        </>
      )}
      {children}
    </>
  )
}
