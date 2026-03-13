import Link from 'next/link'

const crafts = [
  {
    title: 'Small-batch Roasting',
    body: 'Every bean roasted fresh at our Richmond roastery. No warehouse stockpiles. No shortcuts.',
    num: '01',
  },
  {
    title: 'In-house Syrups',
    body: 'All seasonal syrups made from scratch in-house. What you taste, we made — start to finish.',
    num: '02',
  },
  {
    title: 'Bag Design',
    body: "We design every bag ourselves. The packaging is as intentional as what's inside it.",
    num: '03',
  },
  {
    title: 'Mobile Café',
    body: 'Our custom trailer brings the full Parousia experience wherever Richmond gathers.',
    num: '04',
  },
  {
    title: 'Relationship Sourcing',
    body: 'Direct relationships with the farms we buy from. We know where our coffee comes from.',
    num: '05',
  },
  {
    title: 'Community Events',
    body: 'Markets, pop-ups, private events — we show up so you can too.',
    num: '06',
  },
]

const stats = [
  { n: '7',   label: 'Coffees Roasted' },
  { n: '5+',  label: 'Years in RVA' },
  { n: '1',   label: 'City. Present.' },
]

const events = [
  { name: "Scott's Addition Farmers Market", detail: 'Every Saturday · 8am – 1pm' },
  { name: 'Church Hill Pop-up',             detail: 'Monthly — follow us for dates' },
  { name: 'Private Events & Weddings',      detail: 'Inquire to book' },
  { name: 'Corporate Catering',             detail: 'Half-day & full-day rates available' },
]

const hours = [
  { day: 'Monday – Friday', time: '6:30 AM – 4:00 PM' },
  { day: 'Saturday',        time: '7:30 AM – 4:00 PM' },
  { day: 'Sunday',          time: '10:00 AM – 3:00 PM' },
]

