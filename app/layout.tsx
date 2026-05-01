import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Box } from '@mui/material'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})
const fingerPaint = localFont({
  src: './fonts/FingerPaint-Regular.ttf',
  variable: '--font-finger-paint',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iamwillblake.com'),
  title: {
    default: 'Will Blake — Portfolio',
    template: '%s | Will Blake',
  },
  description:
    'Portfolio of Will Blake — full-stack software engineer. React/Next.js, TypeScript, real-time UI, 3D (R3F), and performance-focused engineering.',
  keywords: [
    'Will Blake',
    'Software Engineer',
    'Full Stack',
    'Frontend',
    'React',
    'Next.js',
    'TypeScript',
    'Three.js',
    'React Three Fiber',
    'Web Performance',
    'Core Web Vitals',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.iamwillblake.com',
    title: 'Will Blake — Portfolio',
    description:
      'Full-stack software engineer. React/Next.js, TypeScript, real-time UI, 3D, and performance-focused engineering.',
    siteName: 'Will Blake',
    images: [
      {
        url: '/og.png', // put /public/og.png (1200x630) when ready
        width: 1200,
        height: 630,
        alt: 'Will Blake — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will Blake — Portfolio',
    description:
      'Full-stack software engineer. React/Next.js, TypeScript, real-time UI, 3D, and performance-focused engineering.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang='en'>
    <head>
      <meta name='robots' content='noai' />
      <title>Will Blake's Portfolio</title>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} ${fingerPaint.variable} antialiased`}>
        <AppRouterCacheProvider>
            <Box component='main' sx={{ pb: 12 }}>
              {children}
            </Box>
          </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
  </html>
)

export default RootLayout
