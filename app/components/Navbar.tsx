'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          transition: 'background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(245,240,232,0.96)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(184,82,26,0.15)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}>

            {/* Brand — serif, editorial */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: 900,
                color: scrolled ? 'var(--sienna)' : 'var(--terracotta-light)',
                letterSpacing: '-0.02em',
                transition: 'color 0.4s ease',
              }}>
                Warung Bu Bakhtiar
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: scrolled ? 'var(--terracotta)' : 'rgba(245,240,232,0.6)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginTop: '2px',
                transition: 'color 0.4s ease',
              }}>
                Est. 2015 — Masakan Rumahan
              </span>
            </Link>

            {/* Desktop nav — minimal, no buttons */}
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              {[
                { href: '#menu', label: 'Menu' },
                { href: '#cerita', label: 'Cerita Kami' },
                { href: '#lokasi', label: 'Temukan Kami' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    color: scrolled ? 'var(--ink-soft)' : 'rgba(245,240,232,0.7)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--terracotta)')}
                  onMouseLeave={e => (e.currentTarget.style.color = scrolled ? 'var(--ink-soft)' : 'rgba(245,240,232,0.7)')}
                >
                  {label}
                </Link>
              ))}

              {/* Divider */}
              <span style={{ width: '1px', height: '28px', background: scrolled ? 'rgba(184,82,26,0.25)' : 'rgba(245,240,232,0.2)', display: 'block', transition: 'background 0.4s ease' }} />

              {/* Jam buka — detail human */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: scrolled ? 'var(--terracotta)' : 'rgba(245,240,232,0.6)', letterSpacing: '0.1em', transition: 'color 0.4s ease' }}>
                  BUKA TIAP HARI
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: scrolled ? 'var(--ink)' : 'rgba(245,240,232,0.9)', fontWeight: 500, transition: 'color 0.4s ease' }}>
                  10.00 — 21.00
                </span>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block',
                  width: i === 1 ? '20px' : '28px',
                  height: '2px',
                  background: 'var(--sienna)',
                  transition: 'transform 0.3s',
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{
            background: 'var(--cream)',
            borderTop: '1px solid rgba(184,82,26,0.15)',
            padding: '1.5rem 2rem',
          }}>
            {[
              { href: '#menu', label: 'Menu' },
              { href: '#cerita', label: 'Cerita Kami' },
              { href: '#lokasi', label: 'Temukan Kami' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(184,82,26,0.1)',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
