const pressItems = [
  {
    publication: 'Richmond Magazine',
    headline: 'The New Wave of Richmond Roasters Putting the City on the Coffee Map',
    date: 'March 2025',
    category: 'Feature',
    excerpt:
      'Parousia Coffee has quietly become the roaster that other roasters talk about — small-batch, obsessive about origin, and deeply rooted in the neighborhood.',
  },
  {
    publication: 'Style Weekly',
    headline: 'Best New Coffee Shop: Parousia Coffee Takes the Gold',
    date: 'January 2025',
    category: 'Best Of',
    excerpt:
      'Readers and critics alike voted Parousia Coffee the standout newcomer of the year, citing its hospitality as much as its exceptional single-origins.',
  },
  {
    publication: 'Virginia Living',
    headline: "Rooted in Richmond: A Conversation with Parousia's Head Roaster",
    date: 'October 2024',
    category: 'Profile',
    excerpt:
      'We sat down to talk craft, community, and what it means to build something worth believing in — one cup at a time.',
  },
  {
    publication: 'Eater Richmond',
    headline: 'Where to Find the Best Specialty Coffee in RVA Right Now',
    date: 'August 2024',
    category: 'Guide',
    excerpt:
      'Parousia leads our updated list of must-visit spots for serious coffee drinkers exploring Richmond\'s thriving café scene.',
  },
  {
    publication: 'Richmond Times-Dispatch',
    headline: 'Mobile Coffee Trailer Brings Parousia to Every Corner of the City',
    date: 'June 2024',
    category: 'News',
    excerpt:
      'The beloved Scott\'s Addition roaster expands its reach with a custom-built espresso trailer, now booking for events across Central Virginia.',
  },
  {
    publication: 'Sprudge',
    headline: 'Parousia Coffee: A Richmond Roaster Worth the Pilgrimage',
    date: 'April 2024',
    category: 'Review',
    excerpt:
      "Rarely does a debut year produce coffee this assured. Parousia is already speaking with a mature voice in a city that's finally getting its due.",
  },
]

const galleryItems = [
  { src: '/images/o (6).jpg', label: 'The Roastery', aspect: 'tall' },
  { src: '/images/o (7).jpg', label: 'Golden Harvest', aspect: 'wide' },
  { src: '/images/o (8).jpg', label: 'Late Nights', aspect: 'square' },
  { src: '/images/o (9).jpg', label: 'Origin Beans', aspect: 'square' },
  { src: '/images/o (10).jpg', label: 'Morning Light', aspect: 'tall' },
  { src: '/images/o (11).jpg', label: 'Pour Over', aspect: 'wide' },
  { src: '/images/o (12).jpg', label: 'Café Interior', aspect: 'square' },
  { bg: 'linear-gradient(155deg, #4a2f1a 0%, #6b4422 50%, #8b5c2e 100%)', label: 'Espresso Pull', aspect: 'square' },
]

