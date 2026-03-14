'use client'

import { useState } from 'react'

const hours = [
  { day: 'Monday–Friday', time: '6:30 AM – 4:00 PM' },
  { day: 'Saturday',      time: '7:30 AM – 4:00 PM' },
  { day: 'Sunday',        time: '10:00 AM – 3:00 PM' },
]

interface Cup { id: number; tx: number; ty: number; rot: number; dur: number }
let _id = 0

function burst(): Cup[] {
  return Array.from({ length: 10 }, (_, i) => {
    const angle = (360 / 10) * i + (Math.random() * 24 - 12)
    const dist  = 52 + Math.random() * 48
    const rad   = (angle * Math.PI) / 180
    return {
      id:  _id++,
      tx:  Math.cos(rad) * dist,
      ty:  Math.sin(rad) * dist,
      rot: Math.random() * 360 - 180,
      dur: 0.52 + Math.random() * 0.22,
    }
  })
}

export default function LocationSection() {
  const [cups, setCups] = useState<Cup[]>([])

  function handlePinClick() {
    setCups(prev => [...prev, ...burst()])
  }

  function removeCup(id: number) {
    setCups(prev => prev.filter(c => c.id !== id))
  }
  return (
    <section
      id="location"
      style={{
        background: 'var(--navy-mid)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {/* Left — address + hours */}
      <div
        style={{
          padding: '5rem 4rem 5rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
            color: 'var(--gold-lt)',
            marginBottom: '.9rem',
          }}
        >
          ✦ Find Us
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-.02em',
            marginBottom: '2rem',
          }}
        >
          Come{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>visit.</em>
        </h2>

        <address
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,.55)',
            lineHeight: 1.7,
            marginBottom: '.5rem',
            fontFeatureSettings: 'normal',
          }}
        >
          2900 W Clay St, Suite B<br />
          Richmond, Virginia 23230
        </address>

        <a
          href="mailto:hello@parousiacoffee.com"
          style={{
            display: 'inline-block',
            fontSize: '.72rem',
            fontWeight: 400,
            color: 'var(--gold-lt)',
            textDecoration: 'none',
            letterSpacing: '.06em',
            marginBottom: '2.5rem',
            transition: 'color .2s',
          }}
        >
          hello@parousiacoffee.com
        </a>

        {/* Hours */}
        <div>
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
                  color: 'rgba(255,255,255,.5)',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase' as const,
                }}
              >
                {h.day}
              </span>
              <span
                style={{
                  fontSize: '.78rem',
                  fontWeight: 500,
                  color: h.time === 'Closed' ? 'rgba(255,255,255,.25)' : 'var(--gold-lt)',
                }}
              >
                {h.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — map art + directions */}
      <div
        style={{
          padding: '5rem 4rem',
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
            height: 300,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Grid */}
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
          {/* Streets H */}
          <div style={{ position: 'absolute', height: 3, background: 'rgba(255,255,255,.06)', top: '40%', left: 0, right: 0 }} />
          <div style={{ position: 'absolute', height: 3, background: 'rgba(255,255,255,.06)', top: '65%', left: 0, right: 0 }} />
          {/* Streets V */}
          <div style={{ position: 'absolute', width: 3, background: 'rgba(255,255,255,.06)', left: '38%', top: 0, bottom: 0 }} />
          <div style={{ position: 'absolute', width: 3, background: 'rgba(255,255,255,.06)', left: '68%', top: 0, bottom: 0 }} />
          {/* Coffee cup explosion particles */}
          {cups.map(c => (
            <div
              key={c.id}
              onAnimationEnd={() => removeCup(c.id)}
              style={{
                position: 'absolute',
                top: 'calc(40% - 6px)',
                left: 'calc(38% - 6px)',
                fontSize: 13,
                lineHeight: 1,
                pointerEvents: 'none',
                zIndex: 10,
                animation: `map-cup-fly ${c.dur}s cubic-bezier(.2,.8,.3,1) forwards`,
                ['--tx' as string]: `${c.tx}px`,
                ['--ty' as string]: `${c.ty}px`,
                ['--rot' as string]: `${c.rot}deg`,
              }}
            >
              ☕
            </div>
          ))}

          {/* Pin */}
          <div
            className="map-pin-wrapper"
            onClick={handlePinClick}
            style={{
              position: 'absolute',
              top: 'calc(40% - 24px)',
              left: 'calc(38% - 12px)',
              zIndex: 2,
              cursor: 'pointer',
            }}
          >
            <div
              className="map-pin-head"
              style={{
                width: 24,
                height: 24,
                background: 'var(--gold-lt)',
                borderRadius: '50% 50% 50% 0',
                transform: 'rotate(-45deg)',
                position: 'relative',
                boxShadow: '0 4px 16px rgba(196,154,26,.4)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: 8,
                  height: 8,
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
              background: 'rgba(255,255,255,.06)',
              border: '1px solid rgba(255,255,255,.08)',
              padding: '.5rem 1rem',
              fontSize: '.6rem',
              letterSpacing: '.18em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,.45)',
              whiteSpace: 'nowrap',
            }}
          >
            Scott&apos;s Addition · Richmond, VA
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=2900+W+Clay+St+Richmond+VA"
          target="_blank"
          rel="noopener noreferrer"
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
            alignSelf: 'flex-start',
          }}
        >
          Get Directions →
        </a>
      </div>
    </section>
  )
}
