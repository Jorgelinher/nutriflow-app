'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, Heart } from 'lucide-react'

export default function CallToActionSection() {
  const whatsappLink = "https://wa.me/51987654321?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20nutricional"

  return (
    <section className="py-20 bg-gradient-to-br from-nutri-primary via-nutri-data to-nutri-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3 mb-8"
          >
            <Heart className="text-white" size={20} />
            <span className="text-white font-medium">Tu salud es nuestra prioridad</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
            ¿Listo para Transformar tu Vida?
          </h2>
          
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            No esperes más. Tu mejor versión te está esperando. 
            Comienza hoy mismo tu camino hacia una vida más saludable y plena.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-nutri-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
            >
              <MessageCircle size={24} />
              <span>Hablar con la Nutricionista</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              href="/public/servicios"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-nutri-primary transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Ver Todos los Servicios</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="text-white">
              <div className="text-2xl font-poppins font-bold mb-2">✓</div>
              <div className="text-sm opacity-90">Consulta Gratuita</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-poppins font-bold mb-2">✓</div>
              <div className="text-sm opacity-90">Sin Compromiso</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-poppins font-bold mb-2">✓</div>
              <div className="text-sm opacity-90">Resultados Garantizados</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}