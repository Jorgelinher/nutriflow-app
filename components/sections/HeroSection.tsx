'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from 'lucide-react'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-nutri-primary via-nutri-data to-nutri-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nutri-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-nutri-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-nutri-data rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
            >
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span>Nutricionista Certificada</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-poppins font-bold leading-tight"
            >
              Transforma tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nutri-accent to-yellow-400">
                salud
              </span>
              <br />
              no solo tu dieta
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl"
            >
              Nutrición inteligente y personalizada para una vida plena. 
              Planes alimenticios diseñados específicamente para ti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-nutri-accent hover:bg-nutri-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-nutri-accent/25 transition-all duration-300 group"
              >
                <Users className="mr-2" size={20} />
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                <Play className="mr-2" size={20} />
                Ver Cómo Funciona
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-nutri-accent">500+</div>
                <div className="text-sm text-white/80">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nutri-accent">98%</div>
                <div className="text-sm text-white/80">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nutri-accent">5</div>
                <div className="text-sm text-white/80">Años Experiencia</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full max-w-lg mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop&crop=face"
                  alt="Lic. Gabriela Cardenas - Nutricionista"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-nutri-accent rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-nutri-primary">Certificada</div>
                      <div className="text-sm text-gray-600">Nutricionista</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-nutri-data rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-nutri-primary">500+</div>
                      <div className="text-sm text-gray-600">Pacientes</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}