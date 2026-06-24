// ================================================================
//  MarqueeSection — Ticker/scrolling band antara Hero & Cerita
// ================================================================

const MARQUEE_ITEMS = [
  'Soto Ayam Kampung',
  'Rendang Daging Premium',
  'Bakso Spesial Homemade',
  'Nasi Rames Harian',
  'Buka Setiap Hari 10–21 WIB',
  'Masakan Rumahan Asli',
];

export default function MarqueeSection() {
  return (
    <div style={{
      background: 'var(--terracotta)',
      overflow: 'hidden',
      padding: '0.75rem 0',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex',
        gap: '4rem',
        animation: 'marquee 24s linear infinite',
        width: 'max-content',
      }}>
        {Array(3).fill(MARQUEE_ITEMS).flat().map((text, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              color: 'rgba(245,240,232,0.9)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '4rem',
            }}
          >
            {text}
            <span style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.5rem' }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
