import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-offwhite min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-6 max-w-lg">
        <p className="font-display font-bold text-crimson text-8xl mb-4">404</p>
        <h1 className="font-display font-bold text-charcoal text-3xl mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-gray-600 text-base leading-7 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage
          to explore Hon. Mary Justus Mannabay&apos;s campaign.
        </p>
        <Link
          href="/"
          className="inline-block bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-8 py-3.5 hover:bg-green-dark transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  )
}
