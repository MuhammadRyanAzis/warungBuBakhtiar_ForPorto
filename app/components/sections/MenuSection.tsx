'use client';

// ================================================================
//  MenuSection — Daftar menu, gaya majalah kuliner + tab filter
// ================================================================

import { useState } from 'react';
import { MENU_ITEMS, MENU_TABS, type TabType } from '@/app/data/menu';

export default function MenuSection() {
  const [activeTab,    setActiveTab]    = useState<TabType>('semua');
  const [hoveredItem,  setHoveredItem]  = useState<string | null>(null);

  const filtered = activeTab === 'semua'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(m => m.type === activeTab);

  return (
    <section
      id="menu"
      style={{
        padding: '7rem 2rem',
        background: 'var(--cream-dark)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header + Tab filter */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '3.5rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              color: 'var(--terracotta)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.75rem',
            }}>
              Apa yang Kami Masak Hari Ini
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--ink)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              Menu Warung
            </h2>
          </div>

          {/* Tab filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {MENU_TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: '0.4rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  borderColor: activeTab === key ? 'var(--terracotta)' : 'rgba(184,82,26,0.25)',
                  background:  activeTab === key ? 'var(--terracotta)' : 'transparent',
                  color:       activeTab === key ? 'var(--cream)'      : 'var(--ink-soft)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Daftar menu — gaya majalah, bukan card grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {filtered.map((item, i) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 1fr auto',
                gap: '2rem',
                alignItems: 'start',
                padding: '2.5rem 0',
                borderBottom: '1px solid rgba(184,82,26,0.15)',
                transition: 'background 0.2s, padding 0.2s',
                background:    hoveredItem === item.id ? 'rgba(184,82,26,0.04)' : 'transparent',
                cursor:        'default',
                paddingLeft:   hoveredItem === item.id ? '1rem' : '0',
                paddingRight:  hoveredItem === item.id ? '1rem' : '0',
              }}
            >
              {/* Nomor urut */}
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'rgba(184,82,26,0.35)',
                letterSpacing: '0.1em',
                paddingTop: '0.3rem',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Info menu */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--ink)',
                    letterSpacing: '-0.01em',
                  }}>
                    {item.name}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: 'var(--terracotta)',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(184,82,26,0.3)',
                    padding: '2px 8px',
                  }}>
                    {item.tagline}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  marginTop: '0.5rem',
                }}>
                  {item.desc}
                </p>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'rgba(184,82,26,0.5)',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginTop: '0.6rem',
                }}>
                  ※ {item.note}
                </span>
              </div>

              {/* Harga */}
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--sienna)',
                whiteSpace: 'nowrap',
                paddingTop: '0.2rem',
              }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Catatan bawah */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'rgba(60,44,30,0.4)',
          letterSpacing: '0.1em',
          textAlign: 'center',
          marginTop: '2.5rem',
        }}>
          ※ Harga dapat berubah sesuai kondisi pasar. Menu terbatas setiap harinya.
        </p>
      </div>
    </section>
  );
}
