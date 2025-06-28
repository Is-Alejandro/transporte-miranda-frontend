// src/components/ResultadosPasajes/ResultadosPasajes.tsx

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ResumenBusqueda from "./ResumenBusqueda"
import CardBus from "./CardBus"
import { getBuses } from "../../services/api"
import type { Bus } from "../../types/Bus"

const ResultadosPasajes = () => {
  // Obtenemos los datos enviados desde el formulario
  const location = useLocation()
  const { origen, destino, fechaIda, fechaRetorno } = location.state || {}

  // Estado para guardar los buses que coinciden con la búsqueda
  const [buses, setBuses] = useState<Bus[]>([])

  // Llamamos a getBuses cuando el componente se monta o cambian los parámetros
  useEffect(() => {
    if (origen && destino && fechaIda) {
      getBuses(origen, destino, fechaIda).then(setBuses)
    }
  }, [origen, destino, fechaIda])

  // Validamos si no llegaron los parámetros requeridos
  if (!origen || !destino || !fechaIda) {
    return (
      <div className="text-center text-red-500 py-10">
        No se encontraron parámetros de búsqueda válidos.
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Mostramos el resumen de búsqueda con los datos */}
      <ResumenBusqueda
        origen={origen}
        destino={destino}
        fechaIda={fechaIda}
        fechaRetorno={fechaRetorno}
      />

      {/* Lista de resultados obtenidos desde getBuses */}
      <div className="grid gap-4">
        {buses.length > 0 ? (
          buses.map((bus) => <CardBus key={bus.id} bus={bus} />)
        ) : (
          <p className="text-center text-gray-500">No se encontraron buses disponibles.</p>
        )}
      </div>
    </div>
  )
}

export default ResultadosPasajes
