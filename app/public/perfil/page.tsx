'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Award, GraduationCap, Heart, Instagram, Linkedin, MessageCircle, Star } from 'lucide-react'

const certifications = [
  {
    name: 'Licenciatura en Nutrición',
    institution: 'Universidad Nacional Mayor de San Marcos',
    year: '2018'
  },
  {
    name: 'Especialización en Nutrición Clínica',
    institution: 'Colegio de Nutricionistas del Perú',
    year: '2020'
  },
  {
    name: 'Certificación en Nutrición Deportiva',
    institution: 'International Society of Sports Nutrition',
    year: '2021'
  }
]

const achievements = [
  {
    number: '500+',
    label: 'Pacientes Atendidos',
    icon: Heart
  },
  {
    number: '5',
    label: 'Años de Experiencia',
    icon: Award
  },
  {
    number: '98%',
    label: 'Satisfacción del Cliente',
    icon: Star
  }
]

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nutri-background to-nutri-secondary">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop&crop=face"
                    alt="Lic. Gabriela Cardenas Nutricionista"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-nutri-accent text-white p-4 rounded-full shadow-lg">
                    <GraduationCap size={32} />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-5xl lg:text-6xl font-poppins font-bold text-nutri-primary mb-4">
                    Lic. Gabriela Cardenas
                  </h1>
                  <p className="text-2xl text-nutri-data font-medium mb-6">
                    Nutricionista Clínica Certificada
                  </p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                >
                  <p className="text-lg leading-relaxed text-gray-700 italic">
                    &ldquo;Empoderar a cada persona para que tome control de su salud a través
                    de decisiones nutricionales informadas y sostenibles.&rdquo;
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button 
                    size="lg"
                    className="bg-nutri-accent hover:bg-nutri-accent/90 text-white px-8 py-4 text-lg"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Agendar Consulta
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg"
                  >
                    Ver Servicios
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="p-8 hover:shadow-xl transition-shadow">
                    <achievement.icon className="w-16 h-16 text-nutri-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-nutri-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {achievement.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-nutri-primary to-nutri-data text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-poppins font-bold mb-8">Mi Historia</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Con más de 5 años de experiencia en nutrición clínica, me especializo en 
                crear planes alimenticios personalizados que se adaptan al estilo de vida 
                y objetivos de cada paciente.
              </p>
              <p>
                Mi enfoque se basa en la educación nutricional, empoderando a mis pacientes 
                para que tomen decisiones informadas sobre su alimentación y desarrollen 
                hábitos saludables duraderos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-nutri-primary mb-4">
                Certificaciones y Formación
              </h2>
              <p className="text-xl text-gray-600">
                Educación continua para brindarte el mejor servicio
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow">
                    <div className="text-center">
                      <GraduationCap className="w-12 h-12 text-nutri-accent mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-nutri-primary mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{cert.institution}</p>
                      <p className="text-sm text-nutri-data font-medium">{cert.year}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-nutri-accent text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-poppins font-bold mb-6">
              ¿Listo para Transformar tu Salud?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda tu consulta inicial y comienza tu journey hacia una vida más saludable
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-white text-nutri-accent hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <MessageCircle className="mr-2" size={20} />
                Agendar Consulta Gratuita
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
