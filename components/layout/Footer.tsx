import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Vision', href: '/vision' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/dcp-logo.png"
              alt="DCP Party Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <div>
              <p className="font-display font-bold text-white text-sm leading-tight">
                Hon. Mary Justus Mannabay
              </p>
              <p className="font-body text-gray-400 text-xs mt-0.5">
                Bahati Constituency · Nakuru County · 2027
              </p>
            </div>
          </div>
          <p className="font-body text-gray-400 text-sm leading-relaxed">
            DCP candidate for Bahati. Servant leader. Founder of MannaBay Foundation.
          </p>
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://www.facebook.com/p/Hon-Mary-Justus-Mannabay-100072017820551/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-green-light transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.tiktok.com/@maryjustusmannabay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-green-light transition-colors"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://dcpkenya.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DCP Kenya website"
              className="text-gray-400 hover:text-green-light transition-colors"
            >
              <GlobeIcon />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-orange mb-5">
            Quick Links
          </p>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Get Involved */}
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-orange mb-5">
            Get Involved
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/contact" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                Contact the Campaign
              </Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/p/Hon-Mary-Justus-Mannabay-100072017820551/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gray-400 hover:text-white transition-colors"
              >
                Follow on Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@maryjustusmannabay"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gray-400 hover:text-white transition-colors"
              >
                Follow on TikTok
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-orange mb-5">
            Contact
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-gray-400">
              <PhoneIcon />
              <a href="tel:+254769813793" className="font-body text-sm hover:text-white transition-colors">
                +254 769 813793
              </a>
            </li>
            <li className="flex items-start gap-2 text-gray-400">
              <span className="mt-0.5"><MailIcon /></span>
              <a href="mailto:mannabayfoundation@gmail.com" className="font-body text-sm hover:text-white transition-colors break-all">
                mannabayfoundation@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <PinIcon />
              <span className="font-body text-sm">Bahati Constituency, Nakuru County</span>
            </li>
            <li>
              <a
                href="https://dcpkenya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gray-400 hover:text-white transition-colors"
              >
                dcpkenya.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-gray-500 text-center sm:text-left">
            © 2027 Hon. Mary Justus Mannabay Campaign. Democracy for the Citizens Party (DCP). All rights reserved.
          </p>
          <p className="font-body text-xs text-gray-600">
            <span className="text-orange font-medium">Skiza Wakenya</span> — Listen to Kenyans
          </p>
        </div>
      </div>
    </footer>
  )
}
