import { useState } from 'react'
import { CONTACT_INFOS } from '../data'
import { useInView } from '../hooks/useInView'

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function ContactSection() {
  const { ref, inView } = useInView()
  const [form, setForm]       = useState(INITIAL_FORM)
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    /*
     * 🔌 Sambungkan ke layanan pengiriman email:
     *
     * Formspree:
     *   await fetch('https://formspree.io/f/YOUR_ID', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(form),
     *   })
     *
     * EmailJS:
     *   await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
     */
    await new Promise((r) => setTimeout(r, 1000)) // ← hapus ini setelah integrasi

    setLoading(false)
    setSent(true)
  }

  const fade = () =>
    `transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

  return (
    <section id="contact" className="bg-cream-50 py-32 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cream-100 opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div ref={ref} className="grid md:grid-cols-2 gap-20 items-start">

          {/* Info */}
          <div>
            <p className={`${fade()} text-gold text-sm tracking-[0.3em] uppercase mb-4`}
              style={{ transitionDelay: '0ms' }}>
              — Let's Connect
            </p>
            <h2 className={`${fade()} font-serif text-4xl md:text-5xl font-light text-ink mb-6`}
              style={{ transitionDelay: '100ms' }}>
              Get In <em className="font-semibold not-italic">Touch</em>
            </h2>
            <p className={`${fade()} text-ink-muted leading-relaxed mb-12`}
              style={{ transitionDelay: '200ms' }}>
              Have a project in mind or just want to say hello? I'd love to
              hear from you. Let's create something great together.
            </p>

            <div className={`${fade()} space-y-6`} style={{ transitionDelay: '300ms' }}>
              {CONTACT_INFOS.map((item) => (
                <div key={item.label} className="flex items-start gap-6">
                  <span className="text-xs tracking-[0.2em] uppercase text-gold mt-0.5 w-16 flex-shrink-0">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`${fade()}`} style={{ transitionDelay: '200ms' }}>
            {sent ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                <FloatingInput
                  id="name" name="name" type="text"
                  label="Your Name" value={form.name}
                  onChange={handleChange} required
                />

                <FloatingInput
                  id="email" name="email" type="email"
                  label="Email Address" value={form.email}
                  onChange={handleChange} required
                />

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="message" name="message" rows={4}
                    required placeholder=" "
                    value={form.message} onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-cream-400 focus:border-gold outline-none py-3 text-ink text-sm resize-none transition-colors duration-300 placeholder-transparent"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-3 text-ink-hint text-sm tracking-wider transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-ink text-cream-50 text-sm tracking-[0.2em] uppercase py-4 mt-4 hover:bg-gold disabled:opacity-60 transition-colors duration-300"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingInput({ id, name, type, label, value, onChange, required }) {
  return (
    <div className="relative">
      <input
        id={id} name={name} type={type}
        required={required} placeholder=" "
        value={value} onChange={onChange}
        className="peer w-full bg-transparent border-b border-cream-400 focus:border-gold outline-none py-3 text-ink text-sm transition-colors duration-300 placeholder-transparent"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-3 text-ink-hint text-sm tracking-wider transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 border border-gold">
      <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="font-serif text-2xl text-ink">Message Sent</p>
      <p className="text-sm text-ink-muted">I'll get back to you soon.</p>
    </div>
  )
}