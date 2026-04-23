import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function About() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — Photo */}
        <AnimatedSection>
          <div className="relative h-[480px] w-full">
            <Image
              src="/images/mary-about.jpg"
              alt="Hon. Mary Justus Mannabay"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>

        {/* Right — Text */}
        <AnimatedSection delay={0.15}>
          <SectionLabel>About Her</SectionLabel>
          <h2 className="font-display font-bold text-crimson text-5xl md:text-6xl leading-tight mb-6">
            Who She Is
          </h2>
          <div className="space-y-4 mb-8">
            <p className="font-body text-gray-700 text-base leading-7">
              Mary Justus Mannabay is a grassroots leader, founder of the MannaBay
              Foundation, and a servant of the people of Bahati, Nakuru County.
              Her leadership is defined not by words, but by presence.
            </p>
            <p className="font-body text-gray-700 text-base leading-7">
              Guided by DCP&apos;s philosophy &quot;Skiza Wakenya&quot; (Listen to Kenyans), she
              believes every citizen of Bahati deserves to be heard, respected, and
              uplifted. She has already been doing the work before the ballot.
            </p>
            <p className="font-body text-gray-700 text-base leading-7">
              Through the MannaBay Foundation, she empowers youth through sports,
              education, music mentorship, and agricultural programmes.
            </p>
          </div>

          {/* Quote block */}
          <blockquote className="border-l-4 border-green pl-5 py-2">
            <p className="font-display font-bold text-charcoal text-xl italic leading-snug">
              &ldquo;This is not charity. It is a duty.&rdquo;
            </p>
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  )
}
