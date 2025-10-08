'use client'

import { motion } from 'framer-motion'
import { Heart, TrendingUp, MessageCircle, Clock, Shield, Star } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function ServicesHighlightSection() {
  const services = [
    {
      icon: Heart,
      title: 'Planes Personalizados',
      description: 'Diseñados específicamente para tus objetivos, preferencias alimentarias y estilo de vida único.',
      features: ['Análisis nutricional completo', 'Plan alimenticio personalizado', 'Lista de compras inteligente'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento Continuo',
      description: 'Monitoreo constante de tu progreso con ajustes automáticos basados en tus resultados.',
      features: ['Dashboard personalizado', 'Gráficos de progreso', 'Recordatorios inteligentes'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Soporte 24/7',
      description: 'Asesoría nutricional personalizada cuando la necesites, con respuestas en tiempo real.',
      features: ['Chat directo con nutricionista', 'Consultas ilimitadas', 'Soporte por WhatsApp'],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-nutri-background to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-nutri-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-nutri-data rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-nutri-accent/10 rounded-full px-6 py-3 mb-6"
          >
            <Star className="w-5 h-5 text-nutri-accent mr-2" />
            <span className="text-nutri-accent font-semibold">Servicios Profesionales</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-nutri-primary mb-6">
            Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nutri-accent to-nutri-data">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones nutricionales integrales adaptadas a tus necesidades específicas, 
            con el respaldo de una nutricionista certificada y tecnología de vanguardia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-nutri-primary mb-4 group-hover:text-nutri-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-nutri-accent rounded-full mr-3"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-nutri-accent hover:bg-nutri-accent/90 text-white font-semibold py-3 group-hover:shadow-lg transition-all duration-300"
                  >
                    Conocer Más
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-nutri-primary to-nutri-data rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">¿Listo para comenzar tu transformación?</h3>
            <p className="text-xl mb-6 opacity-90">
              Agenda tu consulta inicial gratuita y descubre cómo podemos ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-nutri-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <MessageCircle className="mr-2" size={20} />
                Consulta Gratuita
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
              >
                <Clock className="mr-2" size={20} />
                Ver Horarios
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}