export default function AboutPage() {
  return (
    <main style={{ fontFamily: 'var(--font-body)', background: 'var(--cream)' }}>

      {/* ══════════════════════════════════════════
          HEADER BAR
      ══════════════════════════════════════════ */}
      <div
        style={{
          background: 'var(--navy-dk)',
          borderBottom: '1px solid rgba(196,154,26,.2)',
          padding: '.9rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
        }}
      >
        <span style={{ width: 28, height: 1, background: 'rgba(196,154,26,.4)', display: 'block' }} />
        <Link
          href="/"
          style={{
            fontSize: '.58rem',
            fontWeight: 600,
            letterSpacing: '.35em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.5)',
            textDecoration: 'none',
          }}
        >
          Parousia Coffee
        </Link>
        <span style={{ color: 'rgba(196,154,26,.4)', fontSize: '.6rem' }}>·</span>
        <span
          style={{
            fontSize: '.58rem',
            fontWeight: 600,
            letterSpacing: '.35em',
            textTransform: 'uppercase',
            color: 'var(--gold-lt)',
          }}
        >
          About
        </span>
        <span style={{ width: 28, height: 1, background: 'rgba(196,154,26,.4)', display: 'block' }} />
      </div>

      {/* ══════════════════════════════════════════
          HERO — The Name / Origin Story
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--navy-dk)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '88vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(196,154,26,.035) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        {/* Greek watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '-3rem',
            left: '-2rem',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(6rem, 14vw, 14rem)',
            fontWeight: 900,
            color: 'rgba(255,255,255,.022)',
            userSelect: 'none',
            pointerEvents: 'none',
            lineHeight: 1,
            letterSpacing: '-.02em',
            zIndex: 0,
          }}
        >
          παρουσία
        </div>

        {/* LEFT — Story */}
        <div
          style={{
            padding: '3rem 4rem 3rem 5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.7rem',
              marginBottom: '2rem',
            }}
          >
            <span
              className="animate-star-pulse"
              style={{ fontSize: '.75rem', color: 'var(--gold)' }}
            >
              ✦
            </span>
            <span
              style={{
                fontSize: '.56rem',
                fontWeight: 600,
                letterSpacing: '.32em',
                textTransform: 'uppercase',
                color: 'var(--gold-lt)',
              }}
            >
              Who We Are
            </span>
          </div>

          {/* Greek word display */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,.25)',
              letterSpacing: '.06em',
              marginBottom: '.6rem',
            }}
          >
            παρουσία
          </div>

          {/* Definition line */}
          <div
            style={{
              fontSize: '.62rem',
              fontWeight: 400,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '.8rem',
            }}
          >
            <span style={{ width: 18, height: 1, background: 'var(--gold)', opacity: .5, display: 'block', flexShrink: 0 }} />
            Greek · noun · presence
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 900,
              lineHeight: .95,
              letterSpacing: '-.02em',
              color: '#fff',
              marginBottom: '2.5rem',
            }}
          >
            Rooted in{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>Richmond.</em>
            <br />
            Present in{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,.55)' }}>every cup.</em>
          </h1>

          <p
            style={{
              fontSize: '.95rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,.5)',
              lineHeight: 2,
              maxWidth: 440,
              marginBottom: '1.4rem',
            }}
          >
            Parousia is the ancient Greek word for{' '}
            <strong style={{ color: '#fff', fontWeight: 500 }}>presence</strong> — for showing up,
            being here, savoring the moment. We named our roastery after it because that's what good
            coffee does: it stops the rush and puts you right here, right now.
          </p>

          <p
            style={{
              fontSize: '.95rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,.5)',
              lineHeight: 2,
              maxWidth: 440,
              marginBottom: '3rem',
            }}
          >
            We roast every bean, craft every syrup, design every bag, and pour every drink ourselves —{' '}
            <strong style={{ color: '#fff', fontWeight: 500 }}>from our Richmond roastery.</strong> No
            outsourcing. No compromise. Just coffee that earns your full attention.
          </p>

          {/* Since pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.7rem',
              padding: '.6rem 1.2rem',
              border: '1px solid rgba(196,154,26,.25)',
              alignSelf: 'flex-start',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
            <span
              style={{
                fontSize: '.6rem',
                fontWeight: 500,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.45)',
              }}
            >
              Roasting in RVA since 2019
            </span>
          </div>
        </div>

        {/* RIGHT — Quote + Stats */}
        <div
          style={{
            background: 'rgba(255,255,255,.025)',
            borderLeft: '1px solid rgba(255,255,255,.05)',
            padding: '3rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Pull quote */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '5rem',
                lineHeight: .7,
                color: 'var(--gold)',
                opacity: .4,
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              &ldquo;
            </span>
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
                fontWeight: 300,
                color: '#fff',
                lineHeight: 1.55,
                maxWidth: 380,
                margin: '0 0 2rem',
              }}
            >
              We&apos;re not just selling coffee. We&apos;re selling a reason to stop and be here.
            </blockquote>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.8rem',
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 1,
                  background: 'var(--gold-lt)',
                  display: 'block',
                }}
              />
              <span
                style={{
                  fontSize: '.62rem',
                  fontWeight: 500,
                  letterSpacing: '.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-lt)',
                }}
              >
                Parousia Coffee · Richmond, VA
              </span>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              background: 'rgba(255,255,255,.06)',
              marginTop: '4rem',
            }}
          >
            {stats.map(s => (
              <div
                key={s.n}
                style={{
                  background: 'rgba(10,25,41,.5)',
                  padding: '2rem 1.2rem',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1,
                    marginBottom: '.4rem',
                  }}
                >
                  {s.n}
                </span>
                <span
                  style={{
                    fontSize: '.55rem',
                    fontWeight: 400,
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.3)',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BELIEF BAND
      ══════════════════════════════════════════ */}
      <div
        style={{
          background: 'var(--gold)',
          padding: '2rem 4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <span
          style={{
            width: 40,
            height: 1,
            background: 'rgba(10,25,41,.3)',
            display: 'block',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 300,
            color: 'var(--navy-dk)',
            margin: 0,
            letterSpacing: '.02em',
          }}
        >
          We believe coffee is <strong style={{ fontWeight: 900, fontStyle: 'normal' }}>presence.</strong>
        </p>
        <span
          style={{
            width: 40,
            height: 1,
            background: 'rgba(10,25,41,.3)',
            display: 'block',
          }}
        />
      </div>

      {/* ══════════════════════════════════════════
          WHAT WE DO — 6 Crafts
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--cream)',
          padding: '3rem 5rem',
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.7rem',
              marginBottom: '1.2rem',
            }}
          >
            <span
              className="animate-star-pulse"
              style={{ fontSize: '.75rem', color: 'var(--gold)' }}
            >
              ✦
            </span>
            <span
              style={{
                fontSize: '.56rem',
                fontWeight: 600,
                letterSpacing: '.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              How We Do It
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 900,
              lineHeight: .95,
              letterSpacing: '-.02em',
              color: 'var(--navy-dk)',
              maxWidth: 560,
            }}
          >
            Every part of it,{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>ourselves.</em>
          </h2>
        </div>

        {/* Craft grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(26,58,88,.1)',
            border: '1px solid rgba(26,58,88,.1)',
          }}
        >
          {crafts.map(c => (
            <div
              key={c.num}
              className="hover-gold-bar"
              style={{
                background: 'var(--cream)',
                padding: '2.8rem 2.6rem',
                position: 'relative',
                borderTop: '3px solid var(--gold)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '.6rem',
                  fontWeight: 700,
                  letterSpacing: '.25em',
                  color: 'rgba(26,58,88,.18)',
                  marginBottom: '1.4rem',
                  textTransform: 'uppercase',
                }}
              >
                {c.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--navy-dk)',
                  lineHeight: 1.2,
                  marginBottom: '.8rem',
                }}
              >
                {c.title}
              </div>
              <div
                style={{
                  fontSize: '.8rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE TRAILER — Mobile Café
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--off-white)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderTop: '1px solid var(--border)',
        }}
      >
        {/* LEFT — Events */}
        <div
          style={{
            padding: '3rem 4rem 3rem 5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.7rem',
              marginBottom: '1.8rem',
            }}
          >
            <span
              className="animate-star-pulse"
              style={{ fontSize: '.75rem', color: 'var(--gold)' }}
            >
              ✦
            </span>
            <span
              style={{
                fontSize: '.56rem',
                fontWeight: 600,
                letterSpacing: '.32em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              On The Road
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 900,
              lineHeight: .95,
              letterSpacing: '-.02em',
              color: 'var(--navy-dk)',
              marginBottom: '1.2rem',
            }}
          >
            The{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>mobile</em>{' '}
            café.
          </h2>

          <p
            style={{
              fontSize: '.9rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.9,
              maxWidth: 400,
              marginBottom: '3rem',
            }}
          >
            Our custom trailer brings the full Parousia experience wherever Richmond gathers —
            markets, pop-ups, private events, and corporate functions. If you can't come to us, we'll
            come to you.
          </p>

          {/* Event list */}
          <div style={{ marginBottom: '2.5rem' }}>
            {events.map((e, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '.9rem 0',
                  borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                  borderBottom: '1px solid var(--border)',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    fontSize: '.85rem',
                    fontWeight: 600,
                    color: 'var(--navy-dk)',
                    lineHeight: 1.3,
                  }}
                >
                  {e.name}
                </div>
                <div
                  style={{
                    fontSize: '.7rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    flexShrink: 0,
                    textAlign: 'right',
                  }}
                >
                  {e.detail}
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
              textTransform: 'uppercase',
              color: '#fff',
              background: 'var(--navy)',
              padding: '.9rem 1.8rem',
              textDecoration: 'none',
              alignSelf: 'flex-start',
              fontFamily: 'var(--font-body)',
            }}
          >
            Book the Trailer →
          </a>
        </div>

        {/* RIGHT — Dark display panel */}
        <div
          style={{
            background: 'var(--navy-dk)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 4rem',
            position: 'relative',
            overflow: 'hidden',
            gap: '3rem',
          }}
        >
          {/* Dot grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(196,154,26,.04) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              pointerEvents: 'none',
            }}
          />
          {/* Animated rings */}
          {[360, 260, 160].map((size, i) => (
            <div
              key={size}
              style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: '50%',
                border: '1px solid rgba(196,154,26,.07)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `ring-breathe 6s ease-in-out infinite ${i * 0.6}s`,
              }}
            />
          ))}

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <span
              className="animate-star-pulse"
              style={{
                fontSize: '2.5rem',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: '1.5rem',
              }}
            >
              ✦
            </span>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '.6rem',
              }}
            >
              On The Road
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
                color: 'var(--gold)',
                marginBottom: '2rem',
              }}
            >
              wherever Richmond gathers
            </div>
            <div
              style={{
                fontSize: '.65rem',
                fontWeight: 400,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.3)',
                lineHeight: 2,
              }}
            >
              Markets · Pop-ups<br />
              Private Events · Corporate
            </div>
          </div>

          <a
            href="mailto:hello@parousiacoffee.com"
            style={{
              position: 'relative',
              zIndex: 1,
              fontSize: '.62rem',
              fontWeight: 600,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-lt)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(224,184,50,.4)',
              paddingBottom: '.2rem',
              fontFamily: 'var(--font-body)',
            }}
          >
            hello@parousiacoffee.com →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FIND US — Location + Hours
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--navy-mid)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* LEFT — Address + Hours */}
        <div
          style={{
            padding: '3rem 4rem 3rem 5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.7rem',
              marginBottom: '1.8rem',
            }}
          >
            <span style={{ fontSize: '.75rem', color: 'var(--gold)' }}>◎</span>
            <span
              style={{
                fontSize: '.56rem',
                fontWeight: 600,
                letterSpacing: '.32em',
                textTransform: 'uppercase',
                color: 'var(--gold-lt)',
              }}
            >
              Find Us
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 900,
              lineHeight: .95,
              letterSpacing: '-.02em',
              color: '#fff',
              marginBottom: '2.5rem',
            }}
          >
            Come{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>visit.</em>
          </h2>

          <address
            style={{
              fontStyle: 'normal',
              marginBottom: '2.5rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,.55)',
                lineHeight: 1.7,
                marginBottom: '.8rem',
              }}
            >
              2900 W Clay St, Suite B<br />
              Richmond, Virginia 23230
            </div>
            <div
              style={{
                fontSize: '.65rem',
                fontWeight: 400,
                color: 'rgba(255,255,255,.3)',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                marginBottom: '.6rem',
              }}
            >
              Scott's Addition
            </div>
            <a
              href="mailto:hello@parousiacoffee.com"
              style={{
                fontSize: '.78rem',
                fontWeight: 400,
                color: 'var(--gold-lt)',
                textDecoration: 'none',
                letterSpacing: '.04em',
              }}
            >
              hello@parousiacoffee.com
            </a>
          </address>

          {/* Hours table */}
          <div>
            <div
              style={{
                fontSize: '.52rem',
                fontWeight: 600,
                letterSpacing: '.28em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.2)',
                marginBottom: '.8rem',
              }}
            >
              Hours
            </div>
            {hours.map(h => (
              <div
                key={h.day}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '.7rem 0',
                  borderBottom: '1px solid rgba(255,255,255,.06)',
                }}
              >
                <span
                  style={{
                    fontSize: '.72rem',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,.45)',
                    letterSpacing: '.08em',
                  }}
                >
                  {h.day}
                </span>
                <span
                  style={{
                    fontSize: '.78rem',
                    fontWeight: 500,
                    color: 'var(--gold-lt)',
                  }}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Map art + Directions CTA */}
        <div
          style={{
            padding: '3rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {/* Stylized map */}
          <div
            style={{
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(255,255,255,.07)',
              height: 280,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
                `,
                backgroundSize: '28px 28px',
              }}
            />
            {/* Streets */}
            <div style={{ position: 'absolute', height: 3, background: 'rgba(255,255,255,.06)', top: '42%', left: 0, right: 0 }} />
            <div style={{ position: 'absolute', height: 3, background: 'rgba(255,255,255,.06)', top: '67%', left: 0, right: 0 }} />
            <div style={{ position: 'absolute', width: 3, background: 'rgba(255,255,255,.06)', left: '35%', top: 0, bottom: 0 }} />
            <div style={{ position: 'absolute', width: 3, background: 'rgba(255,255,255,.06)', left: '65%', top: 0, bottom: 0 }} />
            {/* Pin */}
            <div
              style={{
                position: 'absolute',
                top: 'calc(42% - 22px)',
                left: 'calc(35% - 11px)',
                zIndex: 2,
              }}
            >
              <div
                className="map-pin-head"
                style={{
                  width: 22,
                  height: 22,
                  background: 'var(--gold-lt)',
                  borderRadius: '50% 50% 50% 0',
                  transform: 'rotate(-45deg)',
                  boxShadow: '0 4px 16px rgba(196,154,26,.4)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: 7,
                    height: 7,
                    background: 'var(--navy-dk)',
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                  }}
                />
              </div>
            </div>
            {/* Label */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.08)',
                padding: '.5rem 1rem',
                fontSize: '.6rem',
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.4)',
                whiteSpace: 'nowrap',
              }}
            >
              Scott&apos;s Addition · Richmond, VA
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=2900+W+Clay+St+Suite+B+Richmond+VA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              fontSize: '.65rem',
              fontWeight: 600,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--navy-dk)',
              background: 'var(--gold-lt)',
              padding: '.9rem 1.8rem',
              textDecoration: 'none',
              alignSelf: 'flex-start',
              fontFamily: 'var(--font-body)',
            }}
          >
            Get Directions →
          </a>

          <p
            style={{
              fontSize: '.72rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,.25)',
              lineHeight: 1.8,
              margin: 0,
              maxWidth: 320,
            }}
          >
            Located in Scott&apos;s Addition, Richmond&apos;s most vibrant neighborhood. Street parking
            available on W Clay St and surrounding blocks.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER CTA STRIP
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--cream)',
          borderTop: '1px solid var(--border)',
          padding: '3rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.7rem',
          }}
        >
          <span style={{ width: 32, height: 1, background: 'rgba(196,154,26,.4)', display: 'block' }} />
          <span
            className="animate-star-pulse"
            style={{ fontSize: '.75rem', color: 'var(--gold)' }}
          >
            ✦
          </span>
          <span style={{ width: 32, height: 1, background: 'rgba(196,154,26,.4)', display: 'block' }} />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: .95,
            letterSpacing: '-.02em',
            color: 'var(--navy-dk)',
            margin: 0,
          }}
        >
          Come find us.{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>Order online.</em>
          <br />
          Be present.
        </h2>

        <p
          style={{
            fontSize: '.88rem',
            fontWeight: 300,
            color: 'var(--muted)',
            lineHeight: 1.9,
            maxWidth: 440,
            margin: 0,
          }}
        >
          Whether you're stopping in at the roastery, catching us at the market, or having a bag
          shipped to your door — we&apos;re here to help you slow down and taste something worth
          your full attention.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
          <Link
            href="/menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              padding: '1rem 2.2rem',
              background: 'var(--navy)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '.65rem',
              fontWeight: 600,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
            }}
          >
            View Menu →
          </Link>
          <Link
            href="/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.6rem',
              padding: '1rem 2.2rem',
              background: 'transparent',
              color: 'var(--navy)',
              border: '1.5px solid rgba(26,58,88,.3)',
              textDecoration: 'none',
              fontSize: '.65rem',
              fontWeight: 600,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
            }}
          >
            Shop Coffees →
          </Link>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '.85rem',
            fontWeight: 300,
            color: 'rgba(26,58,88,.3)',
            margin: '1rem 0 0',
            letterSpacing: '.04em',
          }}
        >
          Enjoy the Present.
        </p>
      </section>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          section[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
