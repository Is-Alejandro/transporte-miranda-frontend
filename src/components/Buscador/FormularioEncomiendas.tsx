// FormularioEncomiendas.tsx
import { motion } from "framer-motion"

// Componente animado para cotizar encomiendas
const FormularioEncomiendas = () => {
  return (
    <motion.form
      key="encomiendas"
      initial={{ opacity: 0, x: 50 }} // Entra desde la derecha
      animate={{ opacity: 1, x: 0 }}  // Aparece suave
      exit={{ opacity: 0, x: -50 }}   // Sale hacia la izquierda
      transition={{ duration: 0.4 }}  // Velocidad de animación
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      {/* Ciudad de origen */}
      <input
        type="text"
        placeholder="Ciudad de origen"
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Ciudad de destino */}
      <input
        type="text"
        placeholder="Ciudad de destino"
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Tipo de encomienda */}
      <select
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <option value="">Tipo de encomienda</option>
        <option value="documento">Documento</option>
        <option value="paquete">Paquete</option>
        <option value="fragil">Frágil</option>
        <option value="otro">Otro</option>
      </select>

      {/* Peso estimado */}
      <input
        type="number"
        placeholder="Peso (kg)"
        min={0}
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Botón de envío */}
      <button
        type="submit"
        className="col-span-full bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
      >
        Cotizar Envío
      </button>
    </motion.form>
  )
}

export default FormularioEncomiendas
