'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-nutri-primary to-nutri-secondary min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-poppins font-bold mb-6"
          >
            Transforma tu salud, no solo tu dieta
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-nutri-light"
          >
            Nutrición inteligente para una vida plena
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-nutri-accent hover:bg-nutri-accent/90 text-white px-8 py-4 text-lg"
            >
              Hablar con la Nutricionista
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}