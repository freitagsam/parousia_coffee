'use client'

import { useState } from 'react'
import Link from 'next/link'

// ── In-store drink menu ──────────────────────────────────────────────────────

type MenuItem = {
  name: string
  note?: string
  p8?: number
  p12?: number
  p16?: number
}

const seasonal: MenuItem[] = [
  { name: 'Peppermint Bark Latte',        note: 'in-house syrup', p12: 4.75, p16: 5.5 },
  { name: 'Sugar Cookie Latte',           note: 'in-house syrup', p12: 4.75, p16: 5.5 },
  { name: 'Gingersnap Latte',             note: 'in-house syrup', p12: 4.75, p16: 5.5 },
  { name: 'Hot Buttered Rum Latte',       note: 'in-house syrup', p12: 4.75, p16: 5.5 },
  { name: 'White Mocha Chai Latte',       note: 'in-house syrup', p12: 4.75, p16: 5.5 },
  { name: 'Peppermint Bark Hot Chocolate', note: 'no caffeine',   p8: 3.5, p12: 4, p16: 4.5 },
]

const standard: MenuItem[] = [
  { name: 'Double Espresso',             p8: 3 },
  { name: 'Latte',                       p12: 4.5, p16: 5 },
  { name: 'Cappuccino',                  p8: 3.75 },
  { name: 'Americano',                   p8: 3.5, p12: 4, p16: 4.25 },
  { name: 'Mocha',                       p12: 4.75, p16: 5.5 },
  { name: 'Masala Chai Latte',           p12: 4.75, p16: 5.5 },
  { name: 'Herbal Tea',                  note: 'no caffeine', p12: 2.95, p16: 3.25 },
  { name: 'Hot Chocolate',               note: 'no caffeine', p8: 3.5, p12: 4, p16: 4.5 },
  { name: 'Drip Coffee',                 p8: 3, p12: 3.5, p16: 3.75 },
  { name: 'V60 Pour Over',               p8: 5 },
]

// ── Retail coffee bags ───────────────────────────────────────────────────────

type Bag = {
  name: string
  nick: string
  roast: string
  roastType: 'light' | 'medium' | 'dark'
  size: string
  price: number
  notes: string
  pills: string[]
  accent: string // background color swatch
}

const bags: Bag[] = [
  {
    name: 'Cornerstone Blend',
    nick: '"The Foundation"',
    roast: 'Medium–Dark',
    roastType: 'dark',
    size: '16oz',
    price: 19,
    notes: 'Cacao nib · Date syrup · Creamy body',
    pills: ['Cacao Nib', 'Date Syrup', 'Creamy'],
    accent: '#abdcdc',
  },
  {
    name: 'MorningStar Blend',
    nick: '"The Swiss Army Knife"',
    roast: 'Medium–Light',
    roastType: 'medium',
    size: '16oz',
    price: 19,
    notes: 'Walnut · Milk chocolate · Passion fruit',
    pills: ['Walnut', 'Milk Choc', 'Passion Fruit'],
    accent: '#addae8',
  },
  {
    name: 'Los Hermanos Blend',
    nick: '"The Passport"',
    roast: 'Medium',
    roastType: 'medium',
    size: '16oz',
    price: 19,
    notes: 'Sweet · Nutty · Orange juice finish · Colombia',
    pills: ['Sweet', 'Nutty', 'Orange'],
    accent: '#e3ce9d',
  },
  {
    name: 'Rwanda Shyira',
    nick: '"The Bright One"',
    roast: 'Light',
    roastType: 'light',
    size: '12oz',
    price: 22,
    notes: 'Jasmine · Red berry · Black tea finish · Rwanda',
    pills: ['Jasmine', 'Red Berry', 'Black Tea'],
    accent: '#b9e4cb',
  },
  {
    name: 'Bali Kintamani',
    nick: '"The Island"',
    roast: 'Medium–Light',
    roastType: 'medium',
    size: '12oz',
    price: 22,
    notes: 'Lemon · Brown sugar · Clean finish · Bali',
    pills: ['Lemon', 'Brown Sugar', 'Clean'],
    accent: '#aee4e8',
  },
  {
    name: 'Symphony Blend',
    nick: '"The Showstopper"',
    roast: 'Medium',
    roastType: 'medium',
    size: '16oz',
    price: 19,
    notes: 'Rose · Dark honey · Velvet body',
    pills: ['Rose', 'Dark Honey', 'Velvet'],
    accent: '#e9c2d2',
  },
  {
    name: 'Pillar of Smoke',
    nick: '"The Bold One"',
    roast: 'Dark',
    roastType: 'dark',
    size: '16oz',
    price: 19,
    notes: 'Smoke · Dark chocolate · Full body',
    pills: ['Smoke', 'Dark Choc', 'Full Body'],
    accent: '#ccc6e3',
  },
]

