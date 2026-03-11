import ShopGrid from './ShopGrid'

export const metadata = {
  title: 'Shop — Parousia Coffee',
  description: 'Small-batch coffees roasted in Richmond, VA. Shop our blends and single origins.',
}

export default function ShopPage() {
  return (
    <main>
      {/* ── Page header ── */}
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url(/images/485362378_974330318182545_6571700237192827153_n.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '7rem 6rem 5rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(245, 240, 230, 0.82)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6rem',
            background: 'linear-gradient(to bottom, transparent, var(--off-white))',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              fontSize: '.6rem',
              fontWeight: 600,
              letterSpacing: '.3em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '.9rem',
            }}
          >
            ✦ The Lineup
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              color: 'var(--navy-dk)',
              lineHeight: 1,
              letterSpacing: '-.02em',
              marginBottom: '1.2rem',
            }}
          >
            Our{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>coffees.</em>
          </h1>
          <p
            style={{
              fontSize: '.95rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: 480,
            }}
          >
            Every bag is roasted to order in Richmond, VA — small batches, serious craft, no compromises.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid (client) ── */}
      <div style={{ background: 'var(--off-white)', paddingTop: '4rem' }}>
        <ShopGrid />
      </div>

      {/* ── Bottom CTA strip ── */}
      <section
        style={{
          background: 'var(--navy-dk)',
          padding: '6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{ color: 'var(--gold-lt)', fontSize: '1.1rem' }}
          aria-hidden
        >
          ✦
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-.02em',
          }}
        >
          Can&apos;t decide?
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.1rem',
            color: 'var(--gold-lt)',
            marginBottom: '.5rem',
          }}
        >
          Start where we did.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.6rem',
            fontFamily: 'var(--font-body)',
            fontSize: '.68rem',
            fontWeight: 600,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            padding: '.9rem 2rem',
            background: 'var(--gold-lt)',
            color: 'var(--navy-dk)',
            border: '1.5px solid var(--gold-lt)',
            transition: 'all .28s cubic-bezier(.4,0,.2,1)',
          }}
        >
          Try the Cornerstone Blend →
        </a>
      </section>
    </main>
  )
}
