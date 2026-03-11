const items = [
  'Cornerstone Blend',
  'MorningStar Blend',
  'Los Hermanos',
  'Rwanda Shyira',
  'Bali Kintamani',
  'Symphony Blend',
  'Pillar of Smoke',
  'Roasted in RVA',
]

// Double it so the seamless loop works
const doubled = [...items, ...items]

export default function CoffeeMarquee() {
  return (
    <div
      style={{
        background: 'var(--navy-dk)',
        padding: '.7rem 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,.04)',
      }}
    >
      <div className="animate-marquee" style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0 2rem',
              fontSize: '.6rem',
              fontWeight: 400,
              letterSpacing: '.22em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,.4)',
            }}
          >
            {item}
            <span style={{ color: 'var(--gold-lt)', fontSize: '.65rem' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
