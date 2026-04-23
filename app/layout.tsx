import type { Metadata } from 'next'
import { Poppins, Nunito_Sans } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
})

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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
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
