const events = [
  { emoji: '🌿', name: "Scott's Addition Farmers Market", type: 'Every Saturday, 8am – 1pm' },
  { emoji: '🏙️', name: 'Church Hill Pop-up',             type: 'Monthly — follow us for dates' },
  { emoji: '🎉', name: 'Private Events & Weddings',      type: 'Inquire to book' },
  { emoji: '🏢', name: 'Corporate Catering',             type: 'Half-day & full-day rates available' },
]

const TrailerSVG = () => (
  <svg viewBox="0 0 500 270" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '88%', maxWidth: 480, position: 'relative', zIndex: 3 }}>

    {/* ── Hitch arm (left) ── */}
    <rect x="0" y="153" width="40" height="10" rx="5" fill="#0f2338" />
    <circle cx="4" cy="158" r="9" fill="#0a1929" stroke="#1a3a58" strokeWidth="1.5" />

    {/* ── Trailer body ── */}
    <rect x="32" y="72" width="436" height="160" rx="3" fill="#1a3a58" />

    {/* ── Gold awning ── */}
    <rect x="22" y="44" width="456" height="38" rx="2" fill="#c49a1a" />
    <text
      x="250" y="68"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="rgba(255,255,255,.9)"
      fontFamily="Georgia, serif"
      letterSpacing="4"
    >
      ✦ PAROUSIA COFFEE ✦
    </text>

    {/* ── Interior window (cream) ── */}
    <rect x="62" y="88" width="376" height="118" rx="2" fill="#e8dfc8" />

    {/* ── Equipment silhouettes (left side of window) ── */}
    {/* Tall unit */}
    <rect x="82" y="108" width="26" height="78" rx="2" fill="#0f2338" />
    {/* Medium unit */}
    <rect x="116" y="122" width="26" height="64" rx="2" fill="#0f2338" />
    {/* Short unit */}
    <rect x="150" y="138" width="22" height="48" rx="2" fill="#0f2338" />
    {/* Small detail on tall unit */}
    <rect x="87" y="114" width="16" height="8" rx="1" fill="#1a3a58" />
    <rect x="87" y="128" width="16" height="4" rx="1" fill="#1a3a58" />

    {/* ── Barista person silhouette (center-right of window) ── */}
    {/* Head */}
    <circle cx="300" cy="118" r="22" fill="#c49a1a" opacity="0.85" />
    {/* Body */}
    <ellipse cx="300" cy="175" rx="32" ry="42" fill="#c49a1a" opacity="0.85" />

    {/* ── Counter shelf at window bottom ── */}
    <rect x="62" y="204" width="376" height="6" rx="1" fill="#0f2338" opacity="0.3" />

    {/* ── Left wheel ── */}
    <circle cx="108" cy="240" r="38" fill="#0f2338" />
    <circle cx="108" cy="240" r="26" fill="#0a1929" />
    <circle cx="108" cy="240" r="10" fill="#c49a1a" />
    <circle cx="108" cy="240" r="5"  fill="#0a1929" />

    {/* ── Right wheel ── */}
    <circle cx="392" cy="240" r="38" fill="#0f2338" />
    <circle cx="392" cy="240" r="26" fill="#0a1929" />
    <circle cx="392" cy="240" r="10" fill="#c49a1a" />
    <circle cx="392" cy="240" r="5"  fill="#0a1929" />

    {/* ── Axle bar between wheels ── */}
    <rect x="108" y="237" width="284" height="6" rx="3" fill="#0a1929" />

  </svg>
)

export default function TrailerSection() {
  return (
    <section
      style={{
        background: 'var(--off-white)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {/* Left — visual */}
      <div
        style={{
          background: 'linear-gradient(145deg, #0a1929 0%, #1a3a58 100%)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 520,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(196,154,26,.06) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            pointerEvents: 'none',
          }}
        />
        {/* Animated rings */}
        {[400, 300, 200].map((size, i) => (
          <div
            key={size}
            style={{
              position: 'absolute',
              width: size,
              height: size,
              top: '50%',
              left: '50%',
              borderRadius: '50%',
              border: '1px solid rgba(196,154,26,.08)',
              animation: `ring-breathe 6s ease-in-out infinite ${i * 0.5}s`,
            }}
          />
        ))}
        <TrailerSVG />
      </div>

      {/* Right — info */}
      <div
        style={{
          padding: '7rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(250,248,244,0.54), rgba(250,248,244,0.35)), url("/images/o%20(1).jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-start',
            width: 'fit-content',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: '2.5rem',
            }}
          >
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
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(4px)',
                padding: '.5rem .8rem',
                width: 'fit-content',
              }}
            >
              ✦ On The Road
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                color: 'var(--navy-dk)',
                lineHeight: 1,
                letterSpacing: '-.02em',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(4px)',
                padding: '.5rem .8rem',
                width: 'fit-content',
                margin: 0,
                marginBottom: '.5rem',
              }}
            >
              The{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>mobile</em> café.
            </h2>
            <p
              style={{
                fontSize: '.95rem',
                fontWeight: 300,
                color: 'var(--navy-dk)',
                lineHeight: 1.9,
                maxWidth: 420,
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(4px)',
                padding: '.5rem .8rem',
                margin: 0,
              }}
            >
              Our custom trailer brings the full Parousia experience wherever Richmond gathers — markets, pop-ups, private events, and corporate functions.
            </p>
          </div>

          {/* Event list */}
          <div>
            {events.map((e, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  padding: '.95rem .6rem',
                  borderBottom: '1px solid var(--border)',
                  borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{e.emoji}</span>
                <div>
                  <div
                    style={{
                      fontSize: '.85rem',
                      fontWeight: 600,
                      color: 'var(--navy-dk)',
                      lineHeight: 1.2,
                    }}
                  >
                    {e.name}
                  </div>
                  <div style={{ fontSize: '.72rem', fontWeight: 300, color: 'var(--muted)' }}>
                    {e.type}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="mailto:hello@parousiacoffee.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              fontSize: '.65rem',
              fontWeight: 600,
              letterSpacing: '.2em',
              textTransform: 'uppercase' as const,
              color: '#fff',
              background: 'var(--navy)',
              padding: '.9rem 1.8rem',
              textDecoration: 'none',
              marginTop: '2rem',
              alignSelf: 'flex-start',
              transition: 'background .25s',
            }}
          >
            Book the Trailer →
          </a>
        </div>
      </div>
    </section>
  )
}
