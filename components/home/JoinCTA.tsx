import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function JoinCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Get Involved</SectionLabel>
            <h2 className="font-display font-bold text-crimson text-5xl md:text-6xl leading-tight mb-5">
              Be Part of the Movement.
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-10">
              The future of Bahati is built together. Whether you volunteer, spread
              the word, or simply show up — every action counts. Join Bahati residents
              who believe in servant leadership and real change for 2027.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-8 py-3.5 hover:bg-green-dark transition-colors duration-200"
              >
                Volunteer with Us
              </Link>
              <a
                href="https://www.facebook.com/p/Hon-Mary-Justus-Mannabay-100072017820551/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-crimson text-crimson font-body font-medium uppercase tracking-wider text-sm px-8 py-3.5 hover:bg-crimson hover:text-white transition-colors duration-200"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
