// FormularioPasajes.tsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const FormularioPasajes = () => {
  const navigate = useNavigate()

  // Estados para los campos del formulario
  const [origen, setOrigen] = useState("")
  const [destino, setDestino] = useState("")
  const [fechaIda, setFechaIda] = useState("")
  const [fechaRetorno, setFechaRetorno] = useState("")

  // Manejador del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validación simple (puedes hacerla más estricta si deseas)
    if (!origen || !destino || !fechaIda) {
      alert("Por favor, completa origen, destino y fecha de ida.")
      return
    }

    // Navegamos a la ruta /resultados y pasamos los datos por state
    navigate("/resultados", {
      state: {
        origen,
        destino,
        fechaIda,
        fechaRetorno, // puede estar vacío si el usuario no lo eligió
      },
    })
  }

  return (
    <motion.form
      key="pasajes"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-5 gap-4"
    >
      {/* Origen */}
      <input
        type="text"
        placeholder="Origen"
        value={origen}
        onChange={(e) => setOrigen(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Destino */}
      <input
        type="text"
        placeholder="Destino"
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Fecha de ida */}
      <input
        type="date"
        value={fechaIda}
        onChange={(e) => setFechaIda(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Fecha de retorno (opcional) */}
      <input
        type="date"
        value={fechaRetorno}
        onChange={(e) => setFechaRetorno(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />

      {/* Botón */}
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
