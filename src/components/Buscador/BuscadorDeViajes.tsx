import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import TituloAnimado from "./TituloAnimado"
import ModoSelector from "./ModoSelector"
import FormularioPasajes from "./FormularioPasajes"
import FormularioEncomiendas from "./FormularioEncomiendas"

const BuscadorDeViajes = () => {
  // Estado para saber si el usuario busca pasajes o encomiendas
  const [modoBusqueda, setModoBusqueda] = useState<"pasajes" | "encomiendas">("pasajes")

  // Título dinámico según el modo seleccionado
  const titulo =
    modoBusqueda === "pasajes"
      ? "Reserva tu viaje con Transporte Miranda"
      : "Envía tus encomiendas de forma rápida y segura"

  return (
    // Sección principal sin imagen de fondo, con fondo blanco limpio
    <section className="w-full bg-white py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Título animado */}
        <TituloAnimado titulo={titulo} modoBusqueda={modoBusqueda} />

        {/* Selector de modo entre pasajes o encomiendas */}
        <ModoSelector modoBusqueda={modoBusqueda} setModoBusqueda={setModoBusqueda} />

        {/* Animación de entrada/salida entre formularios */}
        <AnimatePresence mode="wait">
          {modoBusqueda === "pasajes" ? (
            <FormularioPasajes key="pasajes" />
          ) : (
            <FormularioEncomiendas key="encomiendas" />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default BuscadorDeViajes
