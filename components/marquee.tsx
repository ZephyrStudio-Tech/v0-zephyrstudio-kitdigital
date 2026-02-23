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
    <div className="relative py-8 overflow-hidden border-y border-white/10">
      <div className="flex animate-marquee">
        {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-8 font-mono text-lg text-gray-500 hover:text-cyan-400 transition-colors"
          >
            {tech}
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
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  )
}
