import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActionButton } from '@/components/floating-action-button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Kit Digital 2026 con tramitación automática | ZephyrStudio',
  description: 'Consigue hasta 12.000€ en ayudas. Verificamos tu caso en 60s y activamos un proceso automatizado (sin llamadas): solicitud, firmas y puesta en marcha de soluciones.',
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
        <Header />
        {children}
        <Footer />
        <FloatingActionButton />
        <Analytics />
      </body>
    </html>
  )
}
