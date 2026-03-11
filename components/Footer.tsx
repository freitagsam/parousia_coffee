import Link from 'next/link'

const cols = [
  {
    heading: 'Shop',
    links: [
      { label: 'All Coffees',       href: '/shop' },
      { label: 'Cornerstone Blend', href: '/shop' },
      { label: 'MorningStar Blend', href: '/shop' },
      { label: 'Single Origins',    href: '/shop' },
      { label: 'Merchandise',       href: '/shop' },
    ],
  },
  {
    heading: 'Visit',
    links: [
      { label: 'Café Menu',       href: '/menu' },
      { label: 'Hours & Location', href: '#location' },
      { label: 'Book the Trailer', href: 'mailto:hello@parousiacoffee.com' },
      { label: 'Instagram',        href: 'https://instagram.com/parousiacoffee' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',    href: '/about' },
      { label: 'Our Mission', href: '/about' },
      { label: 'Wholesale',   href: 'mailto:hello@parousiacoffee.com' },
      { label: 'Contact',     href: 'mailto:hello@parousiacoffee.com' },
      { label: 'Privacy',     href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-dk)', padding: '4.5rem 6rem 2rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '4rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,.06)',
          marginBottom: '2rem',
        }}
      >
        {/* Brand column */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '.35rem',
              letterSpacing: '.05em',
            }}
          >
            <span style={{ color: 'var(--gold-lt)', fontSize: '.9rem' }}>✦</span>
            PAROUSIA
          </div>
          <div
            style={{
              fontSize: '.58rem',
              fontWeight: 300,
              letterSpacing: '.32em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,.25)',
              marginBottom: '1.2rem',
            }}
          >
            Coffee · Est. 2019
          </div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '.88rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,.35)',
              lineHeight: 1.8,
              maxWidth: 260,
            }}
          >
            Small-batch roasting, handcrafted syrups, and the mobile café — all from Richmond, VA.
          </p>
        </div>

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.heading}>
            <div
              style={{
                fontSize: '.58rem',
                fontWeight: 600,
                letterSpacing: '.3em',
                textTransform: 'uppercase' as const,
                color: 'var(--gold-lt)',
                marginBottom: '1.3rem',
              }}
            >
              {col.heading}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {col.links.map(l => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: '.78rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,.4)',
                      textDecoration: 'none',
                      transition: 'color .2s',
                      letterSpacing: '.03em',
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            fontSize: '.6rem',
            letterSpacing: '.08em',
            color: 'rgba(255,255,255,.18)',
          }}
        >
          © {new Date().getFullYear()} Parousia Coffee LLC. All rights reserved.
        </span>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            fontSize: '.6rem',
            letterSpacing: '.18em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,.18)',
          }}
        >
          <span style={{ color: 'var(--gold-lt)', opacity: .6, fontSize: '.5rem' }}>✦</span>
          Roasted in Richmond, VA
        </span>
      </div>
    </footer>
  )
}
