// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Encomiendas from "../pages/Encomiendas"
import Contacto from "../pages/Contacto"
import Layout from "../components/Layout"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Estas rutas usarán el Layout con navbar */}
        <Route index element={<Home />} />
        <Route path="encomiendas" element={<Encomiendas />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
