import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Encomiendas from "../pages/Encomiendas";
import Contacto from "../pages/Contacto";
import MisViajes from "../pages/MisViajes";
import Resultados from "../pages/Resultados";
import DatosPasajero from "../pages/DatosPasajero";
import Pago from "../pages/Pago";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../components/Layout";
import RutaPrivada from "./RutaPrivada"; // 🔒 NUEVO

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* 🏠 Página de inicio */}
        <Route index element={<Home />} />

        {/* 📄 Otras páginas públicas */}
        <Route path="mis-viajes" element={<MisViajes />} />
        <Route path="encomiendas" element={<Encomiendas />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="resultados" element={<Resultados />} />

        {/* 🔒 Rutas privadas */}
        <Route element={<RutaPrivada />}>
          <Route path="datos-pasajero" element={<DatosPasajero />} />
          <Route path="pago" element={<Pago />} />
        </Route>
      </Route>

      {/* 🔑 Autenticación */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ⚠️ Página 404 */}
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
