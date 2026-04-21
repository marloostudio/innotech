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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
