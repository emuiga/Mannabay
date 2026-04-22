import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message, formType, ward, availability } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const isVolunteer = formType === 'volunteer'

    const subject = isVolunteer
      ? `Volunteer Sign-Up: ${name} — Bahati 2027 Campaign`
      : `Contact Form: ${name} — Mannabay Campaign Site`

    const htmlBody = isVolunteer
      ? `
        <h2>New Volunteer Sign-Up</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Ward:</strong> ${ward || 'Not provided'}</p>
        <p><strong>Availability:</strong> ${availability || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Sent via maryjustusmannabay.co.ke</p>
      `
      : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Sent via maryjustusmannabay.co.ke</p>
      `

    await resend.emails.send({
      from: 'Mannabay Campaign <onboarding@resend.dev>',
      to: 'muigastephen14@gmail.com',
      replyTo: email,
      subject,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
