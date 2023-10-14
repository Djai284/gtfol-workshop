import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rev gtfol',
  description: 'sample app for gtfol workshop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full white">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  )
}
