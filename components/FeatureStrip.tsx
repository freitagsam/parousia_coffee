const features = [
  {
    icon: '☕',
    title: 'In-house Roasting',
    body: 'Every bean roasted fresh at our Richmond roastery.',
  },
  {
    icon: '🌿',
    title: 'Handcrafted Syrups',
    body: 'All seasonal syrups made from scratch, in-house.',
  },
  {
    icon: '🚐',
    title: 'Mobile Café',
    body: 'Our custom trailer brings the experience to you.',
  },
  {
    icon: '📦',
    title: 'Ships Nationwide',
    body: 'Order online — fresh-roasted and on the way.',
  },
]

export default function FeatureStrip() {
  return (
    <div
      style={{
        background: 'var(--off-white)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderLeft: '1px solid var(--border)',
        }}
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="hover-gold-bar"
            style={{
              padding: '2.8rem 2.2rem',
              borderRight: '1px solid var(--border)',
            }}
          >
            <span style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'block' }}>{f.icon}</span>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '.95rem',
                fontWeight: 700,
                color: 'var(--navy-dk)',
                marginBottom: '.4rem',
              }}
            >
              {f.title}
            </div>
            <div
              style={{
                fontSize: '.8rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.7,
              }}
            >
              {f.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
