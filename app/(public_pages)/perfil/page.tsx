'use client'

import { motion } from 'framer-motion'
import { Download, Award, GraduationCap, Heart, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import Image from 'next/image'

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
  },
  {
    name: 'Diplomado en Nutrición Pediátrica',
    institution: 'Instituto de Nutrición y Salud',
    year: '2022'
  }
]

const specializations = [
  'Pérdida de peso saludable',
  'Nutrición deportiva',
  'Nutrición pediátrica',
  'Trastornos alimentarios',
  'Nutrición para embarazadas',
  'Enfermedades metabólicas'
]

export default function ProfilePage() {
  const whatsappLink = "https://wa.me/51987654321?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20nutricional"

  return (
    <div className="min-h-screen bg-gradient-to-br from-nutri-background to-nutri-secondary">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
                  alt="Lic. Gabriela Cardenas Nutricionista"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-nutri-accent rounded-full flex items-center justify-center shadow-lg">
                <Heart className="text-white" size={24} />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-nutri-primary mb-4">
              Lic. Gabriela Cardenas
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Nutricionista Clínica Certificada
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Especialista en nutrición personalizada con más de 5 años de experiencia 
              transformando vidas a través de la alimentación saludable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Agendar Consulta</span>
              </a>
              <a
                href="/cv-maria-elena.pdf"
                download
                className="btn-secondary flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Descargar CV</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-poppins font-bold text-nutri-primary mb-6">
              Mi Historia y Filosofía
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Mi pasión por la nutrición comenzó cuando era estudiante de medicina. 
                  Vi cómo la alimentación correcta podía transformar no solo el cuerpo, 
                  sino también la mente y el espíritu de las personas.
                </p>
                <p>
                  Creo firmemente que cada persona es única, y por eso cada plan nutricional 
                  debe ser diseñado específicamente para sus necesidades, objetivos y estilo de vida. 
                  No hay dietas milagro, solo hábitos sostenibles y conocimiento aplicado.
                </p>
                <p>
                  Mi enfoque se basa en la educación nutricional, el acompañamiento personalizado 
                  y el desarrollo de una relación saludable con la comida que perdure toda la vida.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-nutri-primary to-nutri-data rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-poppins font-bold mb-6">Mi Misión</h3>
              <p className="text-lg leading-relaxed mb-6">
                "Empoderar a cada persona para que tome control de su salud a través 
                de decisiones nutricionales informadas y sostenibles."
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-nutri-secondary rounded-full"></div>
                  <span>Educación nutricional personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-nutri-secondary rounded-full"></div>
                  <span>Acompañamiento continuo y empático</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-nutri-secondary rounded-full"></div>
                  <span>Resultados sostenibles a largo plazo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations */}
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
              Especializaciones
            </h2>
            <p className="text-xl text-gray-600">
              Áreas de expertise y enfoques especializados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((specialization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-nutri-primary to-nutri-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} className="text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-nutri-primary">
                  {specialization}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-poppins font-bold text-nutri-primary mb-4">
              Certificaciones y Formación
            </h2>
            <p className="text-xl text-gray-600">
              Formación continua y certificaciones profesionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card flex items-center space-x-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-nutri-accent to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-nutri-primary mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-1">{cert.institution}</p>
                  <p className="text-sm text-nutri-data font-medium">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section className="py-16 bg-gradient-to-r from-nutri-primary to-nutri-data">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-poppins font-bold text-white mb-6">
              Conéctate Conmigo
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Sígueme en redes sociales para consejos diarios y contenido educativo
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://instagram.com/nutriflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
              >
                <Instagram size={24} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/nutriflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-nutri-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              <span>Agendar Consulta Ahora</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
