'use client'

import { useState, useCallback } from 'react'

const events = [
  { emoji: '🌿', name: "Scott's Addition Farmers Market", type: 'Every Saturday, 8am – 1pm' },
  { emoji: '🏙️', name: 'Church Hill Pop-up',             type: 'Monthly — follow us for dates' },
  { emoji: '🎉', name: 'Private Events & Weddings',      type: 'Inquire to book' },
  { emoji: '🏢', name: 'Corporate Catering',             type: 'Half-day & full-day rates available' },
]

const LugNuts = ({ cx, cy }: { cx: number; cy: number }) => {
  const r = 11
  const positions = [0, 60, 120, 180, 240, 300].map(deg => {
    const rad = (deg * Math.PI) / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  })
  return (
    <>
      {positions.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2.2" fill="#666" />
      ))}
    </>
  )
}

const ANIM_MS = 2800

interface TrailerSVGProps {
  pouring: boolean
  machineHover: boolean
  onMachineClick: () => void
  onMachineEnter: () => void
  onMachineLeave: () => void
}

const TrailerSVG = ({ pouring, machineHover, onMachineClick, onMachineEnter, onMachineLeave }: TrailerSVGProps) => (
  <svg viewBox="0 0 500 270" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '88%', maxWidth: 480, position: 'relative', zIndex: 3 }}>

    <defs>
      {/* Cup clip path */}
      <clipPath id="pc-cup-clip">
        <path d="M267 171 L270 192 L292 192 L295 171 Z" />
      </clipPath>
      {/* Coffee gradient — crema on top */}
      <linearGradient id="pc-coffee-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c8813a" />
        <stop offset="25%" stopColor="#8b5a2b" />
        <stop offset="100%" stopColor="#5c3317" />
      </linearGradient>
      {/* Subtle glow filter for machine hover */}
      <filter id="pc-machine-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feFlood floodColor="#c49a1a" floodOpacity="0.35" result="color" />
        <feComposite in="color" in2="blur" operator="in" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── Hitch arm (left) ── */}
    <rect x="0" y="151" width="44" height="12" rx="5" fill="#0f2338" />
    <circle cx="6" cy="157" r="10" fill="#0a1929" stroke="#c49a1a" strokeWidth="1.5" />

    {/* ── White/cream trailer body ── */}
    <rect x="35" y="72" width="433" height="158" rx="3" fill="#e2ddd0" />

    {/* ── Navy blue top stripe ── */}
    <rect x="35" y="58" width="433" height="36" rx="3" fill="#1a3a58" />
    {/* Square off bottom of stripe */}
    <rect x="35" y="80" width="433" height="14" fill="#1a3a58" />

    {/* ── Subtle body panel seam lines ── */}
    <line x1="35" y1="150" x2="250" y2="150" stroke="#ccc8bc" strokeWidth="0.8" />
    <line x1="35" y1="108" x2="250" y2="108" stroke="#ccc8bc" strokeWidth="0.5" />

    {/* ── Red tail lights (left side) ── */}
    <rect x="42" y="84" width="12" height="10" rx="2" fill="#cc0000" />
    <rect x="42" y="84" width="12" height="10" rx="2" fill="url(#tailLightGlow)" opacity="0.7" />
    <rect x="42" y="100" width="12" height="10" rx="2" fill="#aa0000" />
    {/* Light gloss */}
    <rect x="44" y="86" width="5" height="3" rx="1" fill="#ff6666" opacity="0.6" />
    <rect x="44" y="102" width="5" height="3" rx="1" fill="#ff4444" opacity="0.4" />

    {/* ── Serving window (right ~45% of body) ── */}
    {/* Window frame/surround */}
    <rect x="248" y="93" width="214" height="130" rx="1" fill="#b8b4a8" />
    {/* Window interior — inside trailer, warmer tone */}
    <rect x="252" y="97" width="206" height="122" rx="0" fill="#d6d0bc" />

    {/* ── Equipment silhouettes inside window ── */}

    {/* Espresso machine — hover-reactive */}
    {/* Body */}
    <rect
      x="264" y="114" width="34" height="52" rx="2"
      fill="#1a3a58" opacity="0.8"
      filter={machineHover ? 'url(#pc-machine-glow)' : undefined}
    />
    {/* Top / group head bar */}
    <rect
      x="260" y="108" width="42" height="14" rx="2"
      fill="#1a3a58"
      filter={machineHover ? 'url(#pc-machine-glow)' : undefined}
    />
    {/* Group head 1 */}
    <rect x="266" y="118" width="12" height="6" rx="1" fill="#0a1929" />
    {/* Group head 2 */}
    <rect x="282" y="118" width="12" height="6" rx="1" fill="#0a1929" />
    {/* Drip tray */}
    <rect x="262" y="164" width="38" height="4" rx="1" fill="#0a1929" opacity="0.5" />

    {/* Hover gold rim hint */}
    {machineHover && (
      <rect
        x="259" y="107" width="44" height="63" rx="2"
        fill="none"
        stroke="rgba(196,154,26,0.55)"
        strokeWidth="1"
        style={{ pointerEvents: 'none' }}
      />
    )}

    {/* ── Easter egg: coffee pour animation ── */}
    {pouring && (
      <>
        {/* Pour stream from left group head */}
        <rect
          className="pc-pour-stream"
          x="270.5" y="124" width="2.5" height="40" rx="1"
          fill="#7b4f2e"
          style={{ transformBox: 'fill-box', transformOrigin: 'top center' }}
        />
        {/* Pour stream from right group head */}
        <rect
          className="pc-pour-stream"
          x="286.5" y="124" width="2.5" height="40" rx="1"
          fill="#7b4f2e"
          style={{ transformBox: 'fill-box', transformOrigin: 'top center' }}
        />

        {/* Coffee cup group */}
        <g className="pc-cup-group" style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }}>
          {/* Cup body */}
          <path d="M267 171 L270 192 L292 192 L295 171 Z" fill="#faf7f2" stroke="#cac3b5" strokeWidth="1" />
          {/* Cup handle */}
          <path d="M295 175 C303 175 303 188 295 188" fill="none" stroke="#cac3b5" strokeWidth="1.5" />
          {/* Cup bottom line */}
          <line x1="270" y1="192" x2="292" y2="192" stroke="#cac3b5" strokeWidth="0.8" />
          {/* Highlight on cup */}
          <path d="M269 175 L270 187" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />

          {/* Coffee fill (scales up from bottom) */}
          <rect
            className="pc-coffee-fill"
            x="267" y="171" width="28" height="21"
            fill="url(#pc-coffee-grad)"
            clipPath="url(#pc-cup-clip)"
            style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }}
          />
        </g>

        {/* Steam wisps */}
        <g className="pc-steam" style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }}>
          <path d="M274 170 Q272 164 274 158 Q276 152 274 146" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M281 169 Q279 162 281 155 Q283 148 281 141" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M288 170 Q286 164 288 158 Q290 152 288 146" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </>
    )}

    {/* Invisible clickable overlay on espresso machine (on top for events) */}
    <rect
      x="257" y="106" width="50" height="66"
      fill="transparent"
      style={{ cursor: machineHover ? 'pointer' : 'default' }}
      onClick={onMachineClick}
      onMouseEnter={onMachineEnter}
      onMouseLeave={onMachineLeave}
    />

    {/* ── Grinder ── */}
    <rect x="306" y="120" width="22" height="46" rx="2" fill="#1a3a58" opacity="0.75" />
    <rect x="308" y="116" width="18" height="10" rx="2" fill="#0f2338" opacity="0.8" />
    {/* Small shelf item */}
    <rect x="336" y="132" width="16" height="32" rx="1" fill="#0f2338" opacity="0.5" />

    {/* ── Barista silhouette ── */}
    <circle cx="422" cy="128" r="17" fill="#c49a1a" opacity="0.65" />
    <ellipse cx="422" cy="174" rx="24" ry="36" fill="#c49a1a" opacity="0.65" />

    {/* ── PAROUSIA COFFEE sign board ── */}
    <rect x="358" y="104" width="92" height="44" rx="1" fill="rgba(255,255,255,0.55)" stroke="rgba(26,58,88,0.2)" strokeWidth="0.5" />
    <text x="404" y="123" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#1a3a58" fontFamily="Georgia, serif" letterSpacing="2.5">PAROUSIA</text>
    <text x="404" y="138" textAnchor="middle" fontSize="8.5" fontWeight="500" fill="#1a3a58" fontFamily="Georgia, serif" letterSpacing="2.5">COFFEE</text>

    {/* ── Wooden counter/ledge ── */}
    <rect x="244" y="222" width="224" height="9" rx="1" fill="#b8a070" />
    <rect x="244" y="229" width="224" height="3" rx="0" fill="#9a8458" opacity="0.5" />

    {/* ── Left wheel ── */}
    <circle cx="110" cy="242" r="34" fill="#1e1e1e" />
    <circle cx="110" cy="242" r="23" fill="#2a2a2a" />
    <circle cx="110" cy="242" r="17" fill="#c0bcb2" />
    <circle cx="110" cy="242" r="13" fill="#a8a49c" />
    <LugNuts cx={110} cy={242} />
    <circle cx="110" cy="242" r="5" fill="#888480" />
    <circle cx="110" cy="242" r="2.5" fill="#666" />

    {/* ── Right wheel ── */}
    <circle cx="390" cy="242" r="34" fill="#1e1e1e" />
    <circle cx="390" cy="242" r="23" fill="#2a2a2a" />
    <circle cx="390" cy="242" r="17" fill="#c0bcb2" />
    <circle cx="390" cy="242" r="13" fill="#a8a49c" />
    <LugNuts cx={390} cy={242} />
    <circle cx="390" cy="242" r="5" fill="#888480" />
    <circle cx="390" cy="242" r="2.5" fill="#666" />

    {/* ── Axle bar ── */}
    <rect x="110" y="239" width="280" height="6" rx="3" fill="#0a1929" />

  </svg>
)

