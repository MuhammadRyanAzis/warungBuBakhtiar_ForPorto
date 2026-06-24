// ================================================================
//  FilosofiSection — Prinsip dapur, bukan features dengan icon
// ================================================================

const PRINCIPLES = [
  {
    num: 'I',
    title: 'Tidak ada campuran MSG',
    body: 'Kaldu kami dibuat dari tulang sapi dan ayam kampung yang direbus berjam-jam. Rasa gurih itu asli, bukan dari bubuk.',
  },
  {
    num: 'II',
    title: 'Bahan dari pasar lokal',
    body: 'Setiap pagi pukul 05.30, kami belanja langsung ke Pasar Purworejo. Tidak ada bahan beku, tidak ada stok berhari-hari.',
  },
  {
    num: 'III',
    title: 'Resep tidak pernah ditulis',
    body: 'Semua ada di kepala dan di tangan. Bukan karena rahasia — tapi karena memang begitulah cara masakan turun-temurun bekerja.',
  },
  {
    num: 'IV',
    title: 'Habis ya tutup',
    body: 'Kami tidak membuat lebih dari yang bisa kami jaga kualitasnya. Kalau soto habis jam 14.00, artinya hari itu memang sudah rezeki segitu.',
  },
];

export default function FilosofiSection() {
  return (
    <section
      style={{
        padding: '7rem 2rem',
        background: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.22em',
            color: 'var(--terracotta)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem',
          }}>
            Yang Membedakan Kami
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--cream)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            Prinsip Dapur Kami
          </h2>
        </div>

        {/* Grid 2×2 prinsip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: '1px',
            background: 'rgba(245,240,232,0.07)',
          }}
          className="filosofi-grid"
        >
          {PRINCIPLES.map(({ num, title, body }) => (
            <div
              key={num}
              style={{
                padding: '3rem',
                background: 'var(--ink)',
                borderRight: '1px solid rgba(245,240,232,0.07)',
                borderBottom: '1px solid rgba(245,240,232,0.07)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '3rem',
                fontWeight: 900,
                color: 'rgba(184,82,26,0.2)',
                lineHeight: 1,
                marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}>
                {num}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--cream)',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                color: 'rgba(245,240,232,0.5)',
                lineHeight: 1.8,
                fontWeight: 300,
              }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .filosofi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
