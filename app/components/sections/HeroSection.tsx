// ================================================================
//  HeroSection — Full-bleed landing, typografi editorial
// ================================================================

export default function HeroSection() {
  return (
    <section
      id="beranda"
      style={{
        minHeight: '100vh',
        background: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: '10rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Tekstur background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 70% 40%, rgba(184,82,26,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 40% 50% at 20% 80%, rgba(200,150,31,0.08) 0%, transparent 60%)
        `,
      }} />

      {/* Garis vertikal dekoratif */}
      <div style={{
        position: 'absolute',
        left: '8%',
        top: '10%',
        bottom: '10%',
        width: '1px',
        background: 'rgba(200,150,31,0.2)',
      }} />
      <div style={{
        position: 'absolute',
        left: 'calc(8% + 24px)',
        top: '20%',
        bottom: '20%',
        width: '1px',
        background: 'rgba(200,150,31,0.08)',
      }} />

      {/* Angka tahun besar dekoratif */}
      <div style={{
        position: 'absolute',
        left: '2%',
        bottom: '-5%',
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(12rem, 25vw, 22rem)',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.025)',
        lineHeight: 1,
        userSelect: 'none',
        letterSpacing: '-0.04em',
        pointerEvents: 'none',
      }}>
        2015
      </div>

      {/* Stempel "BUKA setiap hari" */}
      <div style={{
        position: 'absolute',
        right: '5%',
        top: '14%',
        width: '130px',
        height: '130px',
        border: '3px solid rgba(184,82,26,0.5)',
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(12deg)',
        animation: 'stamp-in 0.5s cubic-bezier(.25,.46,.45,.94) 0.8s both',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.5rem',
          letterSpacing: '0.2em',
          color: 'var(--terracotta)',
          textTransform: 'uppercase',
        }}>WARUNG</span>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: 'var(--terracotta)',
          lineHeight: 1,
        }}>BUKA</span>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.9rem',
          fontStyle: 'italic',
          color: 'rgba(184,82,26,0.7)',
        }}>setiap hari</span>
      </div>

      {/* Konten utama */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Heading editorial */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.8rem, 6vw, 7rem)',
          fontWeight: 900,
          color: 'var(--cream)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          maxWidth: '700px',
          animation: 'rise 0.8s cubic-bezier(.25,.46,.45,.94) 0.1s both',
        }}>
          Masak Pakai<br />
          <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Hati,</em>{' '}
          <span style={{ color: 'rgba(245,240,232,0.5)', fontWeight: 400 }}>Bukan</span><br />
          Algoritma.
        </h1>

        {/* Deskripsi */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.05rem',
          color: 'rgba(245,240,232,0.6)',
          maxWidth: '480px',
          marginTop: '2rem',
          marginBottom: '3rem',
          lineHeight: 1.8,
          fontWeight: 300,
          animation: 'rise 0.8s cubic-bezier(.25,.46,.45,.94) 0.25s both',
        }}>
          Tidak ada dapur sentral, tidak ada franchise. Hanya Bu Bakhtiar dan dua putrinya — memasak seperti biasa setiap pagi sejak sebelas tahun lalu.
        </p>

        {/* CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          animation: 'rise 0.8s ease 0.4s both',
        }}>
          <a
            href="#menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.9rem 2.2rem',
              background: 'var(--terracotta)',
              color: 'var(--cream)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--sienna)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--terracotta)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Lihat Menu
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <a
            href="tel:+6285179824280"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'rgba(245,240,232,0.5)',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.5)')}
          >
            +62 851-7982-4280
          </a>
        </div>

        {/* Stats kecil */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          marginTop: '5rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(245,240,232,0.1)',
          animation: 'rise 0.8s ease 0.55s both',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '11+',    label: 'Tahun berdiri' },
            { num: '23',     label: 'Rempah dalam rendang kami' },
            { num: '6 jam',  label: 'Waktu masak rendang' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--cream)',
                lineHeight: 1,
              }}>
                {num}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: 'rgba(245,240,232,0.45)',
                marginTop: '0.3rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
