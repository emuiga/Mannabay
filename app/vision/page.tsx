import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Vision for Bahati 2027 | Hon. Mary Justus Mannabay',
  description:
    'Six pillars of change for Bahati Constituency: clean water, education, healthcare, roads, youth empowerment, and small business support.',
}

const pillars = [
  {
    num: '01',
    title: 'Clean Water Access',
    img: '/images/mary-community.jpg',
    content: [
      'Access to clean, reliable water is a fundamental right — not a privilege. Thousands of Bahati residents, especially in rural wards, spend hours each day walking to distant water points. This robs children of school time, women of productive hours, and families of dignity.',
      'Mary\'s plan is to partner with national and county governments to accelerate water infrastructure projects across Bahati\'s wards. This includes borehole rehabilitation, pipeline extensions, rainwater harvesting systems, and community water kiosks.',
      'Every home and every school in Bahati will have access to clean water within the first parliamentary term. This is not a promise — it is a plan backed by clear budget allocations, community partnerships, and accountability.',
    ],
  },
  {
    num: '02',
    title: 'Education & Schools',
    img: '/images/foundation-1.jpg',
    content: [
      'Education is the most powerful equaliser. Yet in Bahati, too many classrooms are overcrowded, crumbling, or understaffed. Too many bright students drop out not due to lack of ability, but due to lack of funds or facilities.',
      'Mary\'s education agenda has three pillars: infrastructure (new classrooms, libraries, and laboratories), access (a constituency bursary fund for secondary and tertiary students), and quality (supporting teacher welfare and professional development).',
      'Through her MannaBay Foundation\'s EHOH Education Support programme, she has already been providing tuition assistance to learners across Bahati. As MP, she will scale this into a formal, well-funded constituency programme.',
    ],
  },
  {
    num: '03',
    title: 'Healthcare',
    img: '/images/mary-hero.jpg',
    content: [
      'A healthy constituency is a productive constituency. Bahati\'s healthcare infrastructure needs urgent investment: better-equipped health centres, reduced waiting times, and expanded maternal and child health services.',
      'Mary will push for the upgrading of Bahati\'s community health centres to Level 3 facilities, ensuring that residents no longer travel to Nakuru town for basic services. Mobile health clinics will serve remote wards.',
      'She will also champion mental health services — an often-ignored pillar of health — particularly for youth and families facing economic hardship. Health is not just the absence of disease: it is physical, mental, and social wellbeing.',
    ],
  },
  {
    num: '04',
    title: 'Road Infrastructure',
    img: '/images/mary-community.jpg',
    content: [
      'Roads are the arteries of economic growth. In Bahati, impassable roads mean farmers cannot get produce to market, students cannot reach schools safely, and businesses cannot thrive. Every pothole is a lost opportunity.',
      'Mary will use her parliamentary position to advocate for both national government road funding and county infrastructure investment in Bahati. Priority corridors connecting farms to markets will be tarmacked, and murram roads will be maintained and graded regularly.',
      'She also envisions a Bahati where non-motorised transport (footpaths, cycle paths, pedestrian bridges) is built into infrastructure plans — making movement safe and accessible for everyone, not just vehicle owners.',
    ],
  },
  {
    num: '05',
    title: 'Youth Empowerment',
    img: '/images/foundation-1.jpg',
    content: [
      'Bahati\'s greatest asset is its young people. Yet too many are idle, unemployed, or caught up in cycles of despair. Mary has spent years working with Bahati\'s youth through the MannaBay Foundation — and she understands exactly what they need: opportunity, mentorship, and investment.',
      'Her youth agenda includes: expanding the Scoring Against Poverty football programme, creating skills training centres (carpentry, ICT, tailoring, plumbing), and establishing a youth enterprise fund to seed local businesses.',
      'Music mentorship, agriculture, and sports will be formalised as pathways to livelihood — not just hobbies. Every young person in Bahati should be able to say: "There is a future here for me."',
    ],
  },
  {
    num: '06',
    title: 'Small Business Support',
    img: '/images/mary-community.jpg',
    content: [
      'Bahati\'s economy is powered by its jua kali artisans, mama mbogas, small traders, and farmers. These are not small businesses — they are the backbone of the constituency\'s livelihoods. They need support, not just promises.',
      'Mary will advocate for micro-credit facilities, business development training, and market infrastructure — including covered market stalls, cold storage facilities, and digital payment infrastructure for traders.',
      'She will also work to connect Bahati producers to wider supply chains — linking farmers to supermarkets, cooperatives, and export channels. A Bahati business should be able to grow from a roadside stall to a national brand.',
    ],
  },
]

export default function VisionPage() {
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
            A Plan for the People
          </p>
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight max-w-2xl">
            Vision for Bahati 2027
          </h1>
          <p className="font-body text-gray-300 text-lg mt-4 max-w-xl">
            Six concrete pillars — built from listening to Bahati&apos;s people and
            grounded in Mary&apos;s years of grassroots service.
          </p>
        </div>
      </section>

      {/* Pillar Sections */}
      {pillars.map((pillar, i) => (
        <section
          key={pillar.num}
          className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}`}
        >
          <div
            className={`max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
              i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <AnimatedSection>
              <div className="relative h-[380px] w-full">
                <Image
                  src={pillar.img}
                  alt={`Vision pillar: ${pillar.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-green text-white font-body text-xs uppercase tracking-widest px-3 py-1.5">
                  Pillar {pillar.num}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="font-display font-bold text-crimson-light text-5xl mb-3">
                {pillar.num}
              </p>
              <h2 className="font-display font-bold text-crimson text-3xl md:text-4xl leading-tight mb-6">
                {pillar.title}
              </h2>
              <div className="space-y-4">
                {pillar.content.map((para, j) => (
                  <p key={j} className="font-body text-gray-700 text-base leading-7">
                    {para}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* DCP Alignment */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel light>Aligned with DCP</SectionLabel>
              <h2 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight mb-6">
                Built on DCP&apos;s National Manifesto
              </h2>
              <p className="font-body text-gray-300 text-base leading-7 mb-4">
                Mary&apos;s vision for Bahati is not crafted in isolation — it is deeply
                aligned with the Democracy for the Citizens Party&apos;s national manifesto,
                which prioritises devolution of resources, grassroots empowerment, and
                accountability to ordinary Kenyans.
              </p>
              <p className="font-body text-gray-300 text-base leading-7 mb-10">
                Under the DCP framework, every constituency deserves a Member of
                Parliament who does not just vote in Nairobi, but builds at home.
                Mary will be that MP for Bahati.
              </p>
              <a
                href="https://dcpkenya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-8 py-3.5 hover:bg-green-dark transition-colors"
              >
                Learn About DCP Kenya
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <blockquote className="font-display font-bold text-crimson text-3xl md:text-4xl leading-snug max-w-2xl mx-auto mb-10">
              &ldquo;This is not charity — it is a duty.&rdquo;
            </blockquote>
            <a
              href="https://oyaapp.com/dcpkenya/how-to-become-a-dcp-member/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-8 py-3.5 hover:bg-green-dark transition-colors"
            >
              Register with DCP Today
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
