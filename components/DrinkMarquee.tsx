/* ─────────────────────────────────────────────
   DrinkMarquee — scrolling row of drink SVGs
   ───────────────────────────────────────────── */

// ── Shared cup / glass shapes ──────────────────

/** Standard ceramic mug */
function HotMug({
  liquid, foam, cup = '#f5f0e8', steam = true, small = false,
}: {
  liquid: string; foam?: string; cup?: string; steam?: boolean; small?: boolean
}) {
  const h = small ? 20 : 26
  const top = small ? 16 : 12
  return (
    <svg viewBox="0 0 34 46" width={small ? 28 : 34} height={small ? 38 : 46} fill="none">
      {/* saucer */}
      <ellipse cx="17" cy="40" rx="13" ry="3" fill="rgba(0,0,0,.12)" />
      <ellipse cx="17" cy="39" rx="12" ry="2.5" fill={cup} opacity=".6" />
      {/* cup body */}
      <path d={`M7 ${top} L8 37 Q17 41 26 37 L27 ${top} Z`} fill={cup} />
      {/* liquid fill */}
      <clipPath id={`hm-${liquid.replace('#','')}`}>
        <path d={`M7 ${top} L8 37 Q17 41 26 37 L27 ${top} Z`} />
      </clipPath>
      <rect
        x="7" y={top + 2} width="20" height={h}
        fill={liquid}
        clipPath={`url(#hm-${liquid.replace('#','')})`}
      />
      {/* foam layer */}
      {foam && (
        <ellipse
          cx="17" cy={top + 2} rx="9" ry="3.5"
          fill={foam}
          clipPath={`url(#hm-${liquid.replace('#','')})`}
        />
      )}
      {/* rim */}
      <rect x="6" y={top - 3} width="22" height="5" rx="2" fill={cup} />
      {/* handle */}
      <path d={`M27 ${top + 4} Q34 ${top + 6} 34 ${top + 11} Q34 ${top + 16} 27 ${top + 18}`}
        fill="none" stroke={cup} strokeWidth="3" strokeLinecap="round" />
      {/* cup outline shimmer */}
      <path d={`M9 ${top + 3} L10 34`} stroke="rgba(255,255,255,.18)" strokeWidth="2" strokeLinecap="round" />
      {/* steam */}
      {steam && (
        <>
          <path d={`M12 ${top - 5} Q11 ${top - 10} 12 ${top - 15}`}
            stroke="rgba(255,255,255,.35)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d={`M17 ${top - 7} Q16 ${top - 12} 17 ${top - 17}`}
            stroke="rgba(255,255,255,.28)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d={`M22 ${top - 5} Q21 ${top - 10} 22 ${top - 15}`}
            stroke="rgba(255,255,255,.22)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </>
      )}
    </svg>
  )
}

/** Tall iced glass with straw */
function IcedGlass({ liquid, straw = '#c49a1a', tint = 'rgba(255,255,255,.12)' }: {
  liquid: string; straw?: string; tint?: string
}) {
  return (
    <svg viewBox="0 0 30 50" width="30" height="50" fill="none">
      {/* shadow */}
      <ellipse cx="15" cy="46" rx="10" ry="2.5" fill="rgba(0,0,0,.12)" />
      {/* glass walls */}
      <path d="M5 4 L3 42 L27 42 L25 4 Z" fill={tint} />
      {/* liquid fill */}
      <clipPath id={`ig-${liquid.replace('#','')}`}>
        <path d="M5 4 L3 42 L27 42 L25 4 Z" />
      </clipPath>
      <rect x="3" y="8" width="24" height="34"
        fill={liquid} opacity=".78"
        clipPath={`url(#ig-${liquid.replace('#','')})`}
      />
      {/* ice cubes */}
      <g clipPath={`url(#ig-${liquid.replace('#','')})`}>
        <rect x="7"  y="14" width="7" height="6" rx="1.5"
          fill="rgba(255,255,255,.65)" transform="rotate(-8 10 17)" />
        <rect x="15" y="18" width="6" height="6" rx="1.5"
          fill="rgba(255,255,255,.55)" transform="rotate(6 18 21)" />
        <rect x="8"  y="26" width="5" height="5" rx="1.5"
          fill="rgba(255,255,255,.5)"  transform="rotate(-4 10 28)" />
      </g>
      {/* glass shimmer */}
      <path d="M7 6 L5 38" stroke="rgba(255,255,255,.25)" strokeWidth="2" strokeLinecap="round" />
      {/* glass outline */}
      <path d="M5 4 L3 42 L27 42 L25 4 Z"
        stroke="rgba(255,255,255,.15)" strokeWidth="1" fill="none" />
      {/* rim */}
      <ellipse cx="15" cy="4" rx="10" ry="2.5"
        fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
      {/* straw */}
      <rect x="20" y="-2" width="3" height="34" rx="1.5" fill={straw} />
      <rect x="20" y="-2" width="1.2" height="34" rx=".6"
        fill="rgba(255,255,255,.3)" />
    </svg>
  )
}

