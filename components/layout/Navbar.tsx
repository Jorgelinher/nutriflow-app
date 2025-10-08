import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-nutri-primary">
            NutriFlow
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-nutri-primary transition-colors">
              Inicio
            </Link>
            <Link href="/perfil" className="text-gray-700 hover:text-nutri-primary transition-colors">
              Sobre Mí
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-nutri-primary transition-colors">
              Servicios
            </Link>
          </div>
          
          <Button className="bg-nutri-accent hover:bg-nutri-accent/90 text-white">
            Agendar Consulta
          </Button>
        </div>
      </div>
    </nav>
  )
}