// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Encomiendas from "../pages/Encomiendas";
import Contacto from "../pages/Contacto";
import MisViajes from "../pages/MisViajes";
import Resultados from "../pages/Resultados"; // ✅ Página de resultados
import DatosPasajero from "../pages/DatosPasajero"; // 👤 Nueva página
import Pago from "../pages/Pago"; // 💳 Nueva página
import Layout from "../components/Layout";

/**
 * 📦 AppRoutes
 * Define todas las rutas de la aplicación con buenas prácticas.
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* ✅ Todas las páginas usan Layout (Navbar + Footer) */}
      <Route path="/" element={<Layout />}>
        {/* 🏠 Página de inicio */}
        <Route index element={<Home />} />

        {/* 📄 Otras páginas */}
        <Route path="mis-viajes" element={<MisViajes />} />
        <Route path="encomiendas" element={<Encomiendas />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="resultados" element={<Resultados />} />

        {/* 👤 Página de datos del pasajero */}
        <Route path="datos-pasajero" element={<DatosPasajero />} />

        {/* 💳 Página de pago */}
        <Route path="pago" element={<Pago />} />
      </Route>

      {/* ⚠️ Página 404 (No encontrada) */}
      <Route
        path="*"
        element={
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="text-gray-600">Página no encontrada</p>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
