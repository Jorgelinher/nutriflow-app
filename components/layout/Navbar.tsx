'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappLink = "https://wa.me/51987654321?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20nutricional"

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg backdrop-blur-sm bg-opacity-95' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-nutri-primary to-nutri-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-poppins font-bold text-xl text-nutri-primary">
              NutriFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-nutri-primary transition-colors duration-200 font-medium"
            >
              Inicio
            </Link>
            <Link 
              href="/public/perfil" 
              className="text-gray-700 hover:text-nutri-primary transition-colors duration-200 font-medium"
            >
              Sobre Mí
            </Link>
            <Link 
              href="/public/servicios" 
              className="text-gray-700 hover:text-nutri-primary transition-colors duration-200 font-medium"
            >
              Servicios
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-nutri-primary transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-nutri-primary transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/public/perfil" 
                className="block px-3 py-2 text-gray-700 hover:text-nutri-primary transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sobre Mí
              </Link>
              <Link 
                href="/public/servicios" 
                className="block px-3 py-2 text-gray-700 hover:text-nutri-primary transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <MessageCircle size={18} />
                  <span>Agendar Consulta</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}