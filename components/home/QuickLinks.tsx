import Link from 'next/link'

const MissionIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const VisionIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const CommunityIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const VolunteerIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const items = [
  {
    Icon: MissionIcon,
    title: 'Our Mission',
    desc: 'To build a Bahati where every voice is heard and every family thrives.',
  },
  {
    Icon: VisionIcon,
    title: 'Our Vision',
    desc: 'A Bahati Constituency where opportunity, dignity, and unity thrive for all.',
    href: '/vision',
  },
  {
    Icon: CommunityIcon,
    title: 'Community',
    desc: "Working alongside Bahati's people — ward by ward, family by family.",
    href: '/about',
  },
  {
    Icon: VolunteerIcon,
    title: 'Volunteer',
    desc: "Lend your time and passion to help shape Bahati's future with Mary.",
    href: '/contact',
  },
]

export default function QuickLinks() {
  return (
    <section className="bg-crimson-dark">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-white/10">
          {items.map(({ Icon, title, desc, href }) => {
            const inner = (
              <div className="group px-8 py-10 border-r border-white/10 last:border-r-0 transition-colors duration-200 hover:bg-green h-full">
                <div className="text-white/50 group-hover:text-white mb-5 transition-colors duration-200">
                  <Icon />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug">
                  {title}
                </h3>
                <p className="font-body text-white/65 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-200">
                  {desc}
                </p>
              </div>
            )

            if (href) {
              return (
                <Link key={title} href={href} className="block">
                  {inner}
                </Link>
              )
            }
            return <div key={title}>{inner}</div>
          })}
        </div>
      </div>
    </section>
  )
}
