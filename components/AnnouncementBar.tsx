'use client'

import { useState } from 'react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div
      style={{
        background: 'var(--navy-dk)',
        color: 'rgba(255,255,255,.7)',
        textAlign: 'center',
        padding: '.55rem 3rem',
        fontSize: '.65rem',
        fontWeight: 400,
        letterSpacing: '.22em',
        textTransform: 'uppercase',
        position: 'relative',
      }}
    >
      <a
        href="https://maps.google.com/?q=2900+W+Clay+St+Suite+B+Richmond+VA+23230"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <strong style={{ color: 'var(--gold-lt)' }}>Now Open</strong>
        &nbsp;·&nbsp; Our First Brick &amp; Mortar at 2900 W Clay St, Suite B &nbsp;·&nbsp; Richmond, VA
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,.4)',
          cursor: 'pointer',
          fontSize: '.9rem',
          transition: 'color .2s',
          lineHeight: 1,
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}
      >
        ✕
      </button>
    </div>
  )
}
