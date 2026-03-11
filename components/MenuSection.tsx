type MenuItem = {
  name: string
  note?: string
  p8?: number
  p12?: number
  p16?: number
}

const seasonal: MenuItem[] = [
  { name: 'Honey Cinnamon Latte',        note: 'in-house syrup',  p8: 5.5, p12: 6.5, p16: 7.5 },
  { name: 'Brown Sugar Lavender Latte',  note: 'in-house syrup',  p8: 5.5, p12: 6.5, p16: 7.5 },
  { name: 'Caramel Praline Cortado',     note: 'in-house syrup',  p8: 6,   p12: 7 },
  { name: 'Pumpkin Cream Cold Brew',     note: 'in-house syrup',  p12: 6.5, p16: 7.5 },
  { name: 'Cardamom Rose Latte',         note: 'in-house syrup',  p8: 5.5, p12: 6.5, p16: 7.5 },
]

const standard: MenuItem[] = [
  { name: 'Espresso',    p8: 3 },
  { name: 'Cappuccino',  p8: 4.5, p12: 5.5 },
  { name: 'Latte',       p8: 4.5, p12: 5.5, p16: 6.5 },
  { name: 'Americano',   p8: 3.5, p12: 4.5, p16: 5 },
  { name: 'Cold Brew',   p12: 5,  p16: 6 },
  { name: 'Matcha Latte', note: 'no caffeine', p8: 5, p12: 6, p16: 6.5 },
]

function Dot() {
  return (
    <span
      style={{
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: 'var(--gold)',
        opacity: .5,
        flexShrink: 0,
        marginRight: '.8rem',
        display: 'inline-block',
      }}
    />
  )
}

function Price({ val }: { val?: number }) {
  return (
    <span
      style={{
        fontSize: '.75rem',
        fontWeight: 500,
        color: val ? 'var(--gold-lt)' : 'transparent',
        minWidth: 40,
        textAlign: 'right' as const,
      }}
    >
      {val ? `$${val.toFixed(2)}` : '—'}
    </span>
  )
}

function MenuCol({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div style={{ background: 'rgba(26,58,88,.3)', padding: '2.5rem' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--gold-lt)',
          letterSpacing: '.06em',
          marginBottom: '1.6rem',
          paddingBottom: '.8rem',
          borderBottom: '1px solid rgba(196,154,26,.2)',
        }}
      >
        {title}
      </div>

      {/* Size header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '.6rem',
          marginBottom: '.8rem',
        }}
      >
        {['8oz', '12oz', '16oz'].map(s => (
          <span
            key={s}
            style={{
              fontSize: '.55rem',
              fontWeight: 500,
              letterSpacing: '.18em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,.25)',
              minWidth: 40,
              textAlign: 'right' as const,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {items.map(item => (
        <div
          key={item.name}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '.65rem 0',
            borderBottom: '1px solid rgba(255,255,255,.05)',
          }}
        >
          <Dot />
          <span
            style={{
              flex: 1,
              fontSize: '.82rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,.75)',
              letterSpacing: '.02em',
            }}
          >
            {item.name}
            {item.note && (
              <sup style={{ fontSize: '.5rem', color: 'var(--gold-lt)', verticalAlign: 'super', marginLeft: '.15rem' }}>
                {item.note}
              </sup>
            )}
          </span>
          <div style={{ display: 'flex', gap: '.6rem', flexShrink: 0 }}>
            <Price val={item.p8} />
            <Price val={item.p12} />
            <Price val={item.p16} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MenuSection() {
  return (
    <section
      id="menu"
      style={{
        background: 'var(--navy-dk)',
        padding: '7rem 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(196,154,26,.04) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '6rem',
          alignItems: 'start',
          position: 'relative',
          zIndex: 1,
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
              color: 'var(--gold-lt)',
              marginBottom: '.9rem',
            }}
          >
            ✦ Café Menu
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-.02em',
              marginBottom: '1.5rem',
            }}
          >
            What we&apos;re{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>pouring.</em>
          </h2>
          <p
            style={{
              fontSize: '.9rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,.45)',
              lineHeight: 1.9,
              marginBottom: '2.5rem',
            }}
          >
            Every drink made with our own roasts. Seasonal syrups crafted in-house. No shortcuts, no syringe bottles.
          </p>
          <a
            href="/menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              fontSize: '.65rem',
              fontWeight: 600,
              letterSpacing: '.2em',
              textTransform: 'uppercase' as const,
              color: 'var(--navy-dk)',
              background: 'var(--gold-lt)',
              padding: '.8rem 1.6rem',
              textDecoration: 'none',
              transition: 'background .25s',
            }}
          >
            Full Menu →
          </a>
        </div>

        {/* Right — menu grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 3,
            background: 'rgba(255,255,255,.04)',
          }}
        >
          <MenuCol title="Seasonal" items={seasonal} />
          <MenuCol title="Standard" items={standard} />
        </div>
      </div>
    </section>
  )
}
