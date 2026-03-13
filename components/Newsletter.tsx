export default function Newsletter() {
  return (
    <section
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(244,237,224,.64) 0%, rgba(244,237,224,.44) 40%, rgba(244,237,224,.12) 70%, rgba(244,237,224,0) 100%), url("/images/o (4).jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'normal',
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
            fontWeight: 400,
            color: 'var(--navy-dk)',
            lineHeight: 1.8,
          }}
        >
          Drop drops, seasonal menus, and trailer stops — straight to your inbox before anyone else hears about it.
        </p>
      </div>

      {/* Right — CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <a
          href="https://parousiacoffee.kit.com/16c43d7db7"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.6rem',
            background: 'var(--navy)',
            border: '1.5px solid var(--navy)',
            padding: '1rem 2.2rem',
            fontFamily: 'var(--font-body)',
            fontSize: '.68rem',
            fontWeight: 600,
            letterSpacing: '.2em',
            textTransform: 'uppercase' as const,
            color: '#fff',
            textDecoration: 'none',
            transition: 'background .25s, color .25s',
            alignSelf: 'flex-start',
          }}
        >
          Sign Up for Updates →
        </a>
        <p
          style={{
            fontSize: '.65rem',
            fontWeight: 400,
            color: 'var(--navy-dk)',
            letterSpacing: '.04em',
          }}
        >
          No spam. Unsubscribe anytime. We hate junk mail too.
        </p>
      </div>
    </section>
  )
}
