import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ServiciosPage() {
  const servicios = [
    {
      id: 1,
      nombre: "Plan Bienestar Total",
      descripcion: "Plan integral de nutrición personalizada",
      incluye: [
        "4 consultas mensuales",
        "Plan de comidas personalizado",
        "Seguimiento semanal",
        "Acceso a la app móvil"
      ],
      precio: "Consultar precio"
    },
    {
      id: 2,
      nombre: "Asesoría Online",
      descripcion: "Consulta virtual especializada",
      incluye: [
        "Consulta de 60 minutos",
        "Evaluación nutricional",
        "Recomendaciones personalizadas",
        "Seguimiento por WhatsApp"
      ],
      precio: "S/ 150"
    },
    {
      id: 3,
      nombre: "Plan Deportivo",
      descripcion: "Nutrición para atletas y deportistas",
      incluye: [
        "Evaluación de rendimiento",
        "Plan pre y post entrenamiento",
        "Suplementación natural",
        "Monitoreo de progreso"
      ],
      precio: "Consultar precio"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-nutri-primary mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planes nutricionales personalizados para cada necesidad
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicios.map((servicio) => (
            <Card key={servicio.id} className="p-8 text-center">
              <h3 className="text-2xl font-bold text-nutri-primary mb-4">
                {servicio.nombre}
              </h3>
              <p className="text-gray-600 mb-6">
                {servicio.descripcion}
              </p>
              
              <ul className="text-left space-y-2 mb-6">
                {servicio.incluye.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-nutri-accent mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="text-2xl font-bold text-nutri-primary mb-6">
                {servicio.precio}
              </div>
              
              <Button className="w-full bg-nutri-accent hover:bg-nutri-accent/90">
                Me Interesa
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
