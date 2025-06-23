// src/components/Footer.tsx

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-8 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo y marca */}
        <div>
          <img src="/Logo1.png" alt="Logo TIM" className="h-10 mb-2" />
          <p className="font-semibold">Transporte Interprovincial Miranda</p>
          <p className="mt-1 text-sm text-gray-light">Viajando contigo desde 1980</p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Enlaces</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-accent">Inicio</Link></li>
            <li><Link to="/mis-viajes" className="hover:text-accent">Mis viajes</Link></li>
            <li><Link to="/encomiendas" className="hover:text-accent">Encomiendas</Link></li>
            <li><Link to="#" className="hover:text-accent">Soporte</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Contacto</h3>
          <ul className="space-y-1 text-gray-200">
            <li>📞 (01) 123-4567</li>
            <li>📧 contacto@mirandatransportes.com</li>
            <li>📍 Lima - Perú</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Síguenos</h3>
          <div className="flex space-x-3 text-xl">
            <a href="#" className="hover:text-accent">📘</a>
            <a href="#" className="hover:text-accent">📸</a>
            <a href="#" className="hover:text-accent">🐦</a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center text-sm text-gray-light mt-8">
        © 2025 Transporte Miranda. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
