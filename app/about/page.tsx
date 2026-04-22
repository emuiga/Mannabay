import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'About | Hon. Mary Justus Mannabay – Bahati MP 2027',
  description:
    'Learn the full story of Hon. Mary Justus Mannabay — servant leader, founder of MannaBay Foundation, and DCP candidate for Bahati Constituency.',
}

const timeline = [
  {
    year: '2021',
    event: 'Founded MannaBay Foundation',
    detail: 'Established the foundation to empower Bahati\'s boy child through sports, education, and economic opportunity.',
  },
  {
    year: '2022',
    event: 'Launched Scoring Against Poverty',
    detail: 'Football tournament programme to engage and empower youth across Bahati wards.',
  },
  {
    year: '2023',
    event: 'Agricultural & Music Programmes',
    detail: 'Expanded foundation programmes to include agricultural education and music mentorship for rural youth.',
  },
  {
    year: '2024',
    event: 'EHOH Education Support',
    detail: 'Launched tuition and school-access support for underprivileged learners across Bahati Constituency.',
  },
  {
    year: 'Dec 2025',
    event: 'Kiamaina Family — KSh 80,000 Mortuary Bill',
    detail: 'Stepped in to cover mortuary fees, coffin, hearse, and post-mortem costs for a Bahati family in need.',
  },
  {
    year: '2026',
    event: 'DCP Candidacy Announcement',
    detail: 'Formally declared candidacy for the Bahati Constituency parliamentary seat under the Democracy for the Citizens Party.',
  },
]

const values = [
  {
    title: 'Duty',
    icon: '⚖️',
    desc: 'Mary believes public service is a sacred obligation — not a privilege. Every action she takes flows from this conviction.',
  },
  {
    title: 'Dignity',
    icon: '🌟',
    desc: 'Every person in Bahati deserves to be treated with dignity, heard with respect, and supported in their aspirations.',
  },
  {
    title: 'Community',
    icon: '🤝',
    desc: 'Change is made together. Mary is committed to building a Bahati where no ward is left behind and no family is forgotten.',
  },
]

export default function AboutPage() {
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
            About Her
          </p>
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight max-w-2xl">
            Hon. Mary Justus Mannabay
          </h1>
          <p className="font-body text-gray-300 text-lg mt-4 max-w-xl">
            Servant leader. Grassroots champion. Founder of MannaBay Foundation.
            DCP candidate for Bahati Constituency, 2027.
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <div className="relative h-[520px] w-full sticky top-24">
              <Image
                src="/images/mary-community.jpg"
                alt="Hon. Mary Justus Mannabay in the community"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <SectionLabel>Her Story</SectionLabel>
            <h2 className="font-display font-bold text-crimson text-5xl leading-tight mb-6">
              A Life of Service
            </h2>
            <div className="space-y-5 font-body text-gray-700 text-base leading-7">
              <p>
                Mary Justus Mannabay was born and raised in the communities she now
                serves. Her connection to Bahati is not a campaign strategy — it is
                her lived reality. She grew up understanding the everyday struggles of
                families in Nakuru County: the long walks to water points, the children
                who drop out of school for lack of fees, the youth who have talent but
                nowhere to channel it.
              </p>
              <p>
                Rather than waiting for a seat in Parliament to start making a
                difference, Mary chose to act. In 2021, she founded the{' '}
                <strong>MannaBay Foundation</strong> — a grassroots organisation
                dedicated to empowering the forgotten boy child through sports,
                education, music mentorship, and agricultural training. Since its
                founding, the Foundation has touched hundreds of young lives across
                Bahati&apos;s wards.
              </p>
              <p>
                Her leadership style is defined by presence. When a Kiamaina family
                could not afford to retrieve their son&apos;s body from a Nyahururu
                mortuary after 94 days in December 2025, Mary did not write a
                condolence note — she paid the KSh 80,000 bill herself, and arranged
                the coffin, hearse, and post-mortem. &quot;This is not charity,&quot; she
                said. &quot;It is a duty.&quot;
              </p>
              <p>
                Aligned with the Democracy for the Citizens Party&apos;s (DCP) philosophy
                of &quot;Skiza Wakenya&quot; — Listen to Kenyans — Mary has spent years going
                door to door, listening to what Bahati&apos;s people actually need. Her
                six-pillar vision for the constituency (clean water, education,
                healthcare, roads, youth empowerment, and business support) was built
                from those conversations.
              </p>
              <p>
                She is not a politician who discovered Bahati at election time. She
                is a daughter of Bahati — who has been doing the work, quietly and
                consistently, long before the ballot. In 2027, she is asking for the
                mandate to do even more.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-14">
              <SectionLabel>Her Journey</SectionLabel>
              <h2 className="font-display font-bold text-crimson text-5xl md:text-6xl leading-tight">
                Key Milestones
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.07}>
                  <div className="relative flex gap-8 items-start pl-20">
                    {/* Dot */}
                    <div
                      className="absolute left-6 top-1.5 w-4 h-4 bg-green border-2 border-white shadow"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-body text-xs uppercase tracking-widest text-green mb-1">
                        {item.year}
                      </p>
                      <h3 className="font-display font-bold text-charcoal text-lg mb-1">
                        {item.event}
                      </h3>
                      <p className="font-body text-gray-600 text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <SectionLabel>What Drives Her</SectionLabel>
              <h2 className="font-display font-bold text-crimson text-5xl md:text-6xl leading-tight">
                Core Values
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border border-border p-8 h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-display font-bold text-charcoal text-xl mb-3">
                    {v.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DCP Affiliation */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel light>Her Party</SectionLabel>
                <h2 className="font-display font-bold text-white text-4xl leading-tight mb-6">
                  Democracy for the Citizens Party
                </h2>
                <p className="font-body text-gray-300 text-base leading-7 mb-4">
                  Mary Justus Mannabay stands with the Democracy for the Citizens
                  Party (DCP) — a movement built on the philosophy of &quot;Skiza
                  Wakenya&quot;: truly listening to Kenyans and responding with policy that
                  reflects their lived realities.
                </p>
                <p className="font-body text-gray-300 text-base leading-7 mb-8">
                  DCP&apos;s national vision aligns directly with Mary&apos;s own: a Kenya where
                  every constituency is served with dignity, transparency, and genuine
                  commitment to the people. In Bahati, she will carry that vision
                  forward.
                </p>
                <a
                  href="https://dcpkenya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-sm font-medium text-green uppercase tracking-wider hover:text-green-light transition-colors"
                >
                  Visit DCP Kenya →
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 text-center">
                <p className="font-display font-bold text-white text-3xl mb-2">
                  &ldquo;Skiza Wakenya&rdquo;
                </p>
                <p className="font-body text-gray-400 text-sm uppercase tracking-widest mt-2">
                  Listen to Kenyans — DCP Party Philosophy
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
