'use client'

import { motion } from 'framer-motion'
import { Calendar, ClipboardCheck, Target, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: '1. Agenda tu Consulta',
    description: 'Reserva tu cita de forma fácil y rápida. Consultas presenciales u online.',
    color: 'from-nutri-accent to-pink-500'
  },
  {
    icon: ClipboardCheck,
    title: '2. Evaluación Completa',
    description: 'Análisis detallado de tu estado actual, objetivos y preferencias alimentarias.',
    color: 'from-nutri-primary to-green-600'
  },
  {
    icon: Target,
    title: '3. Plan Personalizado',
    description: 'Diseño de un plan nutricional único adaptado a tu estilo de vida y metas.',
    color: 'from-nutri-data to-blue-600'
  },
  {
    icon: TrendingUp,
    title: '4. Seguimiento Continuo',
    description: 'Monitoreo constante de tu progreso con ajustes y apoyo personalizado.',
    color: 'from-nutri-secondary to-cyan-500'
  }
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-nutri-primary mb-4">
            Cómo Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y efectivo diseñado para garantizar tu éxito 
            en el camino hacia una vida más saludable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <step.icon size={36} className="text-white" />
                </motion.div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-nutri-secondary to-nutri-primary transform translate-x-4"></div>
                )}
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-nutri-primary mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-nutri-primary to-nutri-data rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              ¿Listo para Comenzar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Tu transformación nutricional está a solo un clic de distancia.
            </p>
            <a
              href="https://wa.me/51987654321?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20nutricional"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-nutri-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Agendar Consulta</span>
              <TrendingUp size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}