/** Small cortado / espresso glass */
function CortadoGlass({ bottom, top: topColor }: { bottom: string; top: string }) {
  return (
    <svg viewBox="0 0 26 36" width="26" height="36" fill="none">
      <ellipse cx="13" cy="32" rx="9" ry="2" fill="rgba(0,0,0,.12)" />
      {/* glass body */}
      <path d="M5 6 L4 28 L22 28 L21 6 Z" fill="rgba(255,255,255,.1)" />
      <clipPath id="cg-clip">
        <path d="M5 6 L4 28 L22 28 L21 6 Z" />
      </clipPath>
      {/* espresso bottom layer */}
      <rect x="4" y="18" width="18" height="10" fill={bottom}
        clipPath="url(#cg-clip)" />
      {/* milk top layer */}
      <rect x="4" y="8"  width="18" height="10" fill={topColor} opacity=".8"
        clipPath="url(#cg-clip)" />
      {/* shimmer */}
      <path d="M7 8 L6 26" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" strokeLinecap="round" />
      {/* outline */}
      <path d="M5 6 L4 28 L22 28 L21 6 Z"
        stroke="rgba(255,255,255,.18)" strokeWidth="1" fill="none" />
      {/* rim */}
      <ellipse cx="13" cy="6" rx="8" ry="2"
        fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
      {/* saucer */}
      <ellipse cx="13" cy="29" rx="11" ry="2.5" fill="rgba(255,255,255,.12)" />
    </svg>
  )
}

// ── Drink definitions ──────────────────────────

const drinks = [
  {
    label: 'Espresso',
    el: <HotMug liquid="#1e0905" cup="#e8e0d4" foam={undefined} steam />,
  },
  {
    label: 'Cappuccino',
    el: <HotMug liquid="#a0542a" foam="#f5f0e8" cup="#e8e0d4" steam />,
  },
  {
    label: 'Honey Cinnamon Latte',
    el: <HotMug liquid="#d4952a" foam="#faebd7" cup="#e8dfd0" steam />,
  },
  {
    label: 'Cold Brew',
    el: <IcedGlass liquid="#1a0905" straw="#1a3a58" tint="rgba(255,255,255,.08)" />,
  },
  {
    label: 'Matcha Latte',
    el: <HotMug liquid="#6fa845" foam="#e8f5dc" cup="#e8e0d4" steam />,
  },
  {
    label: 'Lavender Latte',
    el: <HotMug liquid="#9b7dbf" foam="#ede0f8" cup="#e8e0d4" steam />,
  },
  {
    label: 'Caramel Cortado',
    el: <CortadoGlass bottom="#4a1e08" top="#d4954a" />,
  },
  {
    label: 'Iced Matcha',
    el: <IcedGlass liquid="#72b84a" straw="#c49a1a" tint="rgba(200,240,180,.15)" />,
  },
  {
    label: 'Brown Sugar Latte',
    el: <HotMug liquid="#b06a38" foam="#f0dfc8" cup="#e8e0d4" steam />,
  },
  {
    label: 'Cardamom Rose',
    el: <HotMug liquid="#d4758a" foam="#fce8f0" cup="#e8e0d4" steam />,
  },
  {
    label: 'Americano',
    el: <HotMug liquid="#160704" cup="#e8e0d4" foam={undefined} steam />,
  },
  {
    label: 'Iced Latte',
    el: <IcedGlass liquid="#c8855a" straw="#c49a1a" tint="rgba(255,255,255,.12)" />,
  },
]

// One "set" must be wider than the widest viewport so translateX(-50%)
// never exposes empty space. At ~94px per item, 3×12 = 36 items ≈ 3384px
// which clears even 2560px 4K screens. Double it for the seamless loop.
const set    = [...drinks, ...drinks, ...drinks]
const doubled = [...set, ...set]

export default function DrinkMarquee() {
  return (
    <div
      style={{
        background: 'var(--navy-dk)',
        padding: '.6rem 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,.04)',
        borderBottom: '1px solid rgba(255,255,255,.04)',
      }}
    >
      <div
        className="drinks-ticker"
        style={{ display: 'flex', whiteSpace: 'nowrap', alignItems: 'center' }}
      >
        {doubled.map((drink, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexShrink: 0,
              padding: '0 2rem',
            }}
          >
            {drink.el}
          </span>
        ))}
      </div>
    </div>
  )
}
