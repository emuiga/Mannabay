import Link from 'next/link'

const items = [
  {
    icon: '🎯',
    title: 'Our Mission',
    desc: 'To build a Bahati where every voice is heard and every family thrives.',
  },
  {
    icon: '👁️',
    title: 'Our Vision',
    desc: 'A Bahati Constituency where opportunity, dignity, and unity thrive for all.',
    featured: true,
  },
  {
    icon: '📋',
    title: 'Register',
    desc: 'Become a DCP member and be part of the movement for change.',
    href: 'https://oyaapp.com/dcpkenya/how-to-become-a-dcp-member/',
    external: true,
  },
  {
    icon: '🤝',
    title: 'Volunteer',
    desc: "Lend your time and passion to help shape Bahati's future with Mary.",
    href: '/contact',
  },
]

export default function QuickLinks() {
  return (
    <section className="bg-crimson-dark">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const card = (
              <div
                className={`px-8 py-10 border-r border-white/10 last:border-r-0 group cursor-pointer transition-colors duration-200 ${
                  item.featured
                    ? 'bg-green'
                    : 'hover:bg-crimson'
                }`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )

            if (item.href) {
              if (item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card}
                  </a>
                )
              }
              return (
                <Link key={item.title} href={item.href}>
                  {card}
                </Link>
              )
            }
            return <div key={item.title}>{card}</div>
          })}
        </div>
      </div>
    </section>
  )
}
