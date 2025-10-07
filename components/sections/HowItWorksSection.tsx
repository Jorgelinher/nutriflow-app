export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Agenda",
      description: "Reserva tu consulta inicial de forma fácil y rápida"
    },
    {
      number: "02", 
      title: "Evalúa",
      description: "Analizamos tu situación actual y objetivos"
    },
    {
      number: "03",
      title: "Personaliza",
      description: "Creamos un plan nutricional único para ti"
    },
    {
      number: "04",
      title: "Progresa",
      description: "Te acompañamos en tu transformación saludable"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-nutri-primary mb-4">
            Cómo Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y efectivo para transformar tu salud
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-nutri-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-nutri-primary mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}