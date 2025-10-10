import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Lucas Murrey - Author, Philosopher, Cultural Critic',
  description: 'Independent scholar and author exploring the intersections of money, power, and human experience in the modern world.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Dr. Lucas Murrey',
    description: 'Independent scholar and author exploring the intersections of money, power, and human experience in the modern world.',
    url: 'https://lucasmurrey.com',
    siteName: 'Dr. Lucas Murrey',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dr. Lucas Murrey',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Lucas Murrey',
    description: 'Independent scholar and author exploring the intersections of money, power, and human experience in the modern world.',
    images: ['/og-image.svg'],
  },
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