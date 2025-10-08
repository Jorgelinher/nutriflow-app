import Link from 'next/link'
import { MessageCircle, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const whatsappLink = "https://wa.me/51987654321?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20nutricional"

  return (
    <footer className="bg-nutri-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-nutri-secondary to-white rounded-lg flex items-center justify-center">
                <span className="text-nutri-primary font-bold text-sm">N</span>
              </div>
              <span className="font-poppins font-bold text-xl">NutriFlow</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforma tu salud con planes nutricionales personalizados. 
              Nutrición inteligente para una vida plena.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nutriflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-nutri-secondary transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com/in/nutriflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-nutri-secondary transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-nutri-secondary transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/public/perfil" className="text-gray-300 hover:text-nutri-secondary transition-colors duration-200">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/public/servicios" className="text-gray-300 hover:text-nutri-secondary transition-colors duration-200">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-nutri-secondary" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-nutri-secondary transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-nutri-secondary" />
                <span className="text-gray-300">hola@nutriflow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-nutri-secondary" />
                <span className="text-gray-300">Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 NutriFlow. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}