const roastColors: Record<Bag['roastType'], string> = {
  light:  '#a0855a',
  medium: '#7a5c3a',
  dark:   '#3a2010',
}

// ── Sub-components ───────────────────────────────────────────────────────────

function InStoreRow({ item, onHover, onLeave, isHovered }: {
  item: MenuItem
  onHover: () => void
  onLeave: () => void
  isHovered: boolean
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        display: 'flex',
        alignItems: 'baseline',
        padding: '.7rem .5rem',
        borderBottom: '1px solid rgba(255,255,255,.06)',
        gap: '.5rem',
        position: 'relative',
        cursor: 'default',
        background: isHovered ? 'rgba(196,154,26,.07)' : 'transparent',
        transition: 'background .15s',
        marginLeft: '-.5rem',
        marginRight: '-.5rem',
      }}
    >
      <span
        style={{
          width: 5, height: 5, borderRadius: '50%',
          background: 'var(--gold)', opacity: .5, flexShrink: 0,
          marginRight: '.5rem', position: 'relative', top: '-1px', display: 'inline-block',
        }}
      />
      <span style={{ flex: 1, fontSize: '.82rem', fontWeight: 300, color: 'rgba(255,255,255,.8)', letterSpacing: '.015em', lineHeight: 1.4 }}>
        {item.name}
        {item.note && (
          <sup style={{ fontSize: '.48rem', color: 'var(--gold-lt)', verticalAlign: 'super', marginLeft: '.2rem', letterSpacing: '.05em', fontWeight: 500 }}>
            {item.note}
          </sup>
        )}
      </span>
      <div style={{ display: 'flex', gap: '.4rem', flexShrink: 0 }}>
        {[item.p8, item.p12, item.p16].map((val, i) => (
          <span
            key={i}
            style={{
              fontSize: '.72rem',
              fontWeight: val ? 500 : 300,
              color: val ? 'var(--gold-lt)' : 'rgba(255,255,255,.12)',
              minWidth: 38, textAlign: 'right',
            }}
          >
            {val ? `$${val.toFixed(2)}` : '—'}
          </span>
        ))}
      </div>

      {/* Hover image — floats to the right of this row */}
      <div
        style={{
          position: 'absolute',
          left: 'calc(100% + 1.5rem)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 100,
          height: 100,
          border: '1px solid rgba(196,154,26,.2)',
          overflow: 'hidden',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity .15s ease',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <img
          src="/images/o.png"
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'rgba(10,20,35,.75)',
            padding: '.3rem .4rem',
            fontSize: '.44rem', fontWeight: 500, color: 'rgba(255,255,255,.7)',
            letterSpacing: '.06em', textAlign: 'center', lineHeight: 1.3,
          }}
        >
          {item.name}
        </div>
      </div>
    </div>
  )
}

