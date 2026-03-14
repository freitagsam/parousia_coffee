'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import ProductCard, { type Coffee } from './ProductCard'

const coffees: Coffee[] = [
  {
    name: 'Cornerstone Blend',
    nick: '"The Foundation"',
    roast: 'Medium–Dark',
    roastType: 'dark',
    bg: '#abdcdc',
    pills: ['Cacao Nib', 'Date Syrup', 'Creamy'],
    price: 19,
    process: '16oz · Natural & Washed',
    notes: 'Cacao nib · Date syrup\nCreamy body · Natural & washed',
  },
  {
    name: 'MorningStar Blend',
    nick: '"The Swiss Army Knife"',
    roast: 'Medium–Light',
    roastType: 'medium',
    bg: '#addae8',
    pills: ['Walnut', 'Milk Choc', 'Passion Fruit'],
    price: 19,
    process: '16oz · Washed',
    notes: 'Walnut · Milk chocolate\nPassion fruit · Washed process',
  },
  {
    name: 'Los Hermanos Blend',
    nick: '"The Passport"',
    roast: 'Medium',
    roastType: 'medium',
    bg: '#e3ce9d',
    pills: ['Sweet', 'Nutty', 'Orange'],
    price: 19,
    process: '16oz · Washed',
    notes: 'Sweet · Nutty\nOrange juice finish · Colombia',
  },
  {
    name: 'Rwanda Shyira',
    nick: '"The Bright One"',
    roast: 'Light',
    roastType: 'light',
    bg: '#b9e4cb',
    pills: ['Jasmine', 'Red Berry', 'Black Tea'],
    price: 22,
    process: '12oz · Washed',
    notes: 'Jasmine · Red berry\nBlack tea finish · Rwanda',
  },
  {
    name: 'Bali Kintamani',
    nick: '"The Island"',
    roast: 'Medium–Light',
    roastType: 'medium',
    bg: '#aee4e8',
    pills: ['Lemon', 'Brown Sugar', 'Clean'],
    price: 22,
    process: '12oz · Natural',
    notes: 'Lemon · Brown sugar\nClean finish · Bali',
  },
  {
    name: 'Symphony Blend',
    nick: '"The Showstopper"',
    roast: 'Medium',
    roastType: 'medium',
    bg: '#e9c2d2',
    pills: ['Rose', 'Dark Honey', 'Velvet'],
    price: 19,
    process: '16oz · Natural',
    notes: 'Rose · Dark honey\nVelvet body · Blend',
  },
  {
    name: 'Pillar of Smoke',
    nick: '"The Bold One"',
    roast: 'Dark',
    roastType: 'dark',
    bg: '#ccc6e3',
    pills: ['Smoke', 'Dark Choc', 'Full Body'],
    price: 19,
    process: '16oz · Natural',
    notes: 'Smoke · Dark chocolate\nFull body · Blend',
  },
]

const WHEEL_TRACK_W = 280
const THUMB_W = 56
const NOTCH_COUNT = 7

export default function CoffeeGrid() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [wheelDragging, setWheelDragging] = useState(false)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })
  const wheelDragStart = useRef({ x: 0, thumbLeft: 0 })

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      setProgress(max > 0 ? el.scrollLeft / max : 0)
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // carousel drag
  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current
    if (!el) return
    setDragging(true)
    dragStart.current = { x: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - (x - dragStart.current.x)
  }
  const onMouseUp = () => setDragging(false)

  // wheel drag
  const thumbMaxLeft = WHEEL_TRACK_W - THUMB_W
  const thumbLeft = progress * thumbMaxLeft

  const onWheelMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setWheelDragging(true)
    wheelDragStart.current = { x: e.clientX, thumbLeft }
  }

  useEffect(() => {
    if (!wheelDragging) return
    const onMove = (e: MouseEvent) => {
      const el = trackRef.current
      if (!el) return
      const dx = e.clientX - wheelDragStart.current.x
      const newThumb = Math.max(0, Math.min(thumbMaxLeft, wheelDragStart.current.thumbLeft + dx))
      const ratio = newThumb / thumbMaxLeft
      el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth)
    }
    const onUp = () => setWheelDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [wheelDragging, thumbMaxLeft])

  return (
    <section
      id="coffees"
      style={{
        background: 'var(--off-white)',
        padding: '5rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background image overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/SFB_LFS_BeansVsGrounds_blog_1024x1024.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Header */}
      <div
        style={{
          padding: '0 6rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
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
            ✦ The Lineup
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              color: 'var(--navy-dk)',
              lineHeight: 1,
              letterSpacing: '-.02em',
            }}
          >
            Our{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>coffees.</em>
          </h2>
        </div>
        <Link
          href="/shop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.6rem',
            fontSize: '.68rem',
            fontWeight: 500,
            letterSpacing: '.18em',
            textTransform: 'uppercase' as const,
            color: 'var(--navy)',
            textDecoration: 'none',
            transition: 'color .3s',
            whiteSpace: 'nowrap',
          }}
        >
          View all →
        </Link>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          display: 'flex',
          gap: '1.5rem',
          padding: '0 6rem 2rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          cursor: dragging ? 'grabbing' : 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          position: 'relative',
          zIndex: 1,
        } as React.CSSProperties}
      >
        {coffees.map(c => (
          <ProductCard key={c.name} coffee={c} />
        ))}
      </div>

      {/* Scroll wheel */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem',
          padding: '0 6rem',
          marginTop: '.5rem',
          userSelect: 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* track */}
        <div
          style={{
            position: 'relative',
            width: WHEEL_TRACK_W,
            height: 28,
            background: 'var(--cream-3)',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          {/* thumb / wheel roller */}
          <div
            onMouseDown={onWheelMouseDown}
            style={{
              position: 'absolute',
              top: 0,
              left: thumbLeft,
              width: THUMB_W,
              height: 28,
              background: 'var(--navy)',
              borderRadius: 14,
              cursor: wheelDragging ? 'grabbing' : 'grab',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              transition: wheelDragging ? 'none' : 'left .05s',
            }}
          >
            {Array.from({ length: NOTCH_COUNT }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 1.5,
                  height: 10,
                  background: 'rgba(255,255,255,0.45)',
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
        </div>
        <span
          style={{
            fontSize: '.6rem',
            fontWeight: 500,
            letterSpacing: '.15em',
            textTransform: 'uppercase' as const,
            color: 'var(--muted)',
          }}
        >
          Scroll to explore
        </span>
      </div>
    </section>
  )
}
