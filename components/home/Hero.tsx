'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative bg-charcoal min-h-screen flex items-center pt-[100px]"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0 100%)' }}
    >
      {/* Diagonal geometric overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">

        {/* Left — Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-orange uppercase tracking-[3px] text-[11px] mb-5"
          >
            Democracy for the Citizens (DCP) Party
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-bold text-white mb-6"
            style={{
              fontSize: 'clamp(52px, 6vw, 70px)',
              lineHeight: '1.15',
            }}
          >
            A Leader Who
            <br />
            <span className="text-green-light">Shows Up</span>
            <br />
            for Bahati.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="font-body text-gray-300 mb-8 max-w-lg text-lg leading-relaxed"
          >
            Hon. Mary Justus Mannabay is running for Member of Parliament, Bahati
            Constituency — bringing servant leadership, grassroots action, and the
            MannaBay Foundation&apos;s spirit to Nakuru County.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/vision"
              className="bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-7 py-3.5 hover:bg-green-dark transition-colors duration-200"
            >
              Our Vision
            </Link>
            <Link
              href="/about"
              className="border border-white text-white font-body font-medium uppercase tracking-wider text-sm px-7 py-3.5 hover:bg-white hover:text-charcoal transition-colors duration-200"
            >
              Her Story
            </Link>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative h-[480px] md:h-[580px] w-full"
        >
          <Image
            src="/images/mary-hero.jpg"
            alt="Hon. Mary Justus Mannabay — DCP Candidate for Bahati Constituency, Nakuru County"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-4 left-4 bg-green text-white font-body text-[11px] uppercase tracking-widest px-4 py-2">
            DCP · Bahati 2027
          </div>
        </motion.div>
      </div>
    </section>
  )
}
