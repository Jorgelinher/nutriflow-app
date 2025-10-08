import Button from '@/components/ui/Button'

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-nutri-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            ¿Listo para transformar tu salud?
          </h2>
          <p className="text-xl mb-8 text-nutri-light">
            Comienza tu journey hacia una vida más saludable hoy mismo
          </p>
          <Button 
            size="lg" 
            className="bg-nutri-accent hover:bg-nutri-accent/90 text-white px-8 py-4 text-lg"
          >
            Agendar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}