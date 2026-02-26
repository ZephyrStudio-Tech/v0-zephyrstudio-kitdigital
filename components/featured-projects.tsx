'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Acuarela Andaluza',
    fullTitle: 'Acuarela Andaluza Internacional',
    category: 'Plataforma & Ticketing',
    description: 'Ecosistema digital custom sobre WordPress. Ticketing con QR encriptado, facturación automatizada PDF y pasarela multidivisa (Stripe/PayPal) blindada.',
    image: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/acuarelaandaluzainternacional.png',
    link: 'https://acuarelaandaluzainternacional.com/',
  },
  {
    id: 2,
    title: 'Con Perros y a lo Loco',
    fullTitle: 'Con Perros y a lo Loco',
    category: 'E-Commerce & SEO',
    description: 'Tienda WooCommerce especializada para salón de belleza canino. Implementación de sistema de reservas de citas complejo y estrategia SEO local.',
    image: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/conperrosyaloloco.png',
    link: 'https://conperrosyaloloco.com',
  },
  {
    id: 3,
    title: 'Transportes Julio Aguila',
    fullTitle: 'Transportes Julio Aguila',
    category: 'Web Corporativa',
    description: 'Desarrollo web corporativo multidioma enfocado en la conversión para el exigente sector de la logística y el transporte internacional.',
    image: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/TransportesJulioAguila.png',
    link: 'https://julioaguila.es/',
  },
  {
    id: 4,
    title: 'Dra. Celia Ruiz',
    fullTitle: 'Dra. Celia Ruiz Arranz',
    category: 'Presencia Digital',
    description: 'Portal médico de oftalmología. Diseño UI/UX minimalista y personalizado, estructurado para maximizar la confianza y las reservas.',
    image: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/Dra.CeliaRuizArranz.png',
    link: 'https://celiaruizarranz.es/',
  },
]

export function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="relative px-4 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full bg-[#00e5ff]/5 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold uppercase tracking-[0.15em] mb-6 backdrop-blur-sm">
            Casos de Exito
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
            Impacto Digital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">
              Medible.
            </span>
          </h2>
        </div>

        {/* Flex Accordion Gallery */}
        <div className="flex flex-col md:flex-row w-full h-[70vh] min-h-[600px] md:h-[600px] gap-2 md:gap-4">
          {projects.map((project, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`group relative overflow-hidden rounded-[24px] md:rounded-[32px] cursor-pointer bg-[#0a0a0f] border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isActive
                    ? 'flex-[4] md:flex-[5] border-[#00e5ff]/40 shadow-[0_0_40px_rgba(0,229,255,0.1)]'
                    : 'flex-1 border-white/10'
                  }`}
              >
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.fullTitle}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                    ${isActive ? 'scale-105 opacity-100' : 'scale-100 opacity-60 md:opacity-50'}
                  `}
                />

                {/* Readability Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/95 via-[#030305]/60 to-transparent pointer-events-none" />

                {/* Collapsed State */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none
                    ${isActive ? 'opacity-0' : 'opacity-100'}
                  `}
                >
                  <h3 className="text-white font-bold text-lg md:text-2xl whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180 tracking-widest drop-shadow-2xl px-4 text-center">
                    {project.title}
                  </h3>
                </div>

                {/* Expanded State Content */}
                <div
                  className={`absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                >
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 bg-[#00e5ff]/15 border border-[#00e5ff]/30 text-[#00e5ff] rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 md:mb-4 leading-tight pointer-events-auto">
                    {project.fullTitle}
                  </h3>

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-2xl line-clamp-3 md:line-clamp-none pointer-events-auto">
                    {project.description}
                  </p>

                  <div className="pointer-events-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
                    >
                      Ver Proyecto en Vivo <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
