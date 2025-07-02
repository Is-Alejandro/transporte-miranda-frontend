/**
 * CardBus/index.tsx
 *
 * Este componente representa una tarjeta individual de bus en los resultados de búsqueda.
 * Está dividido en subcomponentes para mantener el código modular, legible y mantenible.
 *
 * Funcionalidades:
 * - Muestra la información del bus (empresa, horarios, precio, etc.)
 * - Lista de servicios, enlaces informativos y políticas
 * - Botón para expandir/ocultar el plano de asientos
 * - Renderiza el plano de asientos si está expandido
 *
 * Ventaja: este enfoque permite escalar fácilmente la app, hacer mantenimiento y pruebas,
 * además de facilitar la integración futura con datos reales desde el backend.
 */

import { useState } from "react"
import PlanoAsientos from "../PlanoAsientos/PlanoAsientos"
import { asientosSimulados } from "../../data/asientosSimulados"

// Subcomponentes del CardBus
import BusInfo from "./BusInfo"
import BusServicios from "./BusServicios"
import BusLinks from "./BusLinks"
import BotonPlanoAsientos from "./BotonPlanoAsientos"

// Interface que describe los datos que recibimos del bus
interface Bus {
  id: number
  empresa: string
  horaSalida: string
  horaLlegada: string
  duracion: string
  precio: number
  origen: string
  destino: string
  fecha: string
  asientosDisponibles: number
}

// Props del componente
interface Props {
  bus: Bus
}

// Componente principal
const CardBus = ({ bus }: Props) => {
  // Estado para saber si mostrar o no los asientos
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-4 text-sm">
      {/* Información del bus (logo, horarios, precio, etc.) */}
      <BusInfo bus={bus} />

      {/* Lista de servicios del bus */}
      <BusServicios />

      {/* Enlaces informativos (políticas, servicios, etc.) */}
      <BusLinks />

      {/* Botón para mostrar u ocultar el plano de asientos */}
      <BotonPlanoAsientos
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />

      {/* Plano de asientos (solo si está expandido) */}
      {isExpanded && (
        <div className="mt-4 border-t pt-4">
          <PlanoAsientos asientos={asientosSimulados} />
        </div>
      )}
    </div>
  )
}

export default CardBus
