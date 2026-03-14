'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cartContext'

/* ── Coffee bean burst — imperative Web Animations API, no CSS vars needed ── */
const BEAN_SVG = `<svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="5.5" cy="7.5" rx="4.8" ry="7" fill="#6b3f1e"/><ellipse cx="5.5" cy="7.5" rx="3.2" ry="5" fill="#8b5228"/><path d="M5.5 1.5 Q3.5 7.5 5.5 13.5" stroke="#5c3317" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>`

function burstBeans(rect: DOMRect) {
  const cx = rect.left + rect.width  / 2
  const cy = rect.top  + rect.height / 2
  for (let i = 0; i < 9; i++) {
    const angle = (360 / 9) * i + (Math.random() * 28 - 14)
    const dist  = 42 + Math.random() * 46
    const rad   = (angle * Math.PI) / 180
    const tx    = Math.cos(rad) * dist
    const ty    = Math.sin(rad) * dist
    const rot   = Math.random() * 540 - 270
    const dur   = 480 + Math.random() * 220

    const el = document.createElement('div')
    el.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;pointer-events:none;z-index:9999;`
    el.innerHTML = BEAN_SVG
    document.body.appendChild(el)

    const anim = el.animate(
      [
        { transform: 'translate(-50%,-50%) scale(0.3) rotate(0deg)',                                            opacity: 1 },
        { transform: 'translate(-50%,-50%) scale(0.3) rotate(0deg)',                                            opacity: 1, offset: 0.6 },
        { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1) rotate(${rot}deg)`,       opacity: 0 },
      ],
      { duration: dur, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'forwards' }
    )
    anim.onfinish = () => el.remove()
  }
}

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
  const [pendingRemove, setPendingRemove] = useState<string | null>(null)
  const [confirmClear, setConfirmClear] = useState(false)
  const handleIncrement = useCallback((name: string, qty: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    updateQty(name, qty + 1)
    burstBeans(rect)
  }, [updateQty])

  const shipping = subtotal >= 50 ? 0 : 6.99
  const total = subtotal + shipping

  return (
    <main style={{ background: 'var(--off-white)', minHeight: '80vh' }}>
      {/* Header */}
      <section
        style={{
          position: 'relative',
          background: 'var(--cream)',
          padding: '5rem 6rem 3.5rem',
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
                <button onClick={() => setConfirmClear(true)} style={{
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexShrink: 0 }}>
                      <button
                        onClick={() => item.qty === 1 ? setPendingRemove(item.name) : updateQty(item.name, item.qty - 1)}
                        style={{
                          width: 28, height: 28, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          border: '1px solid var(--border)', background: 'var(--cream)',
                          cursor: 'pointer', fontSize: '1rem', color: 'var(--navy)',
                          fontWeight: 500, lineHeight: 1,
                        }}
                      >
                        −
                      </button>
                      <span style={{
                        width: 32, textAlign: 'center', flexShrink: 0,
                        fontSize: '.85rem', fontWeight: 600, color: 'var(--navy-dk)',
                      }}>
                        {item.qty}
                      </span>
                      <button
                        onClick={(e) => handleIncrement(item.name, item.qty, e)}
                        style={{
                          width: 28, height: 28, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
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
                      fontWeight: 700, color: 'var(--navy)', width: 72, flexShrink: 0, textAlign: 'right',
                    }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => setPendingRemove(item.name)}
                      aria-label="Remove"
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1,
                        padding: '0 0 0 .5rem', display: 'flex', alignItems: 'center',
                        flexShrink: 0,
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
      {/* ── Clear all confirmation modal ── */}
      {confirmClear && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', padding: '2.5rem 2rem',
            maxWidth: 380, width: '90%',
            border: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: '1.4rem',
          }}>
            <div style={{
              fontSize: '.55rem', fontWeight: 600, letterSpacing: '.28em',
              textTransform: 'uppercase', color: 'var(--gold)',
            }}>
              ✦ Clear Cart
            </div>
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: '1.05rem',
              fontWeight: 700, color: 'var(--navy-dk)', lineHeight: 1.35, margin: 0,
            }}>
              Remove <em style={{ fontStyle: 'italic', fontWeight: 300 }}>all items</em> from your cart?
            </p>
            <div style={{ display: 'flex', gap: '.75rem' }}>
              <button
                onClick={() => setConfirmClear(false)}
                style={{
                  flex: 1, padding: '.75rem',
                  fontSize: '.68rem', fontWeight: 600, letterSpacing: '.16em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  background: 'var(--cream)', color: 'var(--navy-dk)',
                  border: '1.5px solid var(--border)',
                }}
              >
                Keep It
              </button>
              <button
                onClick={() => { clear(); setConfirmClear(false) }}
                style={{
                  flex: 1, padding: '.75rem',
                  fontSize: '.68rem', fontWeight: 600, letterSpacing: '.16em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  background: 'var(--navy-dk)', color: '#fff',
                  border: '1.5px solid var(--navy-dk)',
                }}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Remove confirmation modal ── */}
      {pendingRemove && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', padding: '2.5rem 2rem',
            maxWidth: 380, width: '90%',
            border: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: '1.4rem',
          }}>
            <div style={{
              fontSize: '.55rem', fontWeight: 600, letterSpacing: '.28em',
              textTransform: 'uppercase', color: 'var(--gold)',
            }}>
              ✦ Remove Item
            </div>
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: '1.05rem',
              fontWeight: 700, color: 'var(--navy-dk)', lineHeight: 1.35, margin: 0,
            }}>
              Remove <em style={{ fontStyle: 'italic', fontWeight: 300 }}>{pendingRemove}</em> from your cart?
            </p>
            <div style={{ display: 'flex', gap: '.75rem' }}>
              <button
                onClick={() => setPendingRemove(null)}
                style={{
                  flex: 1, padding: '.75rem',
                  fontSize: '.68rem', fontWeight: 600, letterSpacing: '.16em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  background: 'var(--cream)', color: 'var(--navy-dk)',
                  border: '1.5px solid var(--border)',
                }}
              >
                Keep It
              </button>
              <button
                onClick={() => { removeItem(pendingRemove); setPendingRemove(null) }}
                style={{
                  flex: 1, padding: '.75rem',
                  fontSize: '.68rem', fontWeight: 600, letterSpacing: '.16em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  background: 'var(--navy-dk)', color: '#fff',
                  border: '1.5px solid var(--navy-dk)',
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
