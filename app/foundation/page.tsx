import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'MannaBay Foundation | Hon. Mary Justus Mannabay',
  description:
    'MannaBay Foundation empowers the forgotten boy child in Bahati through sports, education, music mentorship, and agricultural programmes.',
}

const programs = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a10 10 0 0 1 7.39 16.64M12 2a10 10 0 0 0-7.39 16.64M8.56 20.84A10 10 0 0 0 12 22a10 10 0 0 0 3.44-.84M12 7v5l3 3"/>
      </svg>
    ),
    title: 'Scoring Against Poverty',
    desc: 'A football tournament programme that uses sport to engage and mentor youth, building discipline, teamwork, and resilience across Bahati wards.',
    impact: 'Hundreds of young men engaged annually across Bahati wards',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 0 1 0 20"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10"/>
        <path d="M2 12h20M12 2v20"/>
        <path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
      </svg>
    ),
    title: 'Agricultural Education',
    desc: 'Hands-on training in modern farming techniques, soil management, and agribusiness, equipping youth with practical skills for sustainable livelihoods.',
    impact: 'Smallholder farmers and youth trained in sustainable agriculture',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    title: 'Music Mentorship',
    desc: 'Connecting musically gifted youth with professional mentors, offering recording sessions, performance opportunities, and music business education.',
    impact: 'Young artists given a platform and a future in music',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    title: 'EHOH Education Support',
    desc: 'Tuition assistance and school-access support for underprivileged learners, covering fees, stationery, and exam costs so no child drops out for financial reasons.',
    impact: 'Learners supported across Bahati primary and secondary schools',
  },
]

const stats = [
  { label: 'Founded', value: '2021', desc: 'By Hon. Mary Justus Mannabay' },
  {
    label: 'Focus',
    value: 'Boy Child',
    desc: 'The forgotten generation, empowered at last',
  },
  { label: 'Motto', value: 'Not charity.', desc: 'A duty to Bahati\'s young people' },
]

export default function FoundationPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-charcoal pt-[116px] pb-28"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="font-body text-orange uppercase tracking-[3px] text-[11px] mb-4">
            Community Impact
          </p>
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight max-w-2xl">
            MannaBay Foundation
          </h1>
          <p className="font-body text-gray-300 text-lg mt-4 max-w-xl">
            Empowering Kenya&apos;s future — one young person at a time. Based in Bahati,
            reaching hearts across Nakuru County.
          </p>
        </div>
      </section>

      {/* Mission & Origin */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative h-[440px] w-full">
              <Image
                src="/images/foundation-1.jpg"
                alt="MannaBay Foundation community programme"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display font-bold text-crimson text-5xl leading-tight mb-6">
              Born from a Calling
            </h2>
            <div className="space-y-4 font-body text-gray-700 text-base leading-7">
              <p>
                The MannaBay Foundation was founded in 2021 by Hon. Mary Justus
                Mannabay with a singular mission: to empower the forgotten boy child
                in Bahati Constituency.
              </p>
              <p>
                While the world rightly focuses on girl-child empowerment, Mary
                witnessed a parallel crisis — young men in Bahati without direction,
                without mentorship, and without hope. Unemployment, poverty, and
                lack of opportunity were pushing them toward despair. She decided
                to act.
              </p>
              <p>
                The Foundation operates on the belief that every young person in
                Bahati has potential — they simply need the right environment, the
                right mentors, and the right opportunities. Through sport, education,
                music, and agriculture, MannaBay Foundation creates those environments.
              </p>
              <p>
                Mary is both the founder and the face of the Foundation — personally
                involved in every programme, every community visit, and every young
                person it touches.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-14">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-display font-bold text-crimson text-5xl md:text-6xl leading-tight">
                Our Programmes
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <AnimatedSection key={prog.title} delay={i * 0.1}>
                <div className="bg-white border border-border p-8 h-full">
                  <div className="text-green mb-4">{prog.icon}</div>
                  <h3 className="font-display font-bold text-charcoal text-xl mb-3">
                    {prog.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
                    {prog.desc}
                  </p>
                  <p className="font-body text-xs text-green font-medium uppercase tracking-wide border-t border-border pt-4">
                    {prog.impact}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <SectionLabel light>Our Impact</SectionLabel>
              <h2 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight">
                Why It Matters
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="border border-white/10 p-8 text-center">
                  <p className="font-body text-xs uppercase tracking-widest text-gray-400 mb-3">
                    {s.label}
                  </p>
                  <p className="font-display font-bold text-green-light text-4xl mb-3">
                    {s.value}
                  </p>
                  <p className="font-body text-gray-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="font-display font-bold text-crimson text-5xl leading-tight mb-6">
                Partner with MannaBay Foundation
              </h2>
              <p className="font-body text-gray-600 text-base leading-7 mb-8">
                Want to partner, donate, or volunteer with the MannaBay Foundation?
                We welcome all who share our belief that Bahati&apos;s young people
                deserve better.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-body text-base">
                <a href="tel:+254769813793" className="flex items-center gap-2 text-charcoal hover:text-crimson transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +254 769 813793
                </a>
                <a href="mailto:mannabayfoundation@gmail.com" className="flex items-center gap-2 text-charcoal hover:text-crimson transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  mannabayfoundation@gmail.com
                </a>
                <a href="https://www.facebook.com/p/MannaBay-Foundation-61552045125695/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-charcoal hover:text-crimson transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
