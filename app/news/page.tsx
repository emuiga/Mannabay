import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'News & Updates | Hon. Mary Justus Mannabay – Bahati MP 2027',
  description:
    'Latest news, impact stories, and updates from Hon. Mary Justus Mannabay and the MannaBay Foundation.',
}

const featuredStory = {
  title: 'Mannabay Pays KSh 80,000 Mortuary Bill for Kiamaina Family',
  date: 'December 2025',
  excerpt:
    'When a Kiamaina family in Bahati could not afford to retrieve their son\'s body from a Nyahururu mortuary after 94 days, Hon. Mary Justus Mannabay stepped in — covering the full mortuary bill, coffin, hearse, and post-mortem fees. "This is not charity — it is a duty," she said.',
  img: '/images/mary-community.jpg',
}

const newsItems = [
  {
    title: 'Hon. Mannabay Eyes Bahati Parliamentary Seat for 2027',
    date: 'October 2025',
    excerpt:
      'Grassroots leader and MannaBay Foundation founder Hon. Mary Justus Mannabay has formally declared her candidacy for the Bahati Constituency parliamentary seat under the Democracy for the Citizens Party (DCP) ahead of the 2027 General Elections.',
    img: '/images/mary-hero.jpg',
  },
  {
    title: 'MannaBay Foundation Launches Scoring Against Poverty Tournament',
    date: '2024',
    excerpt:
      'The annual Scoring Against Poverty football tournament returned with its biggest edition yet — engaging hundreds of young men across Bahati wards in a programme designed to use sport as a ladder out of poverty.',
    img: '/images/foundation-1.jpg',
  },
  {
    title: 'EHOH Education Support: Keeping Bahati\'s Children in School',
    date: '2024',
    excerpt:
      'The MannaBay Foundation\'s EHOH programme expanded its reach in 2024, providing tuition fees, stationery, and exam support to learners across Bahati who would otherwise have dropped out of school due to financial hardship.',
    img: '/images/mary-community.jpg',
  },
]

export default function NewsPage() {
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
            Stay Informed
          </p>
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight max-w-xl">
            News & Updates
          </h1>
          <p className="font-body text-gray-300 text-lg mt-4 max-w-lg">
            Stories of impact, leadership in action, and updates from the
            campaign trail and the MannaBay Foundation.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <SectionLabel>Featured Story</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[380px] w-full">
                <Image
                  src={featuredStory.img}
                  alt={featuredStory.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-green text-white font-body text-[11px] uppercase tracking-widest px-3 py-1.5">
                  Featured
                </div>
              </div>
              <div>
                <p className="font-body text-xs text-muted uppercase tracking-widest mb-3">
                  {featuredStory.date}
                </p>
                <h2 className="font-display font-bold text-crimson text-3xl md:text-4xl leading-tight mb-5">
                  {featuredStory.title}
                </h2>
                <p className="font-body text-gray-700 text-base leading-7 mb-6">
                  {featuredStory.excerpt}
                </p>
                <blockquote className="border-l-4 border-green pl-5 py-2">
                  <p className="font-display font-bold text-charcoal text-lg italic">
                    &ldquo;This is not charity — it is a duty.&rdquo;
                  </p>
                  <p className="font-body text-muted text-sm mt-1">
                    — Hon. Mary Justus Mannabay
                  </p>
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="mb-12">
              <SectionLabel>More Stories</SectionLabel>
              <h2 className="font-display font-bold text-crimson text-5xl leading-tight">
                Latest Updates
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <article className="bg-white border border-border flex flex-col h-full">
                  <div className="relative h-52 w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="font-body text-xs text-muted uppercase tracking-widest mb-2">
                      {item.date}
                    </p>
                    <h3 className="font-display font-bold text-charcoal text-lg leading-snug mb-3 flex-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">
                      {item.excerpt}
                    </p>
                    <Link
                      href="/contact"
                      className="font-body text-sm font-medium text-green uppercase tracking-wider hover:text-green-dark transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <p className="font-body text-gray-300 text-base mb-6">
            Follow Hon. Mary Justus Mannabay for real-time updates and stories from Bahati.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/p/Hon-Mary-Justus-Mannabay-100072017820551/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-7 py-3 hover:bg-green-dark transition-colors"
            >
              Follow on Facebook
            </a>
            <a
              href="https://www.tiktok.com/@maryjustusmannabay"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-body font-medium uppercase tracking-wider text-sm px-7 py-3 hover:bg-white hover:text-charcoal transition-colors"
            >
              Follow on TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
