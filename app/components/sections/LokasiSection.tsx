"use client";

// ================================================================
//  LokasiSection — Informasi kontak & lokasi warung
// ================================================================

const WA_URL =
  'https://wa.me/6285179824280?text=Permisi%20saya%20ingin%20apa%20bisa%3F';

const CONTACT_ITEMS = [
  {
    label: 'Alamat',
    value: 'Perumahan Tembok Indah Jl. Serayu L-14\nTembokrejo, Kec. Purworejo, Kota Pasuruan 67118',
  },
  {
    label: 'Telepon',
    value: '+62 851-7982-4280',
  },
  {
    label: 'Jam Buka',
    value: 'Senin – Minggu\n10.00 – 21.00 WIB\n(atau sampai habis)',
  },
];

export default function LokasiSection() {
  return (
    <section
      id="lokasi"
      style={{
        padding: '7rem 2rem',
        background: 'var(--cream)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="lokasi-grid"
        >
          {/* Info kontak */}
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
              Temukan Kami
            </span>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              fontWeight: 900,
              color: 'var(--ink)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '2.5rem',
            }}>
              Kami Bukan di<br />
              <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Aplikasi</em> Manapun.
            </h2>

            {/* Detail kontak */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {CONTACT_ITEMS.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    paddingLeft: '1.5rem',
                    borderLeft: '2px solid rgba(184,82,26,0.25)',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    color: 'var(--terracotta)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)',
                    fontWeight: 400,
                    whiteSpace: 'pre-line',
                    lineHeight: 1.6,
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginTop: '3rem',
                padding: '0.9rem 2rem',
                background: 'var(--sienna)',
                color: 'var(--cream)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--terracotta)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--sienna)')}
            >
              Chat WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
          </div>

          {/* Peta placeholder */}
          <div style={{
            background: 'var(--cream-dark)',
            border: '1px solid rgba(184,82,26,0.2)',
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '4rem',
                marginBottom: '1rem',
                opacity: 0.3,
              }}>
                📍
              </div>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                color: 'var(--ink-soft)',
                textTransform: 'uppercase',
                lineHeight: 1.8,
              }}>
                Perumahan Tembok Indah Jl. Serayu L-14<br />
                Kota Pasuruan
              </p>
              <div style={{
                width: '40px',
                height: '2px',
                background: 'var(--terracotta)',
                margin: '1.5rem auto',
              }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: 'rgba(60,44,30,0.5)',
                fontStyle: 'italic',
              }}>
                Warung kuning di pojok, tidak bisa terlewat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .lokasi-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
