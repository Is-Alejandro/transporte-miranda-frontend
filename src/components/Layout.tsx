// src/components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import BuscadorDeViajes from "./BuscadorDeViajes" // ahora correctamente importado

const Layout = () => {
  const location = useLocation()

  // Mostrar el buscador solo si estamos en la página principal ("/")
  const mostrarBuscador = location.pathname === "/"

  return (
    <div className="min-h-screen flex flex-col">
      {/* Siempre mostramos la navbar */}
      <Navbar />

      {/* Mostrar el formulario solo en la ruta principal */}
      {mostrarBuscador && (
        <div className="bg-gray-100 p-4">
          <BuscadorDeViajes />
        </div>
      )}

      {/* Renderiza el contenido dinámico de cada ruta */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
