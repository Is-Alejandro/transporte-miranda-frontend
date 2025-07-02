/**
 * PlanoAsientos.tsx
 *
 * Este componente muestra los asientos de un bus en dos pisos.
 * Permite seleccionar un asiento disponible y comunica la selección
 * al contexto global de reserva para que otros componentes puedan usarla.
 *
 * Visualmente usa colores para indicar el estado de cada asiento:
 * - Verde: disponible
 * - Rojo: ocupado
 * - Amarillo: reservado
 * - Celeste (accent): seleccionado
 */

import type { Asiento } from "../../types/Asiento"
import { useState } from "react"
import { useReserva } from "../../context/ReservaContext"

interface PlanoAsientosProps {
  asientos: Asiento[]
}

const PlanoAsientos = ({ asientos }: PlanoAsientosProps) => {
  // Estado para cambiar entre piso 1 y piso 2
  const [pisoActivo, setPisoActivo] = useState(1)

  // Obtener los datos actuales de reserva y la función para seleccionar asiento
  const { datosReserva, seleccionarAsiento } = useReserva()

  // Manejar la selección o deselección de un asiento
  const manejarSeleccion = (asiento: Asiento) => {
    // Si el asiento está ocupado o reservado, no se puede seleccionar
    if (asiento.estado === "ocupado" || asiento.estado === "reservado") return

    // Si el asiento ya está seleccionado, se deselecciona
    if (datosReserva.idAsiento === asiento.id) {
      seleccionarAsiento("", 0)
    } else {
      // Selecciona el nuevo asiento
      seleccionarAsiento(asiento.id, asiento.numero)
    }
  }

  // Filtrar asientos del piso activo
  const asientosFiltrados = asientos.filter((a) => a.piso === pisoActivo)

  return (
    <div className="w-full flex flex-col gap-4">
      
      {/* Selector de piso (1 o 2) */}
      <div className="flex justify-center gap-2 mb-2">
        {[1, 2].map((piso) => (
          <button
            key={piso}
            onClick={() => setPisoActivo(piso)}
            className={`px-2 py-1 border rounded ${
              pisoActivo === piso ? "bg-primary text-white" : "bg-white"
            }`}
          >
            Piso {piso}
          </button>
        ))}
      </div>

      {/* Leyenda de colores */}
      <div className="flex justify-center gap-4 text-xs text-gray-600">
        <Leyenda color="bg-green-500" texto="Disponible" />
        <Leyenda color="bg-red-500" texto="Ocupado" />
        <Leyenda color="bg-yellow-500" texto="Reservado" />
        <Leyenda color="bg-accent" texto="Seleccionado" />
      </div>

      {/* Mapa de asientos */}
      <div className="grid grid-cols-4 gap-2 justify-center mt-4">
        {asientosFiltrados.map((asiento) => {
          const estaSeleccionado = datosReserva.idAsiento === asiento.id

          let color = ""
          if (asiento.estado === "ocupado") color = "bg-red-500"
          else if (asiento.estado === "reservado") color = "bg-yellow-500"
          else if (estaSeleccionado) color = "bg-accent"
          else color = "bg-green-500"

          return (
            <div
              key={asiento.id}
              className={`w-12 h-12 rounded flex items-center justify-center text-white cursor-pointer ${color}`}
              onClick={() => manejarSeleccion(asiento)}
            >
              {asiento.numero}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Subcomponente para la leyenda de colores
const Leyenda = ({ color, texto }: { color: string; texto: string }) => (
  <div className="flex items-center gap-1">
    <div className={`w-4 h-4 rounded ${color}`} />
    {texto}
  </div>
)

export default PlanoAsientos
