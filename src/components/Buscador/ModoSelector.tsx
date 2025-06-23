// ModoSelector.tsx
import { motion } from "framer-motion"

interface ModoSelectorProps {
  modoBusqueda: "pasajes" | "encomiendas"
  setModoBusqueda: (modo: "pasajes" | "encomiendas") => void
}

// Componente que muestra los botones para cambiar entre modos (pasajes o encomiendas)
const ModoSelector = ({ modoBusqueda, setModoBusqueda }: ModoSelectorProps) => {
  return (
    <motion.div
      key={modoBusqueda + "-selector"}
      initial={{ opacity: 0, x: 50 }} // Aparece desde la derecha
      animate={{ opacity: 1, x: 0 }}  // Se muestra al centro
      exit={{ opacity: 0, x: -50 }}   // Desaparece hacia la izquierda
      transition={{ duration: 0.3 }}  // Transición suave
      className="flex justify-center gap-4 mb-6"
    >
      {/* Botón de Pasajes */}
      <button
        onClick={() => setModoBusqueda("pasajes")}
        className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
          modoBusqueda === "pasajes"
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        Pasajes
      </button>

      {/* Botón de Encomiendas */}
      <button
        onClick={() => setModoBusqueda("encomiendas")}
        className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
          modoBusqueda === "encomiendas"
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        Encomiendas
      </button>
    </motion.div>
  )
}

export default ModoSelector