function BagCard({ bag }: { bag: Bag }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#fff' : 'rgba(255,255,255,.6)',
        border: `1px solid ${hovered ? 'rgba(26,58,88,.15)' : 'rgba(26,58,88,.07)'}`,
        display: 'flex',
        alignItems: 'stretch',
        gap: 0,
        transition: 'background .2s, border-color .2s, box-shadow .2s, transform .2s',
        boxShadow: hovered ? '0 8px 28px rgba(26,58,88,.1)' : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Color swatch / roast indicator */}
      <div
        style={{
          width: 6,
          flexShrink: 0,
          background: roastColors[bag.roastType],
          opacity: .7,
        }}
      />

      {/* Main content */}
      <div style={{ flex: 1, padding: '1.1rem 1.3rem', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '.8rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '.92rem', fontWeight: 700, color: 'var(--navy-dk)', lineHeight: 1.2 }}>
              {bag.name}
            </div>
            <div style={{ fontSize: '.55rem', fontWeight: 400, color: 'var(--muted)', marginTop: '.15rem', letterSpacing: '.04em' }}>
              {bag.nick}
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>
              ${bag.price}
            </div>
            <div style={{ fontSize: '.55rem', color: 'var(--muted)', letterSpacing: '.06em' }}>
              {bag.size}
            </div>
          </div>
        </div>

        {/* Roast + flavor pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', alignItems: 'center' }}>
          <span
            style={{
              fontSize: '.5rem',
              fontWeight: 600,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#fff',
              background: roastColors[bag.roastType],
              padding: '.2rem .55rem',
              borderRadius: 2,
            }}
          >
            {bag.roast}
          </span>
          {bag.pills.map(p => (
            <span
              key={p}
              style={{
                fontSize: '.5rem',
                fontWeight: 500,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                background: 'rgba(26,58,88,.06)',
                padding: '.2rem .5rem',
                borderRadius: 2,
              }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Shop link — slides in on hover */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            overflow: 'hidden',
            maxHeight: hovered ? '2rem' : '0',
            opacity: hovered ? 1 : 0,
            transition: 'max-height .2s ease, opacity .2s ease',
          }}
        >
          <Link
            href="/shop"
            style={{
              fontSize: '.58rem',
              fontWeight: 600,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--navy)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '.4rem',
              borderBottom: '1px solid rgba(26,58,88,.3)',
              paddingBottom: '.1rem',
            }}
          >
            Order this bag →
          </Link>
        </div>
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function MenuPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)' }}>

      {/* ── Header bar ── */}
      <div
        style={{
          background: 'var(--navy-dk)',
          borderBottom: '1px solid rgba(196,154,26,.2)',
          padding: '.9rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        <span style={{ width: 28, height: 1, background: 'rgba(196,154,26,.4)', display: 'block' }} />
        <Link
          href="/"
          style={{
            fontSize: '.58rem', fontWeight: 600, letterSpacing: '.35em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', textDecoration: 'none',
          }}
        >
          Parousia Coffee
        </Link>
        <span style={{ color: 'rgba(196,154,26,.4)', fontSize: '.6rem' }}>·</span>
        <span style={{ fontSize: '.58rem', fontWeight: 600, letterSpacing: '.35em', textTransform: 'uppercase', color: 'var(--gold-lt)' }}>
          Menu
        </span>
        <span style={{ width: 28, height: 1, background: 'rgba(196,154,26,.4)', display: 'block' }} />
      </div>

      {/* ── Split body ── */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1px 1fr' }}>

        {/* ════════════ LEFT — In-Store ════════════ */}
        <div
          style={{
            background: 'var(--navy-dk)',
            padding: '2rem 2rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Dot grid */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(196,154,26,.04) 1px, transparent 1px)',
              backgroundSize: '22px 22px', pointerEvents: 'none',
            }}
          />
          {/* Greek watermark */}
          <div
            style={{
              position: 'absolute', bottom: '-1rem', right: '-2rem',
              fontFamily: 'var(--font-display)', fontSize: '8rem', fontWeight: 900,
              color: 'rgba(255,255,255,.025)', userSelect: 'none', pointerEvents: 'none',
              lineHeight: 1, letterSpacing: '-.02em',
            }}
          >
            παρουσία
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.8rem' }}>
              <span className="animate-star-pulse" style={{ fontSize: '.75rem', color: 'var(--gold)' }}>✦</span>
              <span style={{ fontSize: '.56rem', fontWeight: 600, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--gold-lt)' }}>
                In-Store Menu
              </span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em',
                  color: '#fff', marginBottom: '.8rem',
                }}
              >
                Come{' '}
                <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>visit</em>{' '}
                us.
              </h1>
              <p style={{ fontSize: '.78rem', fontWeight: 300, color: 'rgba(255,255,255,.4)', lineHeight: 1.8, margin: 0, maxWidth: 320 }}>
                Every drink crafted with our own roasts and in-house syrups. No shortcuts.
              </p>
            </div>

            {/* Drink list + hover image side by side */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Size header */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '.4rem', marginBottom: '.5rem' }}>
                  {['8oz', '12oz', '16oz'].map(s => (
                    <span
                      key={s}
                      style={{
                        fontSize: '.5rem', fontWeight: 600, letterSpacing: '.18em',
                        textTransform: 'uppercase', color: 'rgba(255,255,255,.2)',
                        minWidth: 38, textAlign: 'right',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Seasonal */}
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontSize: '.56rem', fontWeight: 600, letterSpacing: '.28em',
                      textTransform: 'uppercase', color: 'var(--gold)',
                      paddingBottom: '.7rem', borderBottom: '1px solid rgba(196,154,26,.25)', marginBottom: '.3rem',
                    }}
                  >
                    Seasonal Specials
                  </div>
                  {seasonal.map(item => (
                    <InStoreRow
                      key={item.name}
                      item={item}
                      isHovered={hoveredItem === item.name}
                      onHover={() => setHoveredItem(item.name)}
                      onLeave={() => setHoveredItem(null)}
                    />
                  ))}
                </div>

                {/* Standard */}
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontSize: '.56rem', fontWeight: 600, letterSpacing: '.28em',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,.3)',
                      paddingBottom: '.7rem', borderBottom: '1px solid rgba(255,255,255,.07)', marginBottom: '.3rem',
                    }}
                  >
                    Standard Drinks
                  </div>
                  {standard.map(item => (
                    <InStoreRow
                      key={item.name}
                      item={item}
                      isHovered={hoveredItem === item.name}
                      onHover={() => setHoveredItem(item.name)}
                      onLeave={() => setHoveredItem(null)}
                    />
                  ))}
                </div>
              </div>

              {/* Spacer — reserves room for the per-row hover image */}
              <div style={{ width: 100, flexShrink: 0 }} />
            </div>

            {/* Store info */}
            <div style={{ borderTop: '1px solid rgba(196,154,26,.15)', paddingTop: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.8rem' }}>
                <span style={{ fontSize: '.7rem', color: 'var(--gold)', marginTop: '.05rem' }}>◎</span>
                <div>
                  <div style={{ fontSize: '.75rem', fontWeight: 500, color: 'rgba(255,255,255,.7)', lineHeight: 1.5 }}>
                    3300 W Cary St, Richmond, VA
                  </div>
                  <div style={{ fontSize: '.65rem', fontWeight: 300, color: 'rgba(255,255,255,.35)', marginTop: '.2rem' }}>
                    Mon–Sat · 7 am – 5 pm
                  </div>
                  <div style={{ fontSize: '.65rem', fontWeight: 300, color: 'rgba(255,255,255,.35)' }}>
                    Sunday · 8 am – 3 pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Gold divider ── */}
        <div
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--gold) 15%, var(--gold) 85%, transparent)',
            opacity: .35, flexShrink: 0,
          }}
        />

        {/* ════════════ RIGHT — Coffee Bags / Order Online ════════════ */}
        <div
          style={{
            background: 'var(--cream)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ padding: '2rem 2rem 2.5rem', flex: 1 }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.8rem' }}>
              <span style={{ width: 6, height: 6, background: 'var(--navy)', borderRadius: '50%', flexShrink: 0 }} />
              <span style={{ fontSize: '.56rem', fontWeight: 600, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--navy)' }}>
                Order Online · Ships to your door
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em',
                color: 'var(--navy-dk)', marginBottom: '.8rem',
              }}
            >
              Fresh-roasted{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>bags.</em>
            </h2>
            <p style={{ fontSize: '.78rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 340 }}>
              Small-batch roasts shipped straight from our Richmond roastery. Hover any bag to order.
            </p>

            {/* Roast legend */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {(['light', 'medium', 'dark'] as const).map(r => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: roastColors[r], display: 'block', flexShrink: 0 }} />
                  <span style={{ fontSize: '.52rem', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    {r}
                  </span>
                </div>
              ))}
            </div>

            {/* Bag cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem', marginBottom: '3rem' }}>
              {bags.map(bag => <BagCard key={bag.name} bag={bag} />)}
            </div>

            {/* CTA */}
            <div
              style={{
                borderTop: '1px solid rgba(26,58,88,.1)',
                paddingTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1rem',
              }}
            >
              <p style={{ fontSize: '.75rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                All bags roasted to order and shipped within 48 hours. Free shipping on orders over $40.
              </p>
              <Link
                href="/shop"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '.7rem',
                  padding: '1rem 2.2rem', background: 'var(--navy-dk)', color: '#fff',
                  textDecoration: 'none', fontSize: '.65rem', fontWeight: 600,
                  letterSpacing: '.22em', textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)', transition: 'background .2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--navy)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--navy-dk)')}
              >
                Browse Full Shop
                <span style={{ fontSize: '.9rem', fontWeight: 300 }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Coming Soon: Food ── */}
      <section
        style={{
          background: 'var(--off-white)',
          borderTop: '1px solid var(--border)',
          padding: '4rem 3.5rem',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--navy)',
                letterSpacing: '-.02em',
                whiteSpace: 'nowrap',
              }}
            >
              Food Menu
            </h2>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '.62rem',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              Coming Soon
            </span>
          </div>

          {/* Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
            }}
          >
            {[
              {
                category: 'Breakfast',
                icon: '◎',
                title: 'Morning Bites',
                desc: 'Toasts, egg sandwiches, and house-made pastries — built to pair with your morning coffee. Full breakfast menu launching soon.',
              },
              {
                category: 'Desserts',
                icon: '✦',
                title: 'Sweet Finishes',
                desc: 'Cookies, bars, and rotating seasonal sweets crafted in-house. Something worth saving room for.',
              },
            ].map(({ category, icon, title, desc }) => (
              <div
                key={category}
                style={{
                  background: 'var(--off-white)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '.58rem',
                      fontWeight: 600,
                      letterSpacing: '.22em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      background: 'rgba(196,154,26,.08)',
                      padding: '.25rem .6rem',
                      border: '1px solid rgba(196,154,26,.2)',
                    }}
                  >
                    {category}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem',
                    color: 'var(--navy)',
                    lineHeight: 1,
                  }}
                >
                  {icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    letterSpacing: '-.02em',
                    margin: 0,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '.85rem',
                    lineHeight: 1.7,
                    color: 'var(--muted)',
                    margin: 0,
                  }}
                >
                  {desc}
                </p>

                <div
                  style={{
                    marginTop: '.5rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '.58rem',
                    fontWeight: 600,
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    opacity: .5,
                  }}
                >
                  Stay tuned →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile responsive ── */}
      <style>{`
        @media (max-width: 768px) {
          main > div:last-of-type {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto 1px auto;
          }
          main > div:last-of-type > div:nth-child(2) {
            background: linear-gradient(to right, transparent, var(--gold) 15%, var(--gold) 85%, transparent) !important;
            height: 1px !important;
            width: 100% !important;
          }
          main > div:last-of-type > div:nth-child(3) {
            max-height: none !important;
          }
        }
      `}</style>
    </main>
  )
}
