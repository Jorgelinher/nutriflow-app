'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const whatsappLink = "https://wa.me/51987654321?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20nutricional"

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-nutri-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-nutri-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-nutri-data rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-nutri-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforma tu salud,{' '}
              <span className="text-nutri-accent">no solo tu dieta</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nutrición inteligente para una vida plena. Planes personalizados 
              que se adaptan a tu estilo de vida y objetivos.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 group"
              >
                <MessageCircle size={24} />
                <span>Hablar con la Nutricionista</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              <a
                href="/servicios"
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Ver Servicios</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-nutri-secondary to-nutri-data rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-6xl">🥗</span>
                  </div>
                  <h3 className="text-2xl font-poppins font-semibold mb-2">
                    Nutrición Personalizada
                  </h3>
                  <p className="text-lg opacity-90">
                    Planes adaptados a ti
                  </p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-nutri-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">100% Personalizado</p>
                    <p className="text-xs text-gray-600">Planes únicos</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-nutri-data rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Seguimiento</p>
                    <p className="text-xs text-gray-600">Progreso constante</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
