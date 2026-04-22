import type { Metadata } from 'next'
import { Poppins, Nunito_Sans } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

// Poppins — headings (bold, clean geometric sans-serif — matches DCP website style)
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
})

// Nunito Sans — body text
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hon. Mary Justus Mannabay – Bahati MP 2027',
  description:
    'Join Hon. Mary Justus Mannabay — DCP candidate for Bahati Constituency, Nakuru County — in building a stronger, more empowered Bahati for 2027.',
  keywords: [
    'Mary Justus Mannabay',
    'Bahati MP 2027',
    'DCP Kenya',
    'MannaBay Foundation',
    'Nakuru County',
    'Bahati Constituency',
  ],
  openGraph: {
    title: 'Hon. Mary Justus Mannabay – Bahati MP 2027',
    description:
      'Servant leader. Founder of MannaBay Foundation. DCP candidate for Bahati.',
    url: 'https://maryjustusmannabay.co.ke',
    siteName: 'Hon. Mary Justus Mannabay',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hon. Mary Justus Mannabay – Bahati MP 2027',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunitoSans.variable}`}>
      <body className="bg-offwhite font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-green focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
