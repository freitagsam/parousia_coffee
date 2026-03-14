'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cartContext'
import { coffees } from '@/lib/coffees'
import type { Coffee } from '@/lib/coffees'

const roastStrip: Record<string, React.CSSProperties> = {
  dark:   { background: 'linear-gradient(to bottom, #6b3510, #3d1a08)' },
  medium: { background: 'linear-gradient(to bottom, #c9940a, #8a600a)' },
  light:  { background: 'linear-gradient(to bottom, #e0b832, #c49a1a)' },
}

const BagArt = () => (
  <svg
    className="bag-art"
    viewBox="0 0 120 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 160, position: 'relative', zIndex: 2, filter: 'drop-shadow(0 16px 36px rgba(0,0,0,.16))' }}
  >
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
)

type Filter = 'all' | 'blend' | 'single-origin'

const filters: { label: string; value: Filter }[] = [
  { label: 'All',            value: 'all' },
  { label: 'Blends',         value: 'blend' },
  { label: 'Single Origins', value: 'single-origin' },
]

export default function ShopGrid() {
  const [active, setActive] = useState<Filter>('all')
  const [added, setAdded] = useState<string | null>(null)
  const { addItem } = useCart()

  function handleAdd(coffee: Coffee) {
    addItem({ name: coffee.name, roast: coffee.roast, roastType: coffee.roastType, bg: coffee.bg, price: coffee.price, process: coffee.process })
    setAdded(coffee.name)
    setTimeout(() => setAdded(null), 2000)
  }

  const visible = active === 'all' ? coffees : coffees.filter(c => c.category === active)

  return (
    <>
      {/* ── Filter tabs ── */}
      <div
        style={{
          display: 'flex',
          gap: '.5rem',
          justifyContent: 'center',
          padding: '0 6rem 4rem',
          background: 'var(--off-white)',
        }}
      >
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              padding: '.5rem 1.4rem',
              fontSize: '.65rem',
              fontWeight: active === f.value ? 600 : 400,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              border: active === f.value
                ? '1.5px solid var(--navy)'
                : '1.5px solid var(--border)',
              background: active === f.value ? 'var(--navy)' : 'transparent',
              color: active === f.value ? '#fff' : 'var(--muted)',
              cursor: 'pointer',
              transition: 'all .2s',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── Product grid ── */}
      <div
        style={{
          background: 'var(--off-white)',
          padding: '0 6rem 8rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {visible.map(coffee => (
            <div
              key={coffee.name}
              className="product-card"
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Image area */}
              <div
                style={{
                  position: 'relative',
                  height: 360,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  background: coffee.bg,
                }}
              >
                {/* Roast strip */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    ...roastStrip[coffee.roastType],
                  }}
                />
                <BagArt />

                {/* Hover overlay */}
                <div
                  className="card-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 3,
                    background: 'rgba(10,25,41,.88)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '.7rem',
                    padding: '2rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#fff',
                      textAlign: 'center',
                      lineHeight: 1.2,
                    }}
                  >
                    {coffee.name}
                  </div>
                  <div
                    style={{
                      fontSize: '.72rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,.6)',
                      textAlign: 'center',
                      lineHeight: 1.7,
                      letterSpacing: '.04em',
                    }}
                  >
                    {coffee.notes}
                  </div>
                  <button
                    disabled={added === coffee.name}
                    onClick={(e) => { e.stopPropagation(); handleAdd(coffee) }}
                    style={{
                      marginTop: '.5rem',
                      fontSize: '.62rem',
                      fontWeight: 600,
                      letterSpacing: '.2em',
                      textTransform: 'uppercase',
                      color: 'var(--navy-dk)',
                      background: added === coffee.name ? '#b8e8c0' : 'var(--gold-lt)',
                      padding: '.6rem 1.4rem',
                      border: 'none',
                      cursor: added === coffee.name ? 'default' : 'pointer',
                      transition: 'background .3s',
                    }}
                  >
                    {added === coffee.name ? 'Added ✓' : 'Add to Cart'}
                  </button>
                  <Link
                    href={`/shop/${coffee.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: '.58rem',
                      fontWeight: 500,
                      letterSpacing: '.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,.55)',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,.25)',
                      paddingBottom: '1px',
                      transition: 'color .2s',
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.4rem 1.5rem 1.6rem' }}>
                <div
                  style={{
                    fontSize: '.58rem',
                    fontWeight: 600,
                    letterSpacing: '.22em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '.4rem',
                  }}
                >
                  ● {coffee.roast}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--navy-dk)',
                    marginBottom: '.25rem',
                    lineHeight: 1.2,
                  }}
                >
                  {coffee.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '.82rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    marginBottom: '.9rem',
                  }}
                >
                  {coffee.nick}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', marginBottom: '1rem' }}>
                  {coffee.pills.map(p => (
                    <span
                      key={p}
                      style={{
                        fontSize: '.55rem',
                        fontWeight: 500,
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        background: 'var(--cream-2)',
                        color: 'var(--text)',
                        padding: '.22rem .6rem',
                        borderRadius: 99,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '.9rem',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                    }}
                  >
                    ${coffee.price}
                  </span>
                  <span
                    style={{
                      fontSize: '.6rem',
                      fontWeight: 300,
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '.08em',
                    }}
                  >
                    {coffee.process}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
