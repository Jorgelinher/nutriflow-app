import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'NutriFlow - Nutrición Inteligente para una Vida Plena',
  description: 'Transforma tu salud con planes nutricionales personalizados. Consultas online con nutricionista certificada. ¡Agenda tu consulta hoy!',
  keywords: 'nutricionista online, plan alimenticio personalizado, consulta nutricional, asesoría nutrición, dieta personalizada',
  authors: [{ name: 'NutriFlow' }],
  openGraph: {
    title: 'NutriFlow - Nutrición Inteligente',
    description: 'Transforma tu salud con planes nutricionales personalizados',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
