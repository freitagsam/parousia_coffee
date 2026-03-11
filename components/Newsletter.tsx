'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url("/images/o (4).jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '7rem 6rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'center',
      }}
    >
      {/* Left */}
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.6rem',
            fontSize: '.6rem',
            fontWeight: 600,
            letterSpacing: '.3em',
            textTransform: 'uppercase' as const,
            color: 'var(--gold)',
            marginBottom: '.9rem',
          }}
        >
          ✦ Stay in the Loop
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: 'var(--navy-dk)',
            lineHeight: 1,
            letterSpacing: '-.02em',
            marginBottom: '1rem',
          }}
        >
          New roasts.{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>First.</em>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '1rem',
            fontWeight: 300,
            color: 'var(--muted)',
            lineHeight: 1.8,
          }}
        >
          Drop drops, seasonal menus, and trailer stops — straight to your inbox before anyone else hears about it.
        </p>
      </div>

      {/* Right — form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {submitted ? (
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--navy-dk)',
              lineHeight: 1.4,
            }}
          >
            ✦ You&apos;re in.
            <br />
            <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--muted)', fontSize: '.95rem' }}>
              Expect good things.
            </span>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex' }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  border: '1.5px solid rgba(26,58,88,.2)',
                  borderRight: 'none',
                  padding: '.95rem 1.4rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '.82rem',
                  fontWeight: 300,
                  color: 'var(--text)',
                  background: 'var(--off-white)',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--navy)',
                  border: '1.5px solid var(--navy)',
                  padding: '.95rem 1.8rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '.65rem',
                  fontWeight: 600,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase' as const,
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'background .25s',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </button>
            </form>
            <p
              style={{
                fontSize: '.65rem',
                fontWeight: 300,
                color: 'var(--muted)',
                letterSpacing: '.04em',
              }}
            >
              No spam. Unsubscribe anytime. We hate junk mail too.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
