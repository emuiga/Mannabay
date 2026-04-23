import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
    img: '/images/mary1.jpg',
    content: [
      'Thousands of Bahati residents spend hours each day walking to distant water points, robbing children of school time and families of dignity. Clean, reliable water is a right, not a privilege.',
      "Mary's plan partners with national and county governments to accelerate water infrastructure: borehole rehabilitation, pipeline extensions, rainwater harvesting, and community kiosks across every ward.",
    ],
  },
  {
    num: '02',
    title: 'Education & Schools',
    img: '/images/foundation-1.jpg',
    content: [
      'Too many bright students in Bahati drop out for lack of fees or crumbling facilities. Mary\'s education agenda covers infrastructure (new classrooms and labs), access (a constituency bursary fund), and teacher support.',
      'Through the MannaBay Foundation\'s EHOH programme, she already provides tuition assistance to learners across Bahati. As MP, this scales into a formal, well-funded constituency programme.',
    ],
  },
  {
    num: '03',
    title: 'Healthcare',
    img: '/images/mary2.jpg',
    content: [
      'Bahati\'s health centres need urgent investment: better equipment, shorter waiting times, and expanded maternal care. Mary will push to upgrade community facilities to Level 3, so residents no longer travel to Nakuru town for basic services.',
      'She will also champion mental health services for youth and families, and bring mobile clinics to remote wards.',
    ],
  },
  {
    num: '04',
    title: 'Road Infrastructure',
    img: '/images/mary-community.jpg',
    content: [
      'Impassable roads in Bahati mean farmers cannot reach markets, students cannot reach schools safely, and businesses cannot grow. Mary will advocate for national and county road funding with clear priority corridors.',
      'Murram roads will be regularly graded, key market routes tarmacked, and pedestrian infrastructure built in for safer movement across the constituency.',
    ],
  },
  {
    num: '05',
    title: 'Youth Empowerment',
    img: '/images/mary3.jpg',
    content: [
      "Bahati's young people are its greatest asset. Mary's youth agenda expands the Scoring Against Poverty football programme, creates skills training centres in carpentry, ICT, and tailoring, and establishes a youth enterprise fund.",
      'Music mentorship, agriculture, and sports become real pathways to livelihood. Every young person in Bahati should have a future here.',
    ],
  },
  {
    num: '06',
    title: 'Small Business Support',
    img: '/images/mary1.jpg',
    content: [
      "Bahati's jua kali artisans, mama mbogas, and smallholder farmers are the backbone of the local economy. Mary will advocate for micro-credit access, business training, and market infrastructure including covered stalls and cold storage.",
      'She will connect Bahati producers to wider supply chains, helping local businesses grow from roadside stalls to sustainable enterprises.',
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
            Six concrete pillars built from years of listening to the people of Bahati.
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
                  <p key={j} className="font-body text-gray-700 text-[17px] leading-[1.8]">
                    {para}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* DCP Alignment */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <SectionLabel light>Aligned with DCP</SectionLabel>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-5">
              Rooted in DCP&apos;s National Manifesto
            </h2>
            <p className="font-body text-gray-400 text-base leading-7 mb-8 max-w-2xl mx-auto">
              Mary&apos;s vision aligns with DCP&apos;s core mandate: devolution of resources,
              grassroots empowerment, and accountability to ordinary Kenyans. Under
              the DCP framework, every MP builds at home, not just votes in Nairobi.
            </p>
            <a
              href="https://dcpkenya.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-7 py-3 hover:bg-green-dark transition-colors"
            >
              Visit DCP Kenya
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <blockquote className="font-display font-bold text-crimson text-3xl md:text-4xl leading-snug max-w-2xl mx-auto mb-10">
              &ldquo;This is not charity. It is a duty.&rdquo;
            </blockquote>
            <Link
              href="/contact"
              className="inline-block bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-8 py-3.5 hover:bg-green-dark transition-colors"
            >
              Get Involved
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
