// TituloAnimado.tsx
import { motion } from "framer-motion"

interface TituloAnimadoProps {
  titulo: string
  modoBusqueda: "pasajes" | "encomiendas"
}

// Este componente muestra un título animado según el modo seleccionado
const TituloAnimado = ({ titulo, modoBusqueda }: TituloAnimadoProps) => {
  return (
    <motion.h2
      key={modoBusqueda + "-titulo"}
      initial={{ opacity: 0, x: 50 }}  // Aparece desde la derecha
      animate={{ opacity: 1, x: 0 }}   // Se posiciona en el centro
      exit={{ opacity: 0, x: -50 }}    // Desaparece hacia la izquierda
      transition={{ duration: 0.3 }}   // Transición suave
      className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg text-center mb-6"
    >
      {titulo}
    </motion.h2>
  )
}

export default TituloAnimado
