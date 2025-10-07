'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "María González",
      text: "Gracias a NutriFlow logré perder 15 kilos de forma saludable y sostenible. El seguimiento personalizado fue clave.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodríguez",
      text: "La asesoría online me permitió mantener mi rutina de trabajo mientras mejoraba mi alimentación.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Ana Martínez",
      text: "El plan personalizado se adaptó perfectamente a mis necesidades como deportista. Increíble experiencia.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-nutri-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-nutri-primary mb-4">
            Lo que dicen nuestros pacientes
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-nutri-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}