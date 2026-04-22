import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'

const programs = [
  'Scoring Against Poverty',
  'Agricultural Education',
  'Music Mentorship',
  'EHOH Education Support',
]

const stats = [
  { label: 'Boy Child Focus', value: 'Youth First', desc: 'Empowering young men through sports, skills & mentorship' },
  { label: 'Community', value: 'Bahati', desc: 'Every initiative rooted in the heart of the constituency' },
  { label: 'Our Commitment', value: 'Duty', desc: 'Not charity — a sacred duty to the people of Bahati' },
]

export default function Foundation() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <AnimatedSection>
          <SectionLabel>MannaBay Foundation</SectionLabel>
          <h2 className="font-display font-bold text-crimson text-5xl md:text-6xl leading-tight mb-6">
            Empowering the
            <br />
            Forgotten Boy Child
          </h2>
          <p className="font-body text-gray-700 text-base leading-7 mb-4">
            Founded by Hon. Mary Justus Mannabay, the MannaBay Foundation exists to
            break the cycle of poverty and marginalisation facing Kenya&apos;s young men
            — through sport, education, music, and economic opportunity.
          </p>
          <p className="font-body text-gray-700 text-base leading-7 mb-8">
            Every programme is designed with one belief at its core: that no child in
            Bahati should be left behind. From the football pitch to the classroom, from
            the farm to the recording studio — we meet young people where they are.
          </p>

          {/* Programs */}
          <div className="mb-8">
            <p className="font-body text-xs uppercase tracking-widest text-muted mb-3">
              Our Programmes
            </p>
            <div className="flex flex-wrap gap-2">
              {programs.map((p) => (
                <span
                  key={p}
                  className="bg-green text-white font-body text-xs px-4 py-1.5 uppercase tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-border pt-6">
            <p className="font-body text-sm text-muted">
              📞{' '}
              <a
                href="tel:+254769813793"
                className="text-charcoal hover:text-crimson transition-colors"
              >
                +254 769 813793
              </a>
              {'  ·  '}
              <a
                href="mailto:mannabayfoundation@gmail.com"
                className="text-charcoal hover:text-crimson transition-colors"
              >
                mannabayfoundation@gmail.com
              </a>
            </p>
          </div>
        </AnimatedSection>

        {/* Right — Stats + Image */}
        <AnimatedSection delay={0.15}>
          <div className="relative h-56 w-full mb-8">
            <Image
              src="/images/foundation-1.jpg"
              alt="MannaBay Foundation community programme in Bahati"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="border border-border px-6 py-5">
                <p className="font-body text-xs uppercase tracking-widest text-muted mb-1">
                  {s.label}
                </p>
                <p className="font-display font-bold text-crimson text-2xl mb-1">
                  {s.value}
                </p>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/foundation"
              className="font-body text-sm font-medium text-green uppercase tracking-wider hover:text-green-dark transition-colors"
            >
              Learn More About the Foundation →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
