'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cartContext'
import type { Coffee } from '@/lib/coffees'

const roastBar: Record<string, { fill: string; label: string; pct: number }> = {
  light:  { fill: '#e0b832', label: 'Light',       pct: 25 },
  medium: { fill: '#c9940a', label: 'Medium',       pct: 55 },
  dark:   { fill: '#6b3510', label: 'Dark',         pct: 85 },
}

const BagArt = ({ bg }: { bg: string }) => (
  <div style={{
    width: '100%', maxWidth: 320,
    aspectRatio: '3/4',
    background: bg,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative',
    boxShadow: '0 32px 80px rgba(0,0,0,.14)',
  }}>
    <svg viewBox="0 0 120 170" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '68%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,.18))' }}>
      <path d="M18 40 Q18 32 26 32 L94 32 Q102 32 102 40 L107 148 Q107 156 99 156 L21 156 Q13 156 13 148 Z" fill="#1a3a58" />
      <path d="M26 32 L94 32 L91 18 Q89 10 82 10 L38 10 Q31 10 29 18 Z" fill="#0f2338" />
      <path d="M60 48 L76 32 L60 18 L44 32 Z" fill="rgba(224,184,50,.3)" />
      <path d="M60 48 L82 43 L76 32 Z" fill="rgba(224,184,50,.18)" />
      <path d="M60 48 L38 43 L44 32 Z" fill="rgba(224,184,50,.18)" />
      <ellipse cx="60" cy="88" rx="34" ry="44" fill="white" opacity="0.94" />
      <text x="60" y="68" textAnchor="middle" fontSize="9" fill="#1a3a58" fontFamily="Georgia,serif">✦</text>
      <text x="60" y="82" textAnchor="middle" fontSize="10" fill="#1a3a58" fontFamily="Georgia,serif" fontWeight="bold">PAROUSIA</text>
      <text x="60" y="95" textAnchor="middle" fontSize="9" fill="#1a3a58" fontFamily="Georgia,serif">COFFEE</text>
      <circle cx="48" cy="120" r="9" fill="#c03050" />
      <circle cx="62" cy="124" r="10" fill="#a02040" />
      <circle cx="75" cy="118" r="8" fill="#c03050" />
      <path d="M61 112 Q64 103 70 107" stroke="#4a8a40" strokeWidth="2.5" fill="none" />
      <path d="M54 115 Q48 105 58 102 Q68 99 66 109" fill="#5a9a50" />
    </svg>
  </div>
)

