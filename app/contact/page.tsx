import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Get Involved | Hon. Mary Justus Mannabay – Bahati MP 2027',
  description:
    'Get in touch with the Hon. Mary Justus Mannabay campaign or volunteer to support Bahati\'s future.',
}

export default function ContactPage() {
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
            We&apos;d Love to Hear from You
          </p>
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight max-w-xl">
            Get in Touch
          </h1>
          <p className="font-body text-gray-300 text-lg mt-4 max-w-lg">
            Reach out with questions, feedback, or to get involved in the movement
            for Bahati&apos;s future.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection>
            <SectionLabel>Send a Message</SectionLabel>
            <h2 className="font-display font-bold text-crimson text-3xl leading-tight mb-8">
              Contact the Campaign
            </h2>
            <ContactForm formType="contact" />
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.15}>
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="font-display font-bold text-crimson text-3xl leading-tight mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-body font-medium text-charcoal text-sm uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+254769813793"
                    className="font-body text-gray-700 text-base hover:text-crimson transition-colors"
                  >
                    +254 769 813793
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-body font-medium text-charcoal text-sm uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:mannabayfoundation@gmail.com"
                    className="font-body text-gray-700 text-base hover:text-crimson transition-colors"
                  >
                    mannabayfoundation@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-body font-medium text-charcoal text-sm uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="font-body text-gray-700 text-base">
                    Bahati Constituency, Nakuru County, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📘</span>
                <div>
                  <p className="font-body font-medium text-charcoal text-sm uppercase tracking-wide mb-1">
                    Facebook
                  </p>
                  <a
                    href="https://www.facebook.com/p/Hon-Mary-Justus-Mannabay-100072017820551/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-gray-700 text-base hover:text-crimson transition-colors"
                  >
                    Hon. Mary Justus Mannabay
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🎵</span>
                <div>
                  <p className="font-body font-medium text-charcoal text-sm uppercase tracking-wide mb-1">
                    TikTok
                  </p>
                  <a
                    href="https://www.tiktok.com/@maryjustusmannabay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-gray-700 text-base hover:text-crimson transition-colors"
                  >
                    @maryjustusmannabay
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🗳️</span>
                <div>
                  <p className="font-body font-medium text-charcoal text-sm uppercase tracking-wide mb-1">
                    Register with DCP
                  </p>
                  <a
                    href="https://oyaapp.com/dcpkenya/how-to-become-a-dcp-member/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-gray-700 text-base hover:text-crimson transition-colors"
                  >
                    oyaapp.com — Become a DCP Member →
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <SectionLabel>Join the Team</SectionLabel>
                <h2 className="font-display font-bold text-crimson text-5xl leading-tight mb-4">
                  Volunteer for Bahati 2027
                </h2>
                <p className="font-body text-gray-600 text-base leading-7">
                  Be part of the movement. Tell us your ward, your availability,
                  and how you&apos;d like to help.
                </p>
              </div>
              <div className="bg-white border border-border p-8">
                <ContactForm formType="volunteer" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
