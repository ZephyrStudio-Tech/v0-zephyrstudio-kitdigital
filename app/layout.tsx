import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'ZephyrStudio - Arquitectura Digital Premium | Kit Digital 2026',
  description: 'Agentes digitalizadores adheridos. Desplegamos tu infraestructura en la nube y te equipamos con hardware empresarial financiado al 100% por el Bono Digital.',
  generator: 'v0.app',
  icons: {
    icon: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/favicon_zephyrstudio.png',
    apple: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/favicon_zephyrstudio.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
