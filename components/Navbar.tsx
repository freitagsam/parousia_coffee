'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cartContext'

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)


const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const YelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.16 12.594l-4.995 1.986c-.835.332-1.67-.415-1.577-1.332l.04-.403c.09-.916.974-1.495 1.84-1.24l4.99 1.49c.94.28 1.03 1.61.04 2.1l-.338-.601zm-2.25 4.02l-4.574 2.692c-.765.45-1.688-.06-1.728-.952l-.018-.405c-.04-.893.772-1.59 1.657-1.465l4.833.682c.91.128 1.168 1.418.34 2.07l-.51-.622zm-5.024-14.2c-.02-.976 1.01-1.64 1.885-1.18l4.59 2.42c.87.46.93 1.69.11 2.23l-4.23 2.79c-.71.47-1.66.07-1.83-.76l-.525-5.5zm-5.024 1.77l4.59-2.42c.875-.46 1.905.204 1.885 1.18l-.525 5.5c-.17.83-1.12 1.23-1.83.76l-4.23-2.79c-.82-.54-.76-1.77.11-2.23zM2.4 13.4c-.28-.94.44-1.86 1.41-1.76l4.97.54c.88.096 1.37 1.05 1.0 1.84l-2.37 4.35c-.44.8-1.56.84-2.06.07L2.4 13.4z" />
  </svg>
)

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
)

const CartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const obs = new IntersectionObserver(
      ([entry]) => setDark(entry.isIntersecting),
      { threshold: 0.05 }
    )
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  const linkColor   = dark ? 'rgba(255,255,255,.75)' : 'var(--text)'
  const logoTextC   = dark ? '#fff' : 'var(--navy)'
  const logoStarC   = dark ? 'var(--gold-lt)' : 'var(--gold)'

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 500,
        height: 64,
        background: dark ? 'rgba(10,25,41,.92)' : 'rgba(244,237,224,.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${dark ? 'rgba(255,255,255,.06)' : 'var(--border)'}`,
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        padding: '0 3rem',
        transition: 'background .3s, border-color .3s',
      }}
    >
      {/* Left — nav links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {[
          { label: 'Home',  href: '/' },
          { label: 'Shop',  href: '/shop' },
          { label: 'Menu',  href: '/menu' },
          { label: 'About', href: '/about' },
          { label: 'Media', href: '/media' },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="nav-underline"
            style={{
              fontSize: '.68rem',
              fontWeight: 500,
              letterSpacing: '.18em',
              textTransform: 'uppercase' as const,
              color: linkColor,
              textDecoration: 'none',
              transition: 'color .2s',
            }}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://maps.google.com/?q=2900+W+Clay+St+Richmond+VA"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-underline"
          style={{
            fontSize: '.68rem',
            fontWeight: 500,
            letterSpacing: '.18em',
            textTransform: 'uppercase' as const,
            color: linkColor,
            textDecoration: 'none',
            transition: 'color .2s',
          }}
        >
          Visit
        </a>
      </div>

      {/* Center — logo */}
      <Link
        href="/"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          gap: 0,
        }}
      >
        <span
          className="animate-star-rotate"
          style={{ color: logoStarC, fontSize: '1rem', lineHeight: 1, display: 'block', transition: 'color .3s', transform: 'translateX(1.7rem)' }}
        >
          ✦
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '.1em',
            color: logoTextC,
            lineHeight: 1,
            textAlign: 'center',
            transition: 'color .3s',
          }}
        >
          PAROUSIA
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '.62rem',
            fontWeight: 300,
            letterSpacing: '.35em',
            color: logoTextC,
            textTransform: 'uppercase',
            lineHeight: 1,
            transition: 'color .3s',
          }}
        >
          Coffee
        </span>
      </Link>

      {/* Right — social + cart */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.8rem' }}>
        <div style={{ display: 'flex', gap: '.9rem' }}>
          <a
            href="https://instagram.com/parousiacoffee"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color .2s' }}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://facebook.com/parousiacoffee"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color .2s' }}
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.youtube.com/@parousiacoffee7320"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color .2s' }}
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://www.yelp.com/biz/parousia-coffee-richmond"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color .2s' }}
          >
            <YelpIcon />
          </a>
          <a
            href="https://maps.google.com/?q=Parousia+Coffee+Richmond+VA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color .2s' }}
          >
            <GoogleIcon />
          </a>
        </div>
        <Link
          href="/cart"
          style={{
            fontSize: '.68rem',
            fontWeight: 500,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: linkColor,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '.45rem',
            transition: 'color .2s',
            position: 'relative',
          }}
        >
          <CartIcon />
          Cart
          {count > 0 && (
            <span style={{
              position: 'absolute',
              top: -6,
              right: -10,
              minWidth: 16,
              height: 16,
              borderRadius: 99,
              background: 'var(--gold)',
              color: 'var(--navy-dk)',
              fontSize: '.5rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 3px',
              lineHeight: 1,
            }}>
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
