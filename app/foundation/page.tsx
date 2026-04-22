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
    icon: '⚽',
    title: 'Scoring Against Poverty',
    desc: 'A football tournament programme that uses sport to engage and mentor youth, keeping them off the streets and building discipline, teamwork, and resilience.',
    impact: 'Hundreds of young men engaged annually across Bahati wards',
  },
  {
    icon: '🌾',
    title: 'Agricultural Education',
    desc: 'Hands-on training in modern farming techniques, soil management, and agribusiness — equipping youth with practical skills to feed themselves and earn a livelihood.',
    impact: 'Smallholder farmers and youth trained in sustainable agriculture',
  },
  {
    icon: '🎵',
    title: 'Music Mentorship',
    desc: 'Connecting musically gifted youth with professional mentors to develop their talent into a career pathway — recording sessions, performance opportunities, and music business education.',
    impact: 'Young artists given a platform and a future in music',
  },
  {
    icon: '📚',
    title: 'EHOH Education Support',
    desc: 'Tuition assistance and school-access support for underprivileged learners — covering fees, stationery, and exam costs so no child drops out for financial reasons.',
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
                  <div className="text-4xl mb-4">{prog.icon}</div>
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
                <a
                  href="tel:+254769813793"
                  className="text-charcoal hover:text-crimson transition-colors"
                >
                  📞 +254 769 813793
                </a>
                <a
                  href="mailto:mannabayfoundation@gmail.com"
                  className="text-charcoal hover:text-crimson transition-colors"
                >
                  ✉️ mannabayfoundation@gmail.com
                </a>
                <a
                  href="https://www.facebook.com/p/MannaBay-Foundation-61552045125695/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal hover:text-crimson transition-colors"
                >
                  📘 Facebook
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
