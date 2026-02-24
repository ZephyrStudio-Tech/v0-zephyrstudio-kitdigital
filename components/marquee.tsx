'use client'

import React from 'react'

const techLogos = [
  { name: 'Apple', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/apple-11.svg' },
  { name: 'AWS', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/aws-2.svg' },
  { name: 'Canva', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/canva-wordmark-2.svg' },
  { name: 'Figma', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/figma-icon.svg' },
  { name: 'Google Ads', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/google-ads-2.svg' },
  { name: 'Hostinger', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/hostinger.svg' },
  { name: 'Odoo', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/odoo.svg' },
  { name: 'PostgreSQL', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/postgresql-inc.svg' },
  { name: 'WooCommerce', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/woocommerce.svg' },
  { name: 'WordPress', url: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/wordpress-2.svg' }
]

export function Marquee() {
  return (
    <section className="py-12 border-y border-white/[0.05] bg-gradient-to-r from-transparent via-white/[0.01] to-transparent relative overflow-hidden">
      <p className="text-center text-slate-500 text-xs uppercase tracking-[0.2em] font-mono mb-10">
        Stack Tecnológico & Partners
      </p>
      
      {/* Container with fade masks on left and right */}
      <div className="relative flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* Animated scrolling track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          
          {/* We map the array TWICE to create the infinite loop effect */}
          {[...techLogos, ...techLogos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center px-8 md:px-12">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 md:h-10 max-w-[120px] object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
