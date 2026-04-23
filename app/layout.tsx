import type { Metadata } from 'next'
import { DM_Sans, IBM_Plex_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { GoogleTagManagerBody, GoogleTagManagerHead } from '@/components/analytics/google-tag-manager'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { siteConfig } from '@/lib/site'

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-mono',
})
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: '#4e93ca',
  keywords: ['robotics', 'automation', 'AMRs and industrial robots', 'AI', 'manufacturing'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://innotech-systems.com',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${ibmPlexMono.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col" style={{ background: 'var(--it-bg)', color: 'var(--it-text-primary)' }}>
        {/* GTM: noscript first, then loader (env NEXT_PUBLIC_GTM_ID) */}
        <GoogleTagManagerBody />
        <GoogleTagManagerHead />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <div className="h-px w-full shrink-0" style={{ backgroundColor: 'var(--it-border)' }} aria-hidden />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