export default function MediaPage() {
  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--text)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          padding: '7rem 3rem 5rem',
          background: 'var(--navy-dk, #0a1929)',
          overflow: 'hidden',
        }}
      >
        {/* Texture overlay */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.02) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.02) 40px)',
            pointerEvents: 'none',
          }}
        />
        {/* Gold rule top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-lt) 50%, var(--gold) 70%, transparent)',
          }}
        />

        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '.65rem',
              fontWeight: 500,
              letterSpacing: '.4em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.5rem',
            }}
          >
            Parousia Coffee ✦ Richmond, Virginia
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: .9,
              color: '#fff',
              letterSpacing: '-.02em',
              marginBottom: '1.5rem',
            }}
          >
            Press &{' '}
            <em
              style={{
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--gold-lt)',
              }}
            >
              Media
            </em>
          </h1>

          <div
            style={{
              width: 48,
              height: 1,
              background: 'var(--gold)',
              margin: '0 auto 1.5rem',
              opacity: .6,
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,.55)',
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            Stories, coverage, and resources for journalists, editors, and content creators
            writing about Richmond's specialty coffee scene.
          </p>
        </div>
      </section>

      {/* ── PRESS STATS BAR ── */}
      <section
        style={{
          background: 'var(--cream, #f4ede0)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '0 3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
          }}
        >
          {[
            { number: '6+', label: 'Publications' },
            { number: '2024–25', label: 'Coverage Years' },
            { number: 'RVA', label: 'Based & Rooted' },
          ].map(({ number, label }, i) => (
            <div
              key={i}
              style={{
                padding: '2rem 1rem',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1,
                  marginBottom: '.3rem',
                }}
              >
                {number}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '.62rem',
                  letterSpacing: '.22em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRESS COVERAGE ── */}
      <section style={{ padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3.5rem' }}>
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
            In the Press
          </h2>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '.62rem',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              whiteSpace: 'nowrap',
            }}
          >
            Selected Coverage
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
        >
          {pressItems.map((item, i) => (
            <article
              key={i}
              className="hover-gold-bar"
              style={{
                background: 'var(--off-white)',
                padding: '2rem 2rem 1.8rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '.75rem',
                cursor: 'default',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
                  {item.category}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '.62rem',
                    color: 'var(--muted)',
                    letterSpacing: '.05em',
                  }}
                >
                  {item.date}
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '.72rem',
                  fontWeight: 600,
                  letterSpacing: '.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  margin: 0,
                }}
              >
                {item.publication}
              </p>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: 'var(--navy)',
                  margin: 0,
                  letterSpacing: '-.01em',
                }}
              >
                {item.headline}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '.85rem',
                  lineHeight: 1.65,
                  color: 'var(--muted)',
                  margin: 0,
                  flex: 1,
                }}
              >
                {item.excerpt}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.4rem',
                  marginTop: '.5rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '.62rem',
                  fontWeight: 500,
                  letterSpacing: '.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                <span>Read Article</span>
                <span style={{ fontSize: '.7rem' }}>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section
        style={{
          padding: '5rem 3rem 6rem',
          background: 'var(--navy-dk, #0a1929)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-.02em',
                whiteSpace: 'nowrap',
              }}
            >
              Photo Gallery
            </h2>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.08)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '.62rem',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.35)',
                whiteSpace: 'nowrap',
              }}
            >
              Hi-Res Available on Request
            </span>
          </div>

          {/* Masonry-style grid using CSS grid areas */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(3, 160px)',
              gap: 4,
            }}
          >
            {/* Item 0: tall left */}
            <div
              style={{
                gridColumn: '1',
                gridRow: '1 / 3',
                background: galleryItems[0].bg,
                backgroundImage: galleryItems[0].src ? `url('${galleryItems[0].src}')` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="ig-tile"
            >
              <div className="ig-tile-inner" style={{ width: '100%', height: '100%' }} />
              <div
                className="ig-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10,25,41,.55)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}>
                  {galleryItems[0].label}
                </span>
              </div>
            </div>

            {/* Item 1: wide top-center */}
            <div
              style={{
                gridColumn: '2 / 4',
                gridRow: '1',
                background: galleryItems[1].bg,
                backgroundImage: galleryItems[1].src ? `url('${galleryItems[1].src}')` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="ig-tile"
            >
              <div className="ig-tile-inner" style={{ width: '100%', height: '100%' }} />
              <div
                className="ig-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10,25,41,.45)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}>
                  {galleryItems[1].label}
                </span>
              </div>
            </div>

            {/* Item 2: top right */}
            <div
              style={{
                gridColumn: '4',
                gridRow: '1 / 3',
                background: galleryItems[2].bg,
                backgroundImage: galleryItems[2].src ? `url('${galleryItems[2].src}')` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="ig-tile"
            >
              <div className="ig-tile-inner" style={{ width: '100%', height: '100%' }} />
              <div
                className="ig-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10,25,41,.55)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}>
                  {galleryItems[2].label}
                </span>
              </div>
            </div>

            {/* Items 3 & 4: middle row center squares */}
            {[3, 4].map((idx) => (
              <div
                key={idx}
                style={{
                  gridColumn: idx === 3 ? '2' : '3',
                  gridRow: '2',
                  background: galleryItems[idx].bg,
                  backgroundImage: galleryItems[idx].src ? `url('${galleryItems[idx].src}')` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="ig-tile"
              >
                <div className="ig-tile-inner" style={{ width: '100%', height: '100%' }} />
                <div
                  className="ig-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10,25,41,.5)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '.75rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}>
                    {galleryItems[idx].label}
                  </span>
                </div>
              </div>
            ))}

            {/* Bottom row: full width split into 3 */}
            {[5, 6, 7].map((idx, pos) => (
              <div
                key={idx}
                style={{
                  gridColumn: pos === 0 ? '1 / 3' : pos === 1 ? '3' : '4',
                  gridRow: '3',
                  background: galleryItems[idx].bg,
                  backgroundImage: galleryItems[idx].src ? `url('${galleryItems[idx].src}')` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="ig-tile"
              >
                <div className="ig-tile-inner" style={{ width: '100%', height: '100%' }} />
                <div
                  className="ig-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10,25,41,.5)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '.75rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}>
                    {galleryItems[idx].label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '.75rem',
              color: 'rgba(255,255,255,.3)',
              textAlign: 'center',
              marginTop: '1.5rem',
              letterSpacing: '.08em',
            }}
          >
            High-resolution photography available for editorial use. Contact press@parousiacoffee.com.
          </p>
        </div>
      </section>

      {/* ── BRAND ASSETS ── */}
      <section style={{ padding: '5rem 3rem', background: 'var(--cream, #f4ede0)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--navy)',
                letterSpacing: '-.02em',
              }}
            >
              Brand Assets
            </h2>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              { title: 'Primary Logo', desc: 'SVG + PNG, light & dark variants', icon: '✦' },
              { title: 'Brand Colors', desc: 'Hex, RGB, and Pantone values', icon: '◈' },
              { title: 'Typography Guide', desc: 'Approved typefaces and usage', icon: '▲' },
              { title: 'Photography Pack', desc: '20+ hi-res editorial images', icon: '◉' },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="hover-gold-bar"
                style={{
                  background: 'var(--off-white)',
                  border: '1px solid var(--border)',
                  padding: '1.75rem 1.5rem',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem',
                    color: 'var(--gold)',
                    marginBottom: '.75rem',
                    lineHeight: 1,
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '.4rem',
                    letterSpacing: '-.01em',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '.78rem',
                    color: 'var(--muted)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
                <div
                  style={{
                    marginTop: '1rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '.6rem',
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 600,
                  }}
                >
                  Download →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS CONTACT ── */}
      <section
        style={{
          padding: '6rem 3rem',
          background: 'var(--navy)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative star */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: '6%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(8rem, 18vw, 16rem)',
            color: 'rgba(255,255,255,.02)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          ✦
        </div>

        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '.62rem',
              letterSpacing: '.35em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.25rem',
              fontWeight: 500,
            }}
          >
            Press Inquiries
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-.02em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Let's Tell the{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold-lt)' }}>
              Story
            </em>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '.9rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,.5)',
              marginBottom: '2.5rem',
              maxWidth: 420,
              margin: '0 auto 2.5rem',
            }}
          >
            For interview requests, press kits, photography, or collaboration inquiries,
            reach out directly. We respond within one business day.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.75rem',
              alignItems: 'center',
            }}
          >
            <a
              href="mailto:press@parousiacoffee.com"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body)',
                fontSize: '.7rem',
                fontWeight: 600,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--navy)',
                background: 'var(--gold-lt)',
                padding: '1rem 2.5rem',
                textDecoration: 'none',
                transition: 'background .2s',
              }}
            >
              press@parousiacoffee.com
            </a>

            <div
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '.5rem',
              }}
            >
              {[
                { label: 'Instagram', href: 'https://instagram.com/parousiacoffee' },
                { label: 'Download Press Kit', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '.62rem',
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.45)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    borderBottom: '1px solid rgba(255,255,255,.15)',
                    paddingBottom: '.15rem',
                    transition: 'color .2s, border-color .2s',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
