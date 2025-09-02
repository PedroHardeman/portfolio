import type { Metadata } from 'next'
import ReactQueryProvider from './ReactQueryProvider'
import { Body } from './styles'

export const metadata: Metadata = {
  title: 'Pedro Hardeman',
  description: 'Portfolio and playground',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </Body>
    </html>
  )
}
