import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyCTA from '@/components/layout/StickyCTA'
import SchemaScript from '@/components/schema/SchemaScript'
import { buildLocalBusinessSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/env'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | El The Man — Walsall Handyman',
    default: 'El The Man — Walsall Handyman Services | Can do it? Yes, we can.',
  },
  description: 'Professional handyman services in Walsall and the West Midlands. Painting, carpentry, flooring, tiling, plumbing, emergency repairs and more. Call 07861 203087.',
  keywords: ['handyman Walsall', 'handyman West Midlands', 'property maintenance Walsall', 'general repairs Walsall'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'El The Man',
    url: SITE_URL,
    title: 'El The Man — Walsall Handyman Services',
    description: 'Professional handyman services in Walsall and the West Midlands. One call, we do it all.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El The Man — Walsall Handyman',
    description: 'Professional handyman services in Walsall and the West Midlands.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <head>
        <SchemaScript schema={buildLocalBusinessSchema()} />
      </head>
      <body className="min-h-full flex flex-col pb-16 md:pb-0 bg-[#F8F4EE] text-[#0F1A2E]">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}
