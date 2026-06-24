// ================================================================
//  CeritaSection — Tentang warung, narasi autentik
// ================================================================

const SCHEDULE_ITEMS = [
  { label: 'Belanja pasar', value: 'Pukul 05.30 WIB' },
  { label: 'Mulai memasak', value: 'Pukul 07.00 WIB' },
  { label: 'Buka warung',   value: 'Pukul 10.00 WIB' },
  { label: 'Menu berakhir', value: 'Habis ya habis' },
];

export default function CeritaSection() {
  return (
    <section
      id="cerita"
      style={{
        padding: '7rem 2rem',
        background: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ornamen teks besar di background */}
      <div style={{
        position: 'absolute',
        right: '-0.02em',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(10rem, 20vw, 18rem)',
        fontWeight: 900,
        color: 'rgba(184,82,26,0.04)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        Cerita
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="story-grid"
        >
          {/* Kiri — identitas singkat */}
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              color: 'var(--terracotta)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.2rem',
            }}>
              Tentang Warung
            </span>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              fontWeight: 900,
              color: 'var(--ink)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}>
              Diwariskan,<br />
              <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Bukan</em><br />
              Difranchise.
            </h2>

            {/* Quote Bu Bakhtiar */}
            <div style={{
              borderLeft: '3px solid var(--terracotta)',
              paddingLeft: '1.5rem',
              marginTop: '2.5rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
              }}>
                &ldquo;Kalau mau enak, ya harus sabar. Rendang saya tidak bisa diproses cepat — itu rahasianya.&rdquo;
              </p>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--terracotta)',
                letterSpacing: '0.1em',
                display: 'block',
                marginTop: '0.8rem',
              }}>
                — Bu Bakhtiar, Pendiri
              </span>
            </div>

            {/* Tahun berdiri */}
            <div style={{ marginTop: '3rem' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '5rem',
                fontWeight: 900,
                color: 'rgba(184,82,26,0.15)',
                lineHeight: 1,
                display: 'block',
              }}>
                2015
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--terracotta)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                Pertama kali buka
              </span>
            </div>
          </div>

          {/* Kanan — narasi panjang + jadwal */}
          <div style={{ paddingTop: '3.5rem' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
              fontWeight: 300,
            }}>
              Warung Bu Bakhtiar mulai dari kompor satu tungku di dapur rumah, Perumahan Tembok Indah, Pasuruan, 2015. Tidak ada rencana besar. Bu Bakhtiar hanya ingin para tetangga bisa makan siang yang benar.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
              fontWeight: 300,
            }}>
              Sebelas tahun kemudian, masih kompor yang sama. Resep yang sama. Tangan yang memasak mungkin berganti dari ibu ke anak perempuannya — tapi cara masaknya tidak berubah.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.85,
              fontWeight: 300,
            }}>
              Kami tidak punya aplikasi pesan antar. Kami tidak punya program loyalty. Yang kami punya adalah menu tulis tangan di papan kayu dan kuah soto yang sudah ribuan orang rindu.
            </p>

            {/* Jadwal harian */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginTop: '3rem',
              borderTop: '1px solid rgba(184,82,26,0.15)',
              paddingTop: '2rem',
            }}>
              {SCHEDULE_ITEMS.map(({ label, value }) => (
                <div key={label} style={{
                  borderLeft: '1px solid rgba(184,82,26,0.2)',
                  paddingLeft: '1rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: 'var(--terracotta)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--ink)',
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
