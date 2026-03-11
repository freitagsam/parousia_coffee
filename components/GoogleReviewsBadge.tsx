'use client'

import { useEffect, useState } from 'react'

type ReviewData = { rating: number; count: number }

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 1 }}>
      {[1, 2, 3, 4, 5].map(i => {
        const fill = Math.min(1, Math.max(0, rating - (i - 1)))
        return (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`star-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="var(--gold)" />
                <stop offset={`${fill * 100}%`} stopColor="rgba(0,0,0,0)" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={`url(#star-${i})`}
              stroke="var(--gold)"
              strokeWidth="1.5"
            />
          </svg>
        )
      })}
    </span>
  )
}

export default function GoogleReviewsBadge() {
  const [data, setData] = useState<ReviewData | null>(null)

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.ok ? r.json() : null)
      .then(d => d && d.rating ? setData(d) : null)
      .catch(() => null)
  }, [])

  if (!data) return null

  return (
    <a
      href="https://search.google.com/local/reviews?placeid=ChIJXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.7rem',
        textDecoration: 'none',
        marginTop: '2rem',
        padding: '.7rem 1.1rem',
        background: 'rgba(26,58,88,.04)',
        border: '1px solid rgba(26,58,88,.1)',
        transition: 'border-color .2s',
      }}
    >
      {/* Google G */}
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>

      <Stars rating={data.rating} />

      <span
        style={{
          fontSize: '.7rem',
          fontWeight: 600,
          color: 'var(--navy)',
          letterSpacing: '.02em',
        }}
      >
        {data.rating.toFixed(1)}
      </span>

      <span
        style={{
          fontSize: '.65rem',
          fontWeight: 400,
          color: 'var(--muted)',
          letterSpacing: '.02em',
        }}
      >
        {data.count.toLocaleString()} Google reviews
      </span>
    </a>
  )
}
