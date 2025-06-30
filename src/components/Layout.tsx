// src/components/Layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // ✅ Footer global

/**
 * El Layout define la estructura global de la app
 * con su Navbar, Footer y espacio dinámico (Outlet)
 * 
 * NO debe manejar fondos ni componentes de negocio (como BuscadorDeViajes)
 * para mantener la arquitectura escalable.
 */
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar visible en todas las rutas */}
      <Navbar />

      {/* Contenido dinámico según la ruta */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer visible en todas las rutas */}
      <Footer />
    </div>
  );
};

export default Layout;
