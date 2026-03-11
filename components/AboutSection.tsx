const crafts = [
  'Small-batch Roasting',
  'In-house Syrups',
  'Bag Design',
  'Mobile Café',
  'Relationship Sourcing',
  'Community Events',
]

const stats = [
  { n: '7', label: 'Coffees Roasted' },
  { n: '5+', label: 'Years in RVA' },
  { n: '1', label: 'City. Present.' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '85vh',
      }}
    >
      {/* Left — text */}
      <div
        style={{
          padding: '7rem 5rem 7rem 6rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(250,245,235,0.45), rgba(250,245,235,0.2)), url(/images/Website-Photo-3-scaled.webp)',
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
                marginBottom: '.5rem',
              }}
            >
              ✦ Who We Are
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
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
              We believe coffee is{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>presence.</em>
            </h2>
            <p
              style={{
                fontSize: '.95rem',
                fontWeight: 300,
                color: 'rgba(26,58,88,1)',
                lineHeight: 1.9,
                maxWidth: 420,
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(4px)',
                padding: '.5rem .8rem',
                margin: 0,
                marginBottom: '.5rem',
              }}
            >
              Parousia is the ancient Greek word for <strong style={{ color: 'var(--navy-dk)', fontWeight: 600 }}>presence</strong> — for showing up, being here, savoring the moment. We named our roastery after it because that&apos;s what good coffee does: it stops the rush and puts you right here, right now.
            </p>
            <p
              style={{
                fontSize: '.95rem',
                fontWeight: 300,
                color: 'rgba(26,58,88,1)',
                lineHeight: 1.9,
                maxWidth: 420,
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(4px)',
                padding: '.5rem .8rem',
                margin: 0,
              }}
            >
              We roast every bean, make every syrup, design every bag, and pour every drink ourselves — <strong style={{ color: 'var(--navy-dk)', fontWeight: 600 }}>from our Richmond roastery.</strong>
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '.5rem' }}>
            {crafts.map(c => (
              <span
                key={c}
                className="craft-chip"
                style={{
                  fontSize: '.62rem',
                  fontWeight: 500,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase' as const,
                  border: '1px solid rgba(26,58,88,.35)',
                  color: 'var(--navy-dk)',
                  padding: '.35rem .85rem',
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right — navy panel */}
      <div
        style={{
          background: 'var(--navy)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '7rem 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            pointerEvents: 'none',
          }}
        />

        {/* Quote */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '6rem',
              lineHeight: .7,
              color: 'var(--gold)',
              opacity: .4,
              marginBottom: '.5rem',
              display: 'block',
            }}
          >
            &ldquo;
          </span>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.6rem',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.55,
              maxWidth: 380,
              margin: 0,
            }}
          >
            We&apos;re not just selling coffee. We&apos;re selling a reason to stop and be here.
          </blockquote>
          <div
            style={{
              fontSize: '.65rem',
              fontWeight: 500,
              letterSpacing: '.22em',
              textTransform: 'uppercase' as const,
              color: 'var(--gold-lt)',
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '.8rem',
            }}
          >
            <span style={{ width: 24, height: 1, background: 'var(--gold-lt)', display: 'block' }} />
            Parousia Coffee, Richmond VA
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'rgba(255,255,255,.06)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {stats.map(s => (
            <div
              key={s.n}
              style={{
                background: 'rgba(26,58,88,.4)',
                padding: '1.6rem 1.2rem',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1,
                  marginBottom: '.3rem',
                }}
              >
                {s.n}
              </span>
              <span
                style={{
                  fontSize: '.58rem',
                  fontWeight: 400,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,.35)',
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