export default function TrailerSection() {
  const [pouring, setPouring] = useState(false)
  const [machineHover, setMachineHover] = useState(false)

  const handleMachineClick = useCallback(() => {
    if (pouring) return
    setPouring(true)
    setTimeout(() => setPouring(false), ANIM_MS)
  }, [pouring])

  return (
    <section
      style={{
        background: 'var(--off-white)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <style>{`
        @keyframes pc-cup-appear {
          0%   { opacity: 0; transform: translateY(10px); }
          12%  { opacity: 1; transform: translateY(0); }
          78%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(6px); }
        }
        @keyframes pc-pour-stream {
          0%   { transform: scaleY(0); opacity: 0; }
          14%  { transform: scaleY(0); opacity: 0; }
          22%  { transform: scaleY(1); opacity: 0.85; }
          62%  { transform: scaleY(1); opacity: 0.85; }
          75%  { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(0); opacity: 0; }
        }
        @keyframes pc-coffee-fill {
          0%   { transform: scaleY(0); }
          22%  { transform: scaleY(0); }
          65%  { transform: scaleY(1); }
          100% { transform: scaleY(1); }
        }
        @keyframes pc-steam-rise {
          0%   { opacity: 0; transform: translateY(0px); }
          62%  { opacity: 0; transform: translateY(0px); }
          74%  { opacity: 0.8; transform: translateY(-3px); }
          90%  { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 0; transform: translateY(-12px); }
        }

        .pc-cup-group {
          animation: pc-cup-appear ${ANIM_MS}ms cubic-bezier(.4,0,.2,1) forwards;
        }
        .pc-pour-stream {
          animation: pc-pour-stream ${ANIM_MS}ms cubic-bezier(.4,0,.2,1) forwards;
        }
        .pc-coffee-fill {
          animation: pc-coffee-fill ${ANIM_MS}ms cubic-bezier(.4,0,.2,1) forwards;
        }
        .pc-steam {
          animation: pc-steam-rise ${ANIM_MS}ms ease forwards;
        }
      `}</style>

      {/* Left — visual */}
      <div
        style={{
          background: 'linear-gradient(145deg, #0a1929 0%, #1a3a58 100%)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 380,
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
        <TrailerSVG
          pouring={pouring}
          machineHover={machineHover}
          onMachineClick={handleMachineClick}
          onMachineEnter={() => setMachineHover(true)}
          onMachineLeave={() => setMachineHover(false)}
        />
      </div>

      {/* Right — info */}
      <div
        style={{
          padding: '3rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(to bottom right, rgba(250,248,244,0.10) 0%, rgba(250,248,244,0.04) 55%, rgba(250,248,244,0.01) 100%), url("/images/o%20(1).jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Unified frosted panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-start',
            width: 'fit-content',
            background: 'rgba(252,247,239,0.76)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.72)',
            boxShadow: '0 8px 40px rgba(26,58,88,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
            padding: '1.8rem 2rem',
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
            {/* Eyebrow */}
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
                marginBottom: '1rem',
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
                margin: 0,
                marginBottom: '1.6rem',
              }}
            >
              The{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>mobile</em> café.
            </h2>

            {/* Divider */}
            <div style={{ width: 40, height: 1.5, background: 'var(--gold)', opacity: 0.5, marginBottom: '1.6rem' }} />

            <p
              style={{
                fontSize: '.95rem',
                fontWeight: 300,
                color: 'rgba(26,58,88,0.85)',
                lineHeight: 1.9,
                maxWidth: 420,
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
                  borderBottom: '1px solid rgba(26,58,88,0.1)',
                  borderTop: i === 0 ? '1px solid rgba(26,58,88,0.1)' : undefined,
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{e.emoji}</span>
                <div>
                  <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--navy-dk)', lineHeight: 1.2 }}>
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
