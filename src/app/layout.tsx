import type { Metadata } from 'next'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { MobileMenuProvider } from '@/hooks'
import AppShell from './AppShell'

export const metadata: Metadata = {
  title: 'Pedro Hardeman',
  description: 'Portfolio and playground',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/favicon-16x16.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        minHeight: '100dvh',
        background: 'linear-gradient(to bottom right,#eff6ff,#e0ffe0)',
        fontFamily: 'sans-serif'
      }}>
        <ReactQueryProvider>
          <MobileMenuProvider>
            <AppShell>
              {children}
            </AppShell>
          </MobileMenuProvider>
        </ReactQueryProvider>
      </body>
    </html >
  )
}
