'use client'

export function Marquee() {
  const technologies = [
    'Apple',
    'Next.js',
    'WordPress',
    'WooCommerce',
    'AWS',
    'Odoo',
    'Vercel',
    'TypeScript',
    'PostgreSQL',
    'Stripe'
  ]

  return (
    <div className="relative py-8 overflow-hidden border-y border-white/[0.06]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030305] to-transparent z-10" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030305] to-transparent z-10" />

      <div className="flex animate-marquee">
        {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center gap-8 px-8"
          >
            <span className="text-sm font-medium tracking-wide text-slate-500 uppercase transition-colors duration-300 hover:text-white">
              {tech}
            </span>
            <span className="text-slate-700 select-none" aria-hidden="true">/</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  )
}
