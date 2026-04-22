'use client'
import { useState } from 'react'

interface ContactFormProps {
  formType: 'contact' | 'volunteer'
}

const inputClass =
  'w-full border border-border font-body text-sm text-charcoal bg-white px-4 py-3 focus:outline-none focus:border-green transition-colors placeholder:text-muted'

export default function ContactForm({ formType }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    ward: '',
    availability: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', message: '', ward: '', availability: '' })
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green/10 border border-green px-6 py-8 text-center">
        <p className="font-display font-bold text-green text-xl mb-2">
          Message Sent!
        </p>
        <p className="font-body text-gray-700 text-sm">
          {formType === 'volunteer'
            ? 'Thank you for volunteering. We will be in touch with you shortly.'
            : 'Thank you for reaching out. We will respond as soon as possible.'}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 font-body text-sm text-green uppercase tracking-wider hover:text-green-dark transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formType}-name`} className="sr-only">
            Full Name
          </label>
          <input
            id={`${formType}-name`}
            name="name"
            type="text"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${formType}-email`} className="sr-only">
            Email Address
          </label>
          <input
            id={`${formType}-email`}
            name="email"
            type="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${formType}-phone`} className="sr-only">
          Phone Number
        </label>
        <input
          id={`${formType}-phone`}
          name="phone"
          type="tel"
          placeholder="Phone Number (optional)"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {formType === 'volunteer' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ward" className="sr-only">
              Ward
            </label>
            <input
              id="ward"
              name="ward"
              type="text"
              placeholder="Your Ward"
              value={form.ward}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="availability" className="sr-only">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={form.availability}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="">Availability</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Full-time">Full-time</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor={`${formType}-message`} className="sr-only">
          Message
        </label>
        <textarea
          id={`${formType}-message`}
          name="message"
          rows={5}
          placeholder={
            formType === 'volunteer'
              ? 'How would you like to help? *'
              : 'Your message *'
          }
          value={form.message}
          onChange={handleChange}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="font-body text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-green text-white font-body font-medium uppercase tracking-wider text-sm px-7 py-3.5 hover:bg-green-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed self-start"
      >
        {status === 'loading'
          ? 'Sending…'
          : formType === 'volunteer'
          ? 'Submit Volunteer Form'
          : 'Send Message'}
      </button>
    </form>
  )
}
