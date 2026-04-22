import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ImpactStory() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel light>Leadership in Action</SectionLabel>

            <blockquote className="font-display font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-snug mb-8">
              &ldquo;The loss of George Kimani Kiarie is deeply painful and troubling.
              I had to ensure he was taken home with dignity. This was not charity —
              it was a duty.&rdquo;
            </blockquote>

            <p className="font-body text-orange uppercase tracking-widest text-xs mb-8">
              — Hon. Mary Justus Mannabay
            </p>

            <p className="font-body text-gray-300 text-base leading-7 mb-10 max-w-2xl mx-auto">
              When a Kiamaina family in Bahati could not afford to retrieve their
              son&apos;s body from a Nyahururu mortuary after 94 days, Mary Justus
              Mannabay stepped in — paying the KSh 80,000 mortuary bill, providing a
              coffin, hearse, and post-mortem fees. She did not wait to be asked.
              This is what servant leadership looks like.
            </p>

            <Link
              href="/news"
              className="inline-block font-body text-sm font-medium text-green uppercase tracking-wider hover:text-green-light transition-colors"
            >
              Read More Stories →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
