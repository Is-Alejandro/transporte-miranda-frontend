// FormularioPasajes.tsx
import { motion } from "framer-motion"

// Componente que muestra el formulario animado para buscar pasajes
const FormularioPasajes = () => {
  return (
    <motion.form
      key="pasajes"
      initial={{ opacity: 0, x: 50 }} // Comienza invisible y desplazado a la derecha
      animate={{ opacity: 1, x: 0 }}  // Aparece suavemente en su lugar
      exit={{ opacity: 0, x: -50 }}   // Se desvanece hacia la izquierda al salir
      transition={{ duration: 0.4 }}  // Duración de la animación
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      {/* Campo para ciudad de origen */}
      <input
        type="text"
        placeholder="Origen"
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Campo para ciudad de destino */}
      <input
        type="text"
        placeholder="Destino"
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Selector de fecha */}
      <input
        type="date"
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Botón de búsqueda */}
      <button
        type="submit"
        className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
      >
        Buscar
      </button>
    </motion.form>
  )
}

export default FormularioPasajes
