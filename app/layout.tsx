import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Lucas Murrey - Author, Philosopher, Cultural Critic',
  description: 'Independent scholar and author exploring the intersections of money, power, and human experience in the modern world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}