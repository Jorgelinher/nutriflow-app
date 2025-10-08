'use client'

import { motion } from 'framer-motion'
import { Utensils, Users, TrendingUp, Heart } from 'lucide-react'

const services = [
  {
    icon: Utensils,
    title: 'Planes Personalizados',
    description: 'Diseñados específicamente para tus objetivos, preferencias alimentarias y estilo de vida.',
    features: ['Análisis nutricional completo', 'Menús semanales', 'Lista de compras']
  },
  {
    icon: Users,
    title: 'Asesoría Online',
    description: 'Consultas virtuales con seguimiento continuo y apoyo personalizado.',
    features: ['Consultas por video', 'Chat directo', 'Seguimiento 24/7']
  },
  {
    icon: TrendingUp,
    title: 'Seguimiento Continuo',
    description: 'Monitoreo de tu progreso con ajustes constantes para optimizar resultados.',
    features: ['Registro de progreso', 'Ajustes automáticos', 'Reportes detallados']
  }
]

export default function ServicesHighlightSection() {
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
            Servicios que Transforman
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una experiencia completa de nutrición personalizada 
            que se adapta a tus necesidades específicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-nutri-primary to-nutri-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-nutri-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-nutri-accent rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-nutri-background rounded-full px-6 py-3">
            <Heart className="text-nutri-accent" size={20} />
            <span className="text-nutri-primary font-medium">
              Más de 500 vidas transformadas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}