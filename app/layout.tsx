import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActionButton } from '@/components/floating-action-button'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'ZephyrStudio | Agente Digitalizador Kit Digital 2026',
  description: 'Consigue hasta 12.000€ a fondo perdido. Tramitamos tu Kit Digital, implantamos Factura Electrónica y proveemos tu Puesto de Trabajo Seguro (Mac/PC).',
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
        <Footer />
        <FloatingActionButton />
        <Analytics />
      </body>
    </html>
  )
}
