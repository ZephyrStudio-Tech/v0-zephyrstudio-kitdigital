import React from 'react'

const cards = [
  {
    number: '01',
    title: 'Verificamos tu viabilidad',
    description:
      'Rellenas nuestro formulario en 60 segundos. Comprobamos tus datos con la base de Red.es y te confirmamos si cumples los requisitos legales para la subvención.',
    topDesktop: '100px',
    topMobile: '80px',
    zIndex: 10,
    borderTop: 'rgba(0, 229, 255, 0.3)',
    background: 'rgba(10, 10, 15, 0.97)',
    boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
    numberStyle: { WebkitTextStroke: '2px #00e5ff', color: 'transparent', opacity: 0.5 } as React.CSSProperties,
    textColor: '#94a3b8',
  },
  {
    number: '02',
    title: 'Tramitamos el expediente',
    description:
      'Como Agentes Digitalizadores Adheridos, nos convertimos en tus representantes voluntarios. Hacemos toda la burocracia con el Gobierno para que tú no pierdas ni un minuto.',
    topDesktop: '130px',
    topMobile: '100px',
    zIndex: 20,
    borderTop: 'rgba(0, 24, 216, 0.5)',
    background: 'rgba(10, 10, 15, 0.97)',
    boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
    numberStyle: { WebkitTextStroke: '2px #0018d8', color: 'transparent', opacity: 0.5 } as React.CSSProperties,
    textColor: '#94a3b8',
  },
  {
    number: '03',
    title: 'Aprobación del Bono',
    description:
      'El Estado te notifica la concesión de tu bono (de 1.000€ a 12.000€ según tu segmento). Firmamos el Acuerdo de Prestación de Soluciones y ponemos los motores en marcha.',
    topDesktop: '160px',
    topMobile: '120px',
    zIndex: 30,
    borderTop: 'rgba(168, 85, 247, 0.5)',
    background: 'rgba(10, 10, 15, 0.97)',
    boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
    numberStyle: { WebkitTextStroke: '2px #a855f7', color: 'transparent', opacity: 0.5 } as React.CSSProperties,
    textColor: '#94a3b8',
  },
  {
    number: '04',
    title: 'Despliegue y Hardware',
    description:
      'Entregamos tu ordenador Mac/PC blindado, publicamos tu nueva web o activamos tu software de Factura Electrónica. Disfrutas de 12 meses de soporte premium incluido.',
    topDesktop: '190px',
    topMobile: '140px',
    zIndex: 40,
    borderTop: 'rgba(255,255,255,0.2)',
    background: 'linear-gradient(145deg, rgba(10,10,15,0.99), rgba(0,24,216,0.18))',
    boxShadow: '0 -20px 40px rgba(0,229,255,0.07)',
    numberStyle: {} as React.CSSProperties,
    isLast: true,
    textColor: '#cbd5e1',
  },
]

export function ProcessSteps() {
  return (
    /*
     * ⚠️  STICKY STACKING REQUIREMENT:
     * For the stacking effect to work, NO ancestor of this component
     * may have overflow:hidden or overflow:auto/scroll.
     * Your page/layout wrapper must use overflow:visible (or omit overflow entirely).
     */
    <section style={{ paddingTop: '80px', paddingBottom: '80px', position: 'relative', zIndex: 20 }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem', padding: '0 1.5rem' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '0.4rem 1.2rem',
            background: 'rgba(0, 229, 255, 0.08)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            color: '#00e5ff',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1.25rem',
          }}
        >
          Proceso Cero Estrés
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Nosotros hacemos el papeleo.
          <br />
          <span
            style={{
              color: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              backgroundImage: 'linear-gradient(to right, #00e5ff, #0018d8)',
            }}
          >
            Tú recibes el Kit Digital.
          </span>
        </h2>
      </div>

      {/*
       * Stack container rules:
       * 1. No gap — gap on a flex container breaks sticky children
       * 2. overflow: visible — must NOT be hidden/auto
       * 3. Large padding-bottom — gives scroll room for cards to fully stack
       * 4. Each card has marginTop so the "peek" of the card beneath is visible
       *    before it gets covered by the next one sliding over it
       */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'visible',
        }}
      >
        {cards.map((card, i) => (
          <article
            key={card.number}
            style={{
              position: 'sticky',
              // Use a CSS custom property trick via inline style for responsive top
              // We handle desktop/mobile top via a wrapper approach below
              top: card.topDesktop,
              zIndex: card.zIndex,
              background: card.background,
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: `2px solid ${card.borderTop}`,
              borderRadius: '32px',
              boxShadow: card.boxShadow,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              marginTop: i === 0 ? 0 : '1.5rem',
            }}
          >
            {/* Inner content — responsive via CSS */}
            <style>{`
              .ps-card-inner {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 3rem 4rem;
                gap: 4rem;
              }
              .ps-number {
                font-size: 6rem;
                font-weight: 900;
                font-family: monospace;
                flex-shrink: 0;
                line-height: 1;
              }
              .ps-title {
                font-size: 2rem;
                font-weight: 700;
                color: #ffffff;
                margin: 0 0 1rem 0;
              }
              .ps-desc {
                font-size: 1.1rem;
                line-height: 1.6;
                font-weight: 300;
                margin: 0;
              }
              @media (max-width: 768px) {
                .ps-card-inner {
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 1.75rem 1.5rem;
                  gap: 0.75rem;
                }
                .ps-number {
                  font-size: 4rem;
                }
                .ps-title {
                  font-size: 1.35rem;
                  margin-bottom: 0.5rem;
                }
                .ps-desc {
                  font-size: 0.95rem;
                }
                /* Mobile sticky tops — override inline style */
                .ps-card-1 { top: 80px !important; }
                .ps-card-2 { top: 100px !important; }
                .ps-card-3 { top: 120px !important; }
                .ps-card-4 { top: 140px !important; }
              }
            `}</style>

            <div className={`ps-card-inner ps-card-${i + 1}`}>
              {card.isLast ? (
                <div
                  className="ps-number"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, #00e5ff, #0018d8)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {card.number}
                </div>
              ) : (
                <div className="ps-number" style={card.numberStyle}>
                  {card.number}
                </div>
              )}
              <div>
                <h3 className="ps-title">{card.title}</h3>
                <p className="ps-desc" style={{ color: card.textColor }}>
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}