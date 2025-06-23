import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import TituloAnimado from "./TituloAnimado"
import ModoSelector from "./ModoSelector"
import FormularioPasajes from "./FormularioPasajes"
import FormularioEncomiendas from "./FormularioEncomiendas"

const BuscadorDeViajes = () => {
  // Estado que determina si el usuario está buscando pasajes o encomiendas
  const [modoBusqueda, setModoBusqueda] = useState<"pasajes" | "encomiendas">("pasajes")

  // Cambia dinámicamente la imagen de fondo según el modo seleccionado
  const imagenFondo =
    modoBusqueda === "pasajes"
      ? "/images/fondoPasajes.jpg"
      : "/images/fondoEncomiendas.jpg"

  // Cambia el título superior dinámicamente
  const titulo =
    modoBusqueda === "pasajes"
      ? "Reserva tu viaje con Transporte Miranda"
      : "Envía tus encomiendas de forma rápida y segura"

  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden">
      {/* Imagen de fondo completamente fija detrás de todo */}
      <div
        className="absolute inset-0 z-0 min-h-[85vh] w-full"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Capa negra semitransparente encima de la imagen para contraste */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Contenido principal, aseguramos que quede encima con z-20 */}
      <div className="relative z-20 flex items-center min-h-[85vh]">
        <div className="bg-white/90 text-black rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto w-full">
          {/* Título animado */}
          <TituloAnimado titulo={titulo} modoBusqueda={modoBusqueda} />

          {/* Selector de modo */}
          <ModoSelector modoBusqueda={modoBusqueda} setModoBusqueda={setModoBusqueda} />

          {/* Formularios animados según el modo */}
          <AnimatePresence mode="wait">
            {modoBusqueda === "pasajes" ? (
              <FormularioPasajes key="pasajes" />
            ) : (
              <FormularioEncomiendas key="encomiendas" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default BuscadorDeViajes
