import type { Metadata } from 'next'
// import { Poppins } from ''
// import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navbar from '@/components/nav'

export const metadata: Metadata = {
  title: 'Yeabsera',
  description: '',
  // generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style> */}
      </head>
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
