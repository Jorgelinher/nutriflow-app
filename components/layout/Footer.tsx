export default function Footer() {
  return (
    <footer className="bg-nutri-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NutriFlow</h3>
            <p className="text-nutri-light">
              Transformando vidas a través de la nutrición inteligente
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-nutri-light">
              <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/perfil" className="hover:text-white transition-colors">Sobre Mí</a></li>
              <li><a href="/servicios" className="hover:text-white transition-colors">Servicios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-nutri-light">
              WhatsApp: +51 999 999 999
            </p>
            <p className="text-nutri-light">
              Email: info@nutriflow.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-nutri-secondary mt-8 pt-8 text-center text-nutri-light">
          <p>&copy; 2024 NutriFlow. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}