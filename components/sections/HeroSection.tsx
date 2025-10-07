import { Button } from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-nutri-primary to-nutri-secondary min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            Transforma tu salud, no solo tu dieta
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-nutri-light">
            Nutrición inteligente para una vida plena
          </p>
          <Button 
            size="lg" 
            className="bg-nutri-accent hover:bg-nutri-accent/90 text-white px-8 py-4 text-lg"
          >
            Hablar con la Nutricionista
          </Button>
        </div>
      </div>
    </section>
  )
}