export default function ProductDetail({ coffee }: { coffee: Coffee }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const roast = roastBar[coffee.roastType]

  function handleAdd() {
    addItem({ name: coffee.name, roast: coffee.roast, roastType: coffee.roastType, bg: coffee.bg, price: coffee.price, process: coffee.process })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main style={{ background: 'var(--off-white)', minHeight: '80vh' }}>

      {/* ── Breadcrumb ── */}
      <div style={{
        padding: '1.6rem 6rem 0',
        display: 'flex', alignItems: 'center', gap: '.5rem',
        fontSize: '.6rem', fontWeight: 500, letterSpacing: '.18em',
        textTransform: 'uppercase', color: 'var(--muted)',
      }}>
        <Link href="/shop" style={{ color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' }}>
          Shop
        </Link>
        <span style={{ opacity: .4 }}>/</span>
        <span style={{ color: 'var(--gold)' }}>{coffee.name}</span>
      </div>

      {/* ── Main product layout ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        padding: '3rem 6rem 6rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}>

        {/* Left — bag visual */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '1rem' }}>
          <BagArt bg={coffee.bg} />
          <div style={{
            marginTop: '1.5rem',
            display: 'flex', gap: '.4rem', flexWrap: 'wrap', justifyContent: 'center',
          }}>
            {coffee.pills.map(p => (
              <span key={p} style={{
                fontSize: '.55rem', fontWeight: 500, letterSpacing: '.1em',
                textTransform: 'uppercase', background: 'var(--cream-2)',
                color: 'var(--text)', padding: '.28rem .7rem', borderRadius: 99,
              }}>
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Right — info */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '1rem' }}>

          {/* Eyebrow */}
          <div style={{
            fontSize: '.58rem', fontWeight: 600, letterSpacing: '.3em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.8rem',
            display: 'flex', alignItems: 'center', gap: '.5rem',
          }}>
            ✦ {coffee.category === 'single-origin' ? 'Single Origin' : 'Blend'}
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--navy-dk)',
            lineHeight: 1, letterSpacing: '-.02em', margin: '0 0 .4rem',
          }}>
            {coffee.name}
          </h1>

          {/* Nick */}
          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontWeight: 300, fontSize: '1rem', color: 'var(--muted)', marginBottom: '1.8rem',
          }}>
            {coffee.nick}
          </div>

          {/* Divider */}
          <div style={{ width: 36, height: 1.5, background: 'var(--gold)', opacity: .5, marginBottom: '1.8rem' }} />

          {/* Description */}
          <p style={{
            fontSize: '.95rem', fontWeight: 300, color: 'rgba(26,58,88,.85)',
            lineHeight: 1.9, margin: '0 0 2rem',
          }}>
            {coffee.description}
          </p>

          {/* Origin / Process / Elevation grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            marginBottom: '2rem',
          }}>
            {[
              { label: 'Origin',   value: coffee.origins },
              { label: 'Process',  value: coffee.processFull },
              ...(coffee.elevation ? [{ label: 'Elevation', value: coffee.elevation }] : []),
              ...(coffee.varietal  ? [{ label: 'Varietal',  value: coffee.varietal  }] : []),
              { label: 'Roast',    value: coffee.roast },
            ].map(row => (
              <div key={row.label} style={{
                background: '#fff', padding: '.9rem 1rem',
              }}>
                <div style={{
                  fontSize: '.52rem', fontWeight: 600, letterSpacing: '.22em',
                  textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.3rem',
                }}>
                  {row.label}
                </div>
                <div style={{
                  fontSize: '.82rem', fontWeight: 600, color: 'var(--navy-dk)',
                }}>
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* Roast level bar */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: '.5rem',
            }}>
              <span style={{ fontSize: '.58rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                Roast Level
              </span>
              <span style={{ fontSize: '.65rem', fontWeight: 600, color: roast.fill }}>
                {roast.label}
              </span>
            </div>
            <div style={{ height: 4, background: 'var(--cream-2)', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${roast.pct}%`,
                background: roast.fill, borderRadius: 99,
                transition: 'width .6s cubic-bezier(.4,0,.2,1)',
              }} />
            </div>
          </div>

          {/* Brew tip */}
          {coffee.brewTip && (
            <div style={{
              background: 'var(--cream)', borderLeft: '3px solid var(--gold)',
              padding: '.85rem 1.1rem', marginBottom: '2rem',
              fontSize: '.78rem', fontWeight: 300, color: 'rgba(26,58,88,.8)',
              lineHeight: 1.7,
            }}>
              <span style={{ fontWeight: 600, color: 'var(--gold)', marginRight: '.4rem' }}>Brew tip:</span>
              {coffee.brewTip}
            </div>
          )}

          {/* Price + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: 'auto' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem',
              fontWeight: 900, color: 'var(--navy-dk)',
            }}>
              ${coffee.price}
            </span>
            <span style={{ fontSize: '.65rem', fontWeight: 300, color: 'var(--muted)' }}>
              {coffee.process}
            </span>
          </div>

          <button
            disabled={added}
            onClick={handleAdd}
            style={{
              marginTop: '1.2rem',
              width: '100%',
              padding: '1rem',
              fontSize: '.72rem', fontWeight: 600, letterSpacing: '.2em',
              textTransform: 'uppercase',
              background: added ? '#2a7a3a' : 'var(--navy-dk)',
              color: '#fff', border: 'none',
              cursor: added ? 'default' : 'pointer',
              transition: 'background .3s',
            }}
          >
            {added ? 'Added to Cart ✓' : 'Add to Cart'}
          </button>

          <Link href="/shop" style={{
            display: 'block', textAlign: 'center', marginTop: '1rem',
            fontSize: '.62rem', fontWeight: 400, letterSpacing: '.14em',
            textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none',
          }}>
            ← Back to all coffees
          </Link>
        </div>
      </div>
    </main>
  )
}
