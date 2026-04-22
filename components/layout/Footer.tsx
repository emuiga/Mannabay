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
              width={44}
              height={44}
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
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/p/Hon-Mary-Justus-Mannabay-100072017820551/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-green-light transition-colors text-sm font-body"
            >
              FB
            </a>
            <a
              href="https://www.tiktok.com/@maryjustusmannabay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-green-light transition-colors text-sm font-body"
            >
              TT
            </a>
            <a
              href="https://dcpkenya.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DCP Kenya"
              className="text-gray-400 hover:text-green-light transition-colors text-sm font-body"
            >
              DCP
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
              <a
                href="https://oyaapp.com/dcpkenya/how-to-become-a-dcp-member/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gray-400 hover:text-white transition-colors"
              >
                Register with DCP
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-body text-sm text-gray-400 hover:text-white transition-colors"
              >
                Volunteer
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
            <li className="font-body text-sm text-gray-400">
              📞{' '}
              <a href="tel:+254769813793" className="hover:text-white transition-colors">
                +254 769 813793
              </a>
            </li>
            <li className="font-body text-sm text-gray-400">
              ✉️{' '}
              <a
                href="mailto:mannabayfoundation@gmail.com"
                className="hover:text-white transition-colors"
              >
                mannabayfoundation@gmail.com
              </a>
            </li>
            <li className="font-body text-sm text-gray-400">
              📍 Bahati Constituency, Nakuru County
            </li>
            <li>
              <a
                href="https://dcpkenya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-gray-400 hover:text-white transition-colors"
              >
                dcpkenya.com ↗
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
