'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Emprendedora',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    text: 'NutriFlow cambió completamente mi relación con la comida. Perdí 15kg de forma saludable y sostenible. ¡Increíble!',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Ejecutivo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    text: 'El seguimiento personalizado y los planes adaptados a mi horario laboral fueron clave para mi éxito.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    role: 'Madre de familia',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    text: 'Finalmente encontré una nutricionista que entiende las necesidades de una familia. Los resultados hablan por sí solos.',
    rating: 5
  },
  {
    id: 4,
    name: 'Roberto Silva',
    role: 'Deportista',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: 'Como deportista, necesitaba un plan que optimizara mi rendimiento. NutriFlow superó mis expectativas.',
    rating: 5
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-nutri-background to-nutri-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-nutri-primary mb-4">
            Lo que Dicen Nuestros Pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de transformación y éxito en el camino hacia una vida más saludable.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card text-center">
              <div className="mb-8">
                <Quote size={48} className="text-nutri-accent mx-auto mb-4" />
                <p className="text-xl text-gray-700 italic leading-relaxed">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-poppins font-semibold text-nutri-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-nutri-accent scale-125' 
                    : 'bg-gray-300 hover:bg-nutri-secondary'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold text-nutri-primary mb-2">500+</div>
              <div className="text-gray-600">Pacientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold text-nutri-primary mb-2">98%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold text-nutri-primary mb-2">5</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold text-nutri-primary mb-2">24/7</div>
              <div className="text-gray-600">Soporte</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
