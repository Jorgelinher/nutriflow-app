import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
                alt="Lic. Gabriela Cardenas Nutricionista"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-nutri-primary mb-4">
                Lic. Gabriela Cardenas
              </h1>
              
              <p className="text-lg leading-relaxed mb-6">
                &ldquo;Empoderar a cada persona para que tome control de su salud a través
                de decisiones nutricionales informadas y sostenibles.&rdquo;
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-nutri-primary">Especialidades</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nutrición Clínica</li>
                  <li>• Pérdida de Peso Saludable</li>
                  <li>• Nutrición Deportiva</li>
                  <li>• Alimentación Infantil</li>
                </ul>
              </div>
              
              <Button className="bg-nutri-accent hover:bg-nutri-accent/90">
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
