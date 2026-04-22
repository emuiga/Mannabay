'use client'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    num: '01',
    title: 'Clean Water Access',
    desc: 'Reliable water infrastructure for every home and school in Bahati.',
  },
  {
    num: '02',
    title: 'Education & Schools',
    desc: 'Infrastructure, bursaries, and quality learning for all students.',
  },
  {
    num: '03',
    title: 'Healthcare',
    desc: 'Accessible clinics and health support across every ward in Bahati.',
  },
  {
    num: '04',
    title: 'Road Infrastructure',
    desc: 'Connected roads that drive trade, mobility, and growth.',
  },
  {
    num: '05',
    title: 'Youth Empowerment',
    desc: 'Sports, skills training, and opportunity for the next generation.',
  },
  {
    num: '06',
    title: 'Small Business Support',
    desc: 'Backing local entrepreneurs and creating sustainable local jobs.',
  },
]

export default function VisionPillars() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <SectionLabel>Vision for Bahati</SectionLabel>
          <h2 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight mb-4">
            Six Pillars of Change
          </h2>
          <p className="font-body text-gray-400 text-base max-w-xl mx-auto">
            A comprehensive plan to transform Bahati Constituency — built from listening to
            its people.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-charcoal border border-white/10 px-8 py-9 hover:border-l-4 hover:border-l-green group transition-all duration-200"
            >
              <p className="font-display font-bold text-crimson-light text-3xl mb-4 group-hover:text-green transition-colors">
                {pillar.num}
              </p>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                {pillar.title}
              </h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/vision"
            className="inline-block font-body text-sm font-medium text-green uppercase tracking-wider hover:text-green-light transition-colors"
          >
            Explore the Full Vision →
          </Link>
        </div>
      </div>
    </section>
  )
}
