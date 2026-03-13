'use client'

import { useState } from 'react'
import Link from 'next/link'
import GoogleReviewsBadge from './GoogleReviewsBadge'

export default function Hero() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <style>{`
      @keyframes menu-star-spin {
        0%   { opacity: 1;   rotate: 0deg; }
        70%  { opacity: 1;   rotate: 0deg; }
        74%  { opacity: 0.05; rotate: 0deg; }
        77%  { opacity: 1;   rotate: 0deg; }
        80%  { opacity: 0.1; rotate: 0deg; }
        83%  { opacity: 1;   rotate: 0deg; }
        100% { opacity: 1;   rotate: 360deg; }
      }
      .menu-star-icon {
        display: inline-block;
        animation: menu-star-spin 5s ease-in-out infinite;
      }
    `}</style>
    <section
      id="hero"
      style={{
        minHeight: '70vh',
        background: 'var(--cream)',
        display: 'grid',
        gridTemplateColumns: '73% 27%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Left: text panel ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '5rem 5rem 5rem 6rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Background photo — very transparent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/o2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.84,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        {/* Cream gradient overlay — opaque left (behind text), transparent right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(244,237,224,.98) 0%, rgba(244,237,224,.84) 40%, rgba(244,237,224,.16) 70%, rgba(244,237,224,.05) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        {/* Content wrapper — sits above background layers */}
        <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.8rem',
            fontSize: '.62rem',
            fontWeight: 500,
            letterSpacing: '.3em',
            textTransform: 'uppercase' as const,
            color: 'var(--gold)',
            marginBottom: '2rem',
          }}
        >
          <span style={{ width: 32, height: 1, background: 'var(--gold)', display: 'block' }} />
          Small-batch · Richmond, Virginia
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 6.5vw, 6rem)',
            fontWeight: 900,
            lineHeight: .95,
            letterSpacing: '-.02em',
            color: 'var(--navy-dk)',
            marginBottom: '2rem',
          }}
        >
          Roasting
          <br />
          <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--navy)' }}>world-class</span>
          <br />
          <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>coffees</span>
          <br />
          in RVA.
        </h1>

        {/* Body */}
        <p
          style={{
            fontSize: '1.05rem',
            fontWeight: 400,
            lineHeight: 1.8,
            color: 'var(--navy-dk)',
            maxWidth: 400,
            marginBottom: '3rem',
          }}
        >
          We roast the beans, craft the syrups, design the bags, and sling the drinks — all from our Richmond roastery.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' as const }}>
          <Link
            href="/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              fontFamily: 'var(--font-body)',
              fontSize: '.68rem',
              fontWeight: 600,
              letterSpacing: '.2em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              padding: '.9rem 2rem',
              background: 'var(--navy)',
              color: '#fff',
              border: '1.5px solid var(--navy)',
              transition: 'all .28s cubic-bezier(.4,0,.2,1)',
            }}
          >
            Shop Coffees <span>→</span>
          </Link>
          <Link
            href="/menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              fontFamily: 'var(--font-body)',
              fontSize: '.68rem',
              fontWeight: 600,
              letterSpacing: '.2em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              padding: '.9rem 2rem',
              background: 'transparent',
              color: 'var(--navy)',
              border: '1.5px solid rgba(26,58,88,.3)',
              transition: 'all .28s cubic-bezier(.4,0,.2,1)',
            }}
          >
            View Menu
          </Link>
        </div>

        <GoogleReviewsBadge />
        </div>{/* end content wrapper */}
      </div>

      {/* ── Right: visual panel ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--navy)',
        }}
      >
        {/* Diagonal παρουσία text pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => {
              const key = `${row}-${col}`
              const isHovered = hoveredWord === key
              return (
                <span
                  key={key}
                  onMouseEnter={() => setHoveredWord(key)}
                  onMouseLeave={() => setHoveredWord(null)}
                  style={{
                    position: 'absolute',
                    top: `${row * 12 - 5}%`,
                    left: `${col * 32 - 10 + (row % 2) * 16}%`,
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: isHovered ? 'rgba(224,184,50,0.20)' : 'rgba(255,255,255,0.06)',
                    textShadow: isHovered ? '0 0 10px rgba(224,184,50,0.4), 0 0 24px rgba(224,184,50,0.2)' : 'none',
                    whiteSpace: 'nowrap',
                    transform: isHovered ? 'rotate(-30deg) scale(1.1)' : 'rotate(-30deg) scale(1)',
                    transformOrigin: 'left center',
                    letterSpacing: '.15em',
                    textTransform: 'uppercase' as const,
                    cursor: 'default',
                    padding: '3rem 4rem',
                    margin: '-3rem -4rem',
                    transition: 'color 0.25s ease, text-shadow 0.25s ease, transform 0.25s ease',
                    zIndex: isHovered ? 10 : 'auto',
                  }}
                >
                  παρουσία
                </span>
              )
            })
          )}
        </div>

        {/* Animated radial wash */}
        <div
          className="animate-vis-shift"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 70% 70% at 60% 50%, rgba(196,154,26,.12) 0%, transparent 70%),
              radial-gradient(ellipse 50% 80% at 20% 80%, rgba(42,82,127,.4) 0%, transparent 60%)
            `,
          }}
        />

        {/* Giant P letterform */}
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-45%,-50%)',
            fontFamily: 'var(--font-display)',
            fontSize: 'min(52vw, 640px)',
            fontWeight: 900,
            color: 'rgba(255,255,255,.13)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-.05em',
            zIndex: 1,
          }}
        >
          P
        </span>

        {/* Floating badge — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '3.5rem',
            left: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            zIndex: 3,
          }}
        >
          <span
            className="animate-star-pulse"
            style={{ fontSize: '1.4rem', color: 'var(--gold-lt)', marginBottom: '.4rem' }}
          >
            ✦
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
            }}
          >
            Enjoy<br />the Present.
          </span>
          <span
            style={{
              fontSize: '.6rem',
              fontWeight: 400,
              letterSpacing: '.28em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,.45)',
            }}
          >
            Roasted in RVA since 2019
          </span>
        </div>

        {/* Floating café menu — top right */}
        <div
          className="animate-float-y"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '3rem',
            right: '3rem',
            zIndex: 3,
            background: 'rgba(255,255,255,.07)',
            border: '1px solid rgba(255,255,255,.1)',
            backdropFilter: 'blur(8px)',
            padding: '1.3rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            width: 230,
          }}
        >
          {/* Header */}
          <span
            style={{
              fontSize: '.65rem',
              fontWeight: 600,
              letterSpacing: '.28em',
              textTransform: 'uppercase' as const,
              color: 'var(--gold-lt)',
              marginBottom: menuOpen ? '.55rem' : 0,
              transition: 'margin .3s ease',
            }}
          >
            <span className="menu-star-icon">✦</span> What we&apos;re pouring
          </span>

          {/* Expandable content */}
          <div
            style={{
              overflow: 'hidden',
              maxHeight: menuOpen ? '600px' : '0px',
              opacity: menuOpen ? 1 : 0,
              transition: 'max-height .45s cubic-bezier(.4,0,.2,1), opacity .3s ease',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Seasonal */}
            <span style={{ fontSize: '.55rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.3)', marginBottom: '.3rem' }}>
              Seasonal
            </span>
            {[
              'Honey Cinnamon Latte',
              'Brown Sugar Lavender Latte',
              'Caramel Praline Cortado',
              'Pumpkin Cream Cold Brew',
              'Cardamom Rose Latte',
            ].map(name => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '.35rem', padding: '.22rem 0', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--gold)', opacity: .5, flexShrink: 0 }} />
                <span style={{ fontSize: '.75rem', fontWeight: 300, color: 'rgba(255,255,255,.7)', letterSpacing: '.01em', lineHeight: 1.2 }}>{name}</span>
              </div>
            ))}

            {/* Standard */}
            <span style={{ fontSize: '.55rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.3)', marginTop: '.55rem', marginBottom: '.3rem' }}>
              Standard
            </span>
            {[
              'Espresso',
              'Cappuccino',
              'Latte',
              'Americano',
              'Cold Brew',
              'Matcha Latte',
            ].map(name => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '.35rem', padding: '.22rem 0', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--gold)', opacity: .35, flexShrink: 0 }} />
                <span style={{ fontSize: '.75rem', fontWeight: 300, color: 'rgba(255,255,255,.55)', letterSpacing: '.01em', lineHeight: 1.2 }}>{name}</span>
              </div>
            ))}

            <a
              href="/menu"
              style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase' as const, color: 'var(--gold-lt)', textDecoration: 'none', marginTop: '.65rem' }}
            >
              Full menu →
            </a>
          </div>
        </div>

        {/* Scroll indicator — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.8rem',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontSize: '.58rem',
              fontWeight: 400,
              letterSpacing: '.3em',
              textTransform: 'uppercase' as const,
              color: 'var(--muted)',
              writingMode: 'vertical-rl' as const,
            }}
          >
            Scroll
          </span>
          <span
            className="scroll-bar"
            style={{
              width: 1,
              height: 56,
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
              position: 'relative',
              overflow: 'hidden',
            }}
          />
        </div>
      </div>
    </section>
    </>
  )
}
