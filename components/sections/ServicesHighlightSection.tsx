import { Card } from '@/components/ui/Card'

export default function ServicesHighlightSection() {
  const services = [
    {
      title: "Planes Personalizados",
      description: "Diseñados específicamente para tus objetivos y estilo de vida",
      icon: "🍎"
    },
    {
      title: "Asesoría Online",
      description: "Consultas virtuales desde la comodidad de tu hogar",
      icon: "💻"
    },
    {
      title: "Seguimiento Continuo",
      description: "Acompañamiento constante en tu proceso de transformación",
      icon: "📊"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-nutri-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones nutricionales adaptadas a tus necesidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-nutri-primary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}