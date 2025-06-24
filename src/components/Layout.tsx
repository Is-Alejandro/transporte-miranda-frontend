// src/components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import BuscadorDeViajes from "./Buscador/BuscadorDeViajes"
import Footer from "./Footer" // ✅ Asegúrate de tenerlo creado e importado

const Layout = () => {
  const location = useLocation()

  // Mostrar el buscador solo en la página principal
  const mostrarBuscador = location.pathname === "/"

  return (
    <div className="min-h-screen flex flex-col">
      {/* Siempre mostramos la navbar */}
      <Navbar />

      {/* Buscador de viajes solo en "/" */}
      {mostrarBuscador && (
        <div className="bg-white">
        <BuscadorDeViajes />
        </div>
      )}

      {/* Contenido dinámico */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer visible en todas las rutas */}
      <Footer />
    </div>
  )
}

export default Layout
