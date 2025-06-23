// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Encomiendas from "../pages/Encomiendas"
import Contacto from "../pages/Contacto"
import MisViajes from "../pages/MisViajes"
import Resultados from "../pages/Resultados" // ✅ importación nueva
import Layout from "../components/Layout"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Estas rutas usarán el Layout con navbar y footer */}
        <Route index element={<Home />} />
        <Route path="mis-viajes" element={<MisViajes />} />
        <Route path="encomiendas" element={<Encomiendas />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="resultados" element={<Resultados />} /> {/* ✅ nueva ruta */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
