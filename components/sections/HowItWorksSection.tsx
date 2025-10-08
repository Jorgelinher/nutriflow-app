'use client'

import { motion } from 'framer-motion'
import { MessageCircle, FileText, TrendingUp, Target, ArrowRight, CheckCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Consulta Inicial Gratuita',
      description: 'Evaluamos tu estado actual, objetivos y necesidades específicas a través de una consulta personalizada.',
      icon: MessageCircle,
      features: ['Análisis de hábitos actuales', 'Evaluación de objetivos', 'Identificación de desafíos'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Plan Personalizado',
      description: 'Creamos un plan nutricional completamente adaptado a tu estilo de vida, preferencias y objetivos.',
      icon: FileText,
      features: ['Menú semanal personalizado', 'Lista de compras inteligente', 'Recetas adaptadas'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '03',
      title: 'Seguimiento Continuo',
      description: 'Acompañamiento constante con ajustes automáticos basados en tu progreso y feedback.',
      icon: TrendingUp,
      features: ['Dashboard de progreso', 'Recordatorios inteligentes', 'Ajustes automáticos'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '04',
      title: 'Resultados Sostenibles',
      description: 'Logra tus objetivos de forma saludable y duradera con hábitos que perduran en el tiempo.',
      icon: Target,
      features: ['Hábitos duraderos', 'Resultados medibles', 'Transformación completa'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-nutri-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-nutri-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-nutri-data rounded-full mix-blend-multiply filter blur-3xl"></div>
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
            <CheckCircle className="w-5 h-5 text-nutri-accent mr-2" />
            <span className="text-nutri-accent font-semibold">Proceso Probado</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-nutri-primary mb-6">
            Cómo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nutri-accent to-nutri-data">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un proceso simple, efectivo y probado para transformar tu salud de forma sostenible
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 mx-auto mb-4 text-nutri-accent"
                    >
                      <step.icon className="w-full h-full" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-nutri-primary mb-4 group-hover:text-nutri-accent transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-nutri-accent mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-nutri-accent/20 via-nutri-data/20 to-nutri-accent/20 transform -translate-y-1/2 z-0"></div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-nutri-primary to-nutri-data rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">¿Listo para comenzar tu transformación?</h3>
              <p className="text-xl mb-6 opacity-90">
                El primer paso es una consulta gratuita. ¡No esperes más!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-nutri-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Consulta Gratuita
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                >
                  Ver Testimonios
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}