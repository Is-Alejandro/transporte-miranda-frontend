// src/components/Layout.tsx
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fijo */}
      <Navbar />

      {/* Contenido de cada página */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
