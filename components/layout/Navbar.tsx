'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="text-2xl font-bold text-nutri-primary">
              NutriFlow
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/" className="text-gray-800 hover:text-nutri-primary transition-colors font-medium">
                Inicio
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/perfil" className="text-gray-800 hover:text-nutri-primary transition-colors font-medium">
                Sobre Mí
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/servicios" className="text-gray-800 hover:text-nutri-primary transition-colors font-medium">
                Servicios
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button className="bg-nutri-accent hover:bg-nutri-accent/90 text-white">
              Agendar Consulta
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}