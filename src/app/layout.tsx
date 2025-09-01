import type { Metadata } from 'next'
import ReactQueryProvider from './ReactQueryProvider'

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
      <body style={{ margin: 0, height: '100vh' }}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
