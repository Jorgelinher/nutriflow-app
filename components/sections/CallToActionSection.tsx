'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-nutri-primary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            ¿Listo para transformar tu salud?
          </h2>
          <p className="text-xl mb-8 text-white">
            Comienza tu journey hacia una vida más saludable hoy mismo
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-nutri-accent hover:bg-nutri-accent/90 text-white px-8 py-4 text-lg"
            >
              Agendar Consulta Gratuita
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}