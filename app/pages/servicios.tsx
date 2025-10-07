'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Check, Star, Clock, Users, Target, Heart } from 'lucide-react'

const services = [
  {
    id: 'plan-bienestar-total',
    name: 'Plan Bienestar Total',
    description: 'El plan más completo para una transformación integral de tu salud y bienestar.',
    price: 'Consultar precio',
    duration: '6 meses',
    sessions: '12 consultas',
    features: [
      'Evaluación nutricional completa',
      'Plan alimentario personalizado',
      '4 consultas mensuales',
      'Seguimiento por WhatsApp',
      'Recetas exclusivas',
      'Lista de compras personalizada',
      'Acceso a la app NutriFlow',
      'Reportes de progreso mensuales'
    ],
    popular: true,
    color: 'from-nutri-primary to-green-600'
  },
  {
    id: 'plan-transformacion',
    name: 'Plan Transformación',
    description: 'Perfecto para quienes buscan cambios significativos en su alimentación y estilo de vida.',
    price: 'Consultar precio',
    duration: '3 meses',
    sessions: '6 consultas',
    features: [
      'Evaluación inicial completa',
      'Plan alimentario personalizado',
      '2 consultas mensuales',
      'Seguimiento por WhatsApp',
      'Recetas saludables',
      'Lista de compras básica',
      'Acceso a la app NutriFlow'
    ],
    popular: false,
    color: 'from-nutri-data to-blue-600'
  },
  {
    id: 'plan-mantenimiento',
    name: 'Plan Mantenimiento',
    description: 'Para quienes ya lograron sus objetivos y buscan mantener sus resultados.',
    price: 'Consultar precio',
    duration: '1 mes',
    sessions: '2 consultas',
    features: [
      'Evaluación de seguimiento',
      'Ajustes al plan actual',
      '2 consultas mensuales',
      'Soporte por WhatsApp',
      'Recetas de mantenimiento',
      'Acceso a la app NutriFlow'
    ],
    popular: false,
    color: 'from-nutri-secondary to-cyan-500'
  },
  {
    id: 'consulta-individual',
    name: 'Consulta Individual',
    description: 'Una sesión personalizada para resolver dudas específicas o recibir orientación puntual.',
    price: 'Consultar precio',
    duration: '1 sesión',
    sessions: '1 consulta',
    features: [
      'Evaluación nutricional básica',
      'Recomendaciones personalizadas',
      '1 consulta de 60 minutos',
      'Resumen por escrito',
      'Orientación general'
    ],
    popular: false,
    color: 'from-nutri-accent to-pink-500'
  }
]

const benefits = [
  {
    icon: Target,
    title: 'Planes 100% Personalizados',
    description: 'Cada plan se adapta a tus necesidades, objetivos y estilo de vida específico.'
  },
  {
    icon: Users,
    title: 'Acompañamiento Continuo',
    description: 'Soporte constante y seguimiento personalizado durante todo tu proceso.'
  },
  {
    icon: Heart,
    title: 'Enfoque Integral',
    description: 'No solo te damos un plan, te enseñamos a mantenerlo para toda la vida.'
  },
  {
    icon: Star,
    title: 'Resultados Garantizados',
    description: 'Con nuestro método probado, verás resultados reales y sostenibles.'
  }
]

export default function ServicesPage() {
  const handleServiceInterest = (serviceName: string) => {
    const message = `Hola, estoy interesado en el ${serviceName}. ¿Podrías darme más información?`
    const whatsappLink = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nutri-background to-nutri-secondary">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-nutri-primary mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Planes nutricionales diseñados para transformar tu vida. 
              Elige el que mejor se adapte a tus objetivos y necesidades.
            </p>
            <div className="inline-flex items-center space-x-2 bg-nutri-accent text-white rounded-full px-6 py-3">
              <Star size={20} />
              <span className="font-medium">Más de 500 vidas transformadas</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-nutri-accent' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-nutri-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Heart size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-poppins font-bold text-nutri-primary mb-4">
                  {service.name}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{service.sessions}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-nutri-primary">
                    {service.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check size={20} className="text-nutri-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleServiceInterest(service.name)}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Me Interesa</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-nutri-background to-nutri-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-poppins font-bold text-nutri-primary mb-4">
              ¿Por Qué Elegir NutriFlow?
            </h2>
            <p className="text-xl text-gray-600">
              Nuestro enfoque único garantiza resultados reales y sostenibles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-nutri-primary to-nutri-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-nutri-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-nutri-primary to-nutri-data">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              ¿No Estás Seguro de Qué Plan Elegir?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Agenda una consulta gratuita de 15 minutos y te ayudaremos a elegir 
              el plan perfecto para ti.
            </p>
            <a
              href="https://wa.me/51987654321?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20gratuita%20para%20elegir%20el%20plan%20perfecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-nutri-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              <span>Consulta Gratuita</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
