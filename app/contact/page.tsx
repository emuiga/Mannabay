import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Get Involved | Hon. Mary Justus Mannabay – Bahati MP 2027',
  description:
    "Get in touch with the Hon. Mary Justus Mannabay campaign or volunteer to support Bahati's future.",
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

      {/* Contact Form + Info */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Form */}
          <AnimatedSection>
            <SectionLabel>Send a Message</SectionLabel>
            <h2 className="font-display font-bold text-crimson text-3xl leading-tight mb-8">
              Contact the Campaign
            </h2>
            <ContactForm formType="contact" />
          </AnimatedSection>

          {/* Right: Contact Info */}
          <AnimatedSection delay={0.15}>
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="font-display font-bold text-crimson text-3xl leading-tight mb-8">
              Contact Information
            </h2>

            <div className="space-y-5 mb-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-9 h-9 bg-green/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal text-xs uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+254769813793" className="font-body text-gray-700 hover:text-crimson transition-colors">
                    +254 769 813793
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-9 h-9 bg-green/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal text-xs uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:mannabayfoundation@gmail.com" className="font-body text-gray-700 hover:text-crimson transition-colors">
                    mannabayfoundation@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-9 h-9 bg-green/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="font-body text-gray-700">Bahati Constituency, Nakuru County, Kenya</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-9 h-9 bg-green/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal text-xs uppercase tracking-widest mb-1">Facebook</p>
                  <a
                    href="https://www.facebook.com/p/Hon-Mary-Justus-Mannabay-100072017820551/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-gray-700 hover:text-crimson transition-colors"
                  >
                    Hon. Mary Justus Mannabay
                  </a>
                </div>
              </div>

              {/* TikTok */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-9 h-9 bg-green/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal text-xs uppercase tracking-widest mb-1">TikTok</p>
                  <a
                    href="https://www.tiktok.com/@maryjustusmannabay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-gray-700 hover:text-crimson transition-colors"
                  >
                    @maryjustusmannabay
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="mb-10">
              <SectionLabel>Where We Are</SectionLabel>
              <h2 className="font-display font-bold text-crimson text-5xl leading-tight">
                Bahati Constituency
              </h2>
              <p className="font-body text-gray-600 mt-3 max-w-lg">
                Bahati Constituency is located in Nakuru County, Rift Valley, Kenya.
                It is divided into five wards: Bahati, Dundori, Lanet/Umoja, Kabatini,
                and Kiamaina.
              </p>
            </div>

            <div className="w-full overflow-hidden border border-border" style={{ height: '460px' }}>
              <iframe
                title="Bahati Constituency, Nakuru County — Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127542.50299438!2d36.1843!3d-0.2271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182972f80f8c5c0f%3A0x9c7d8a3d24a5b5e0!2sBahati%2C%20Nakuru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <SectionLabel>Join the Team</SectionLabel>
                <h2 className="font-display font-bold text-crimson text-5xl leading-tight mb-4">
                  Volunteer for Bahati 2027
                </h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  Be part of the movement. Tell us your ward, your availability,
                  and how you&apos;d like to help.
                </p>
              </div>
              <div className="bg-offwhite border border-border p-8">
                <ContactForm formType="volunteer" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
