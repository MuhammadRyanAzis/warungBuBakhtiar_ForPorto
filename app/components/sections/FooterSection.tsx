"use client";

// ================================================================
//  FooterSection — Raw, vintage, berkarakter
// ================================================================

const NAV_LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#menu',    label: 'Menu' },
  { href: '#cerita',  label: 'Cerita Kami' },
  { href: '#lokasi',  label: 'Temukan Kami' },
];

const CONTACT_INFO = [
  { icon: '☎', value: '+62 851-7982-4280' },
  { icon: '⊙', value: 'Perumahan Tembok Indah L-14' },
  { icon: '◷', value: '10.00 – 21.00 WIB' },
];

export default function FooterSection() {
  return (
    <footer
      style={{
        background: 'var(--charcoal)',
        padding: '5rem 2rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dekorasi background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(ellipse 60% 80% at 100% 50%, rgba(184,82,26,0.05) 0%, transparent 70%)
        `,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Brand besar — transparent, dekoratif */}
        <div style={{
          borderBottom: '1px solid rgba(245,240,232,0.1)',
          paddingBottom: '3rem',
          marginBottom: '3rem',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            color: 'rgba(245,240,232,0.08)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            userSelect: 'none',
          }}>
            Warung Bu Bakhtiar
          </h2>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            color: 'var(--terracotta)',
            textTransform: 'uppercase',
            marginTop: '0.75rem',
          }}>
            Masakan Rumahan — Kota Pasuruan — Berdiri 2015
          </p>
        </div>

        {/* 3 kolom */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Kolom 1 — tagline */}
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'rgba(245,240,232,0.45)',
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: '300px',
            }}>
              Tidak ada cabang. Tidak ada reseller. Yang ada hanya satu warung, satu keluarga, dan masakan yang sudah dimasak jutaan kali — dan selalu terasa sama.
            </p>
          </div>

          {/* Kolom 2 — navigasi */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'var(--terracotta)',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}>
              Navigasi
            </h4>
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'rgba(245,240,232,0.4)',
                  textDecoration: 'none',
                  marginBottom: '0.6rem',
                  transition: 'color 0.2s',
                  fontWeight: 300,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.4)')}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Kolom 3 — kontak */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'var(--terracotta)',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}>
              Kontak
            </h4>
            {CONTACT_INFO.map(({ icon, value }) => (
              <div
                key={value}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '0.8rem',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--terracotta)',
                  flexShrink: 0,
                  marginTop: '0.1rem',
                }}>
                  {icon}
                </span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  color: 'rgba(245,240,232,0.4)',
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(245,240,232,0.07)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'rgba(245,240,232,0.2)',
            letterSpacing: '0.1em',
          }}>
            © 2015 – {new Date().getFullYear()} Warung Bu Bakhtiar. Semua resep adalah milik keluarga.
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'rgba(245,240,232,0.15)',
            letterSpacing: '0.08em',
            fontStyle: 'italic',
          }}>
            Dibuat dengan sabar, bukan dengan cepat.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
