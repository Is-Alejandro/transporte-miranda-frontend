import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

const FormularioPasajes = () => {
  const navigate = useNavigate()

  const [origen, setOrigen] = useState("")
  const [destino, setDestino] = useState("")
  const [fechaIda, setFechaIda] = useState("")
  const [fechaRetorno, setFechaRetorno] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!origen || !destino || !fechaIda) {
      alert("Por favor, completa origen, destino y fecha de ida.")
      return
    }
    navigate("/resultados", {
      state: { origen, destino, fechaIda, fechaRetorno },
    })
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <motion.form
        key="pasajes"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        // Columna en móviles, fila en escritorio (con separación entre elementos)
        className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-lg"
      >
        {/* Campo Origen */}
        <div className="relative w-full lg:w-[18%]">
          <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Origen"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Campo Destino */}
        <div className="relative w-full lg:w-[18%]">
          <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Fecha de Ida */}
        <div className="relative w-full lg:w-[18%]">
          <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base" />
          <input
            type="date"
            value={fechaIda}
            onChange={(e) => setFechaIda(e.target.value)}
            className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Fecha de Retorno */}
        <div className="relative w-full lg:w-[18%]">
          <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base" />
          <input
            type="date"
            value={fechaRetorno}
            onChange={(e) => setFechaRetorno(e.target.value)}
            className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Botón Buscar */}
        <div className="w-full lg:w-[14%] flex justify-center lg:justify-end">
          <button
            type="submit"
            className="w-full lg:w-auto flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-2 rounded-xl hover:bg-primary-dark transition-colors duration-200"
          >
            <FaSearch />
            Buscar
          </button>
        </div>
      </motion.form>
    </div>
  )
}

export default FormularioPasajes
