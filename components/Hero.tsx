'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import GoogleReviewsBadge from './GoogleReviewsBadge'

const BG_IMAGES = [
  '/images/o2.png',
  '/images/o1.jpg',
  '/images/o8.jpg',
  '/images/o2.jpg',
  '/images/s2.jpg',
  '/images/s6.jpg',
  '/images/s11.jpg',
]

const GALLERY_IMAGES = [
  '/images/o1.jpg',
  '/images/o8.jpg',
  '/images/s2.jpg',
  '/images/s6.jpg',
  '/images/s11.jpg',
  '/images/o2.jpg',
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bgIndex, setBgIndex] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(i => (i + 1) % BG_IMAGES.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

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
        minHeight: '80vh',
        background: 'var(--cream)',
        display: 'grid',
        gridTemplateColumns: '77% 23%',
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
        {/* Background photo slideshow — crossfade between images */}
        {BG_IMAGES.map((src, i) => (
          <div
            key={src}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === bgIndex ? 0.90 : 0,
              transition: 'opacity 1.2s ease-in-out',
              filter: 'contrast(1.08) saturate(1.05)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
        ))}
        {/* Cream gradient overlay — opaque left (behind text), transparent right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(244,237,224,.98) 0%, rgba(244,237,224,.80) 40%, rgba(244,237,224,.14) 70%, rgba(244,237,224,.04) 100%)',
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
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: 'var(--navy)',
        }}
      >
        {/* ── Top: square blue section ── */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            aspectRatio: '1 / 1',
            flexShrink: 0,
          }}
        >
          {/* Diagonal παρουσία text pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 4,
              pointerEvents: 'none',
            }}
          >
            {Array.from({ length: 10 }).map((_, row) =>
              Array.from({ length: 4 }).map((_, col) => (
                <span
                  key={`${row}-${col}`}
                  style={{
                    position: 'absolute',
                    top: `${row * 12 - 5}%`,
                    left: `${col * 32 - 10 + (row % 2) * 16}%`,
                    fontFamily: 'var(--font-display)',
                    fontSize: '.18rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.03)',
                    whiteSpace: 'nowrap',
                    transform: 'rotate(-30deg)',
                    transformOrigin: 'left center',
                    letterSpacing: '.15em',
                    textTransform: 'uppercase' as const,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  παρουσία
                </span>
              ))
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
              transform: 'translate(-50%,-50%)',
              fontFamily: 'var(--font-display)',
              fontSize: 'min(28vw, 360px)',
              fontWeight: 900,
              color: 'rgba(255,255,255,.03)',
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
              bottom: '1.5rem',
              left: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              zIndex: 3,
            }}
          >
            <span
              className="animate-star-pulse"
              style={{ fontSize: '1.1rem', color: 'var(--gold-lt)', marginBottom: '.3rem' }}
            >
              ✦
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
              }}
            >
              Enjoy<br />the Present.
            </span>
            <span
              style={{
                fontSize: '.55rem',
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
              top: '1.2rem',
              right: '1.2rem',
              zIndex: 3,
              background: 'rgba(255,255,255,.07)',
              border: '1px solid rgba(255,255,255,.1)',
              backdropFilter: 'blur(8px)',
              padding: '1rem 1.2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              width: 200,
            }}
          >
            {/* Header */}
            <span
              style={{
                fontSize: '.6rem',
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
                  <span style={{ fontSize: '.72rem', fontWeight: 300, color: 'rgba(255,255,255,.7)', letterSpacing: '.01em', lineHeight: 1.2 }}>{name}</span>
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
                  <span style={{ fontSize: '.72rem', fontWeight: 300, color: 'rgba(255,255,255,.55)', letterSpacing: '.01em', lineHeight: 1.2 }}>{name}</span>
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
        </div>

        {/* ── Bottom: photo gallery ── */}
        <div
          style={{
            position: 'relative',
            flex: 1,
            overflow: 'hidden',
            background: '#0a1520',
            minHeight: '8rem',
          }}
        >
          {/* Images */}
          {GALLERY_IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: i === galleryIndex ? 1 : 0,
                transition: 'opacity 0.7s ease',
              }}
            />
          ))}

          {/* Dark overlay for contrast */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.18)', zIndex: 1, pointerEvents: 'none' }} />

          {/* Dot indicators */}
          <div
            style={{
              position: 'absolute',
              bottom: '.75rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '.4rem',
              zIndex: 3,
            }}
          >
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                style={{
                  width: i === galleryIndex ? 16 : 5,
                  height: 5,
                  borderRadius: 3,
                  background: i === galleryIndex ? 'var(--gold)' : 'rgba(255,255,255,.35)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width .3s ease, background .3s ease',
                }}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => setGalleryIndex(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
            style={{
              position: 'absolute',
              left: '.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              background: 'rgba(255,255,255,.12)',
              border: '1px solid rgba(255,255,255,.18)',
              color: '#fff',
              width: 28,
              height: 28,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '.75rem',
              backdropFilter: 'blur(4px)',
              transition: 'background .2s ease',
            }}
          >
            ←
          </button>
          <button
            onClick={() => setGalleryIndex(i => (i + 1) % GALLERY_IMAGES.length)}
            style={{
              position: 'absolute',
              right: '.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              background: 'rgba(255,255,255,.12)',
              border: '1px solid rgba(255,255,255,.18)',
              color: '#fff',
              width: 28,
              height: 28,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '.75rem',
              backdropFilter: 'blur(4px)',
              transition: 'background .2s ease',
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
