'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cartContext'

const roastStrip: Record<string, React.CSSProperties> = {
  dark:   { background: 'linear-gradient(to bottom, #6b3510, #3d1a08)' },
  medium: { background: 'linear-gradient(to bottom, #c9940a, #8a600a)' },
  light:  { background: 'linear-gradient(to bottom, #e0b832, #c49a1a)' },
}

const BagArt = () => (
  <svg viewBox="0 0 120 170" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: 64, filter: 'drop-shadow(0 4px 10px rgba(0,0,0,.12))' }}>
    <path d="M18 40 Q18 32 26 32 L94 32 Q102 32 102 40 L107 148 Q107 156 99 156 L21 156 Q13 156 13 148 Z" fill="#1a3a58" />
    <path d="M26 32 L94 32 L91 18 Q89 10 82 10 L38 10 Q31 10 29 18 Z" fill="#0f2338" />
    <ellipse cx="60" cy="88" rx="34" ry="44" fill="white" opacity="0.94" />
    <text x="60" y="68" textAnchor="middle" fontSize="9" fill="#1a3a58" fontFamily="Georgia,serif">✦</text>
    <text x="60" y="82" textAnchor="middle" fontSize="10" fill="#1a3a58" fontFamily="Georgia,serif" fontWeight="bold">PAROUSIA</text>
    <text x="60" y="95" textAnchor="middle" fontSize="9" fill="#1a3a58" fontFamily="Georgia,serif">COFFEE</text>
  </svg>
)

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal, count, clear } = useCart()

  const shipping = subtotal >= 50 ? 0 : 6.99
  const total = subtotal + shipping

  return (
    <main style={{ background: 'var(--off-white)', minHeight: '80vh' }}>
      {/* Header */}
      <section
        style={{
          position: 'relative',
          background: 'var(--cream)',
          padding: '7rem 6rem 5rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4rem',
            background: 'linear-gradient(to bottom, transparent, var(--off-white))',
          }}
        />
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '.6rem',
          fontSize: '.6rem', fontWeight: 600, letterSpacing: '.3em',
          textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.9rem',
        }}>
          ✦ Your Order
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', color: 'var(--navy-dk)',
          lineHeight: 1, letterSpacing: '-.02em',
        }}>
          Your{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>cart.</em>
        </h1>
      </section>

      <div style={{ padding: '4rem 6rem', maxWidth: 1100, margin: '0 auto' }}>
        {items.length === 0 ? (
          /* ── Empty state ── */
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '1.5rem', padding: '6rem 0',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '3rem', color: 'var(--border)' }}>✦</span>
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: '1.6rem',
              fontWeight: 700, color: 'var(--navy-dk)',
            }}>
              Your cart is empty.
            </p>
            <p style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 300 }}>
              Find something you love in our shop.
            </p>
            <Link href="/shop" style={{
              fontSize: '.68rem', fontWeight: 600, letterSpacing: '.2em',
              textTransform: 'uppercase', textDecoration: 'none',
              padding: '.9rem 2.4rem',
              background: 'var(--navy-dk)', color: '#fff',
              border: '1.5px solid var(--navy-dk)',
              transition: 'all .28s',
            }}>
              Browse the Shop →
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'start' }}>
            {/* ── Cart items ── */}
            <div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: '1.5rem', paddingBottom: '1rem',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {count} {count === 1 ? 'item' : 'items'}
                </span>
                <button onClick={clear} style={{
                  fontSize: '.62rem', fontWeight: 500, letterSpacing: '.1em',
                  textTransform: 'uppercase', color: 'var(--muted)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textDecoration: 'underline', padding: 0,
                }}>
                  Clear all
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {items.map(item => (
                  <div
                    key={item.name}
                    style={{
                      background: '#fff',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.2rem 1.5rem',
                      position: 'relative',
                    }}
                  >
                    {/* Roast strip */}
                    <div style={{
                      position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
                      ...roastStrip[item.roastType],
                    }} />

                    {/* Bag thumbnail */}
                    <div style={{
                      width: 80, height: 80, flexShrink: 0,
                      background: item.bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 2,
                    }}>
                      <BagArt />
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '.55rem', fontWeight: 600, letterSpacing: '.22em',
                        textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.25rem',
                      }}>
                        ● {item.roast}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: '1rem',
                        fontWeight: 700, color: 'var(--navy-dk)', marginBottom: '.15rem',
                      }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '.65rem', color: 'var(--muted)', fontWeight: 300 }}>
                        {item.process}
                      </div>
                    </div>

                    {/* Qty controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                      <button
                        onClick={() => updateQty(item.name, item.qty - 1)}
                        style={{
                          width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          border: '1px solid var(--border)', background: 'var(--cream)',
                          cursor: 'pointer', fontSize: '1rem', color: 'var(--navy)',
                          fontWeight: 500, lineHeight: 1,
                        }}
                      >
                        −
                      </button>
                      <span style={{
                        minWidth: 20, textAlign: 'center',
                        fontSize: '.85rem', fontWeight: 600, color: 'var(--navy-dk)',
                      }}>
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.name, item.qty + 1)}
                        style={{
                          width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          border: '1px solid var(--border)', background: 'var(--cream)',
                          cursor: 'pointer', fontSize: '1rem', color: 'var(--navy)',
                          fontWeight: 500, lineHeight: 1,
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* Line price */}
                    <div style={{
                      fontFamily: 'var(--font-display)', fontSize: '1rem',
                      fontWeight: 700, color: 'var(--navy)', minWidth: 52, textAlign: 'right',
                    }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.name)}
                      aria-label="Remove"
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1,
                        padding: '0 0 0 .5rem', display: 'flex', alignItems: 'center',
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/shop" style={{
                  fontSize: '.65rem', fontWeight: 500, letterSpacing: '.16em',
                  textTransform: 'uppercase', color: 'var(--muted)',
                  textDecoration: 'none',
                }}>
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* ── Order summary ── */}
            <div style={{
              background: '#fff', border: '1px solid var(--border)',
              padding: '2rem', position: 'sticky', top: 88,
            }}>
              <div style={{
                fontSize: '.6rem', fontWeight: 600, letterSpacing: '.28em',
                textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.4rem',
              }}>
                ✦ Order Summary
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.82rem', color: 'var(--text)' }}>
                  <span>Subtotal</span>
                  <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.82rem', color: 'var(--text)' }}>
                  <span>Shipping</span>
                  <span style={{ fontWeight: 600, color: shipping === 0 ? '#2a7a3a' : 'inherit' }}>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {subtotal < 50 && (
                  <div style={{
                    fontSize: '.62rem', color: 'var(--muted)', fontWeight: 300,
                    padding: '.5rem .7rem', background: 'var(--cream)', lineHeight: 1.5,
                  }}>
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}
              </div>

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                paddingTop: '1.2rem', borderTop: '1px solid var(--border)',
                marginBottom: '1.5rem',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--navy-dk)' }}>
                  Total
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy-dk)' }}>
                  ${total.toFixed(2)}
                </span>
              </div>

              <button style={{
                width: '100%', padding: '1rem',
                fontSize: '.72rem', fontWeight: 600, letterSpacing: '.2em',
                textTransform: 'uppercase',
                background: 'var(--navy-dk)', color: '#fff',
                border: 'none', cursor: 'pointer',
                transition: 'opacity .2s',
              }}>
                Proceed to Checkout →
              </button>

              <p style={{
                fontSize: '.6rem', color: 'var(--muted)', textAlign: 'center',
                marginTop: '1rem', fontWeight: 300, lineHeight: 1.6,
              }}>
                Roasted to order · Ships within 2–3 business days
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
