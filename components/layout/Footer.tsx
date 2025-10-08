'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-nutri-primary text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">NutriFlow</h3>
            <p className="text-white/90">
              Transformando vidas a través de la nutrición inteligente
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-white/90">
              <li><Link href="/" className="hover:text-white transition-colors font-medium">Inicio</Link></li>
              <li><Link href="/perfil" className="hover:text-white transition-colors font-medium">Sobre Mí</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors font-medium">Servicios</Link></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-white/90">
              WhatsApp: +51 999 999 999
            </p>
            <p className="text-white/90">
              Email: info@nutriflow.com
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-8 pt-8 text-center text-white/90"
        >
          <p>&copy; 2024 NutriFlow. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}