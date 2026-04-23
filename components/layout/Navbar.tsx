'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Vision', href: '/vision' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-border'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-[88px] md:h-[100px]">

        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/dcp-logo.png"
            alt="Democracy for the Citizens Party — Skiza Wakenya"
            width={82}
            height={82}
            priority
            className="object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-display font-bold text-crimson text-sm leading-tight tracking-wide">
              Hon. Mary Justus Mannabay
            </p>
            <p className="font-body text-muted text-xs mt-0.5">
              Bahati Constituency · 2027
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-xs uppercase tracking-wider transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-crimson font-medium'
                  : 'text-charcoal hover:text-crimson'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-green text-white font-body font-medium text-xs px-5 py-2.5 hover:bg-green-dark transition-colors duration-200 uppercase tracking-wider"
          >
            Get Involved
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-charcoal"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-border px-6 py-6 flex flex-col gap-5"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm uppercase tracking-wider ${
                  pathname === link.href
                    ? 'text-crimson font-medium'
                    : 'text-charcoal hover:text-crimson'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-green text-white font-body font-medium text-sm px-5 py-3 text-center uppercase tracking-wider"
            >
              Get Involved
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
