/**
 * BusInfo.tsx
 *
 * Este componente muestra la información principal del bus:
 * - Logo, nombre de la empresa
 * - Horarios de salida y llegada
 * - Precio y asientos disponibles
 *
 * Este componente forma parte de la tarjeta general del resultado de un bus.
 */

import busMiranda from "../../assets/busMiranda.jpg"
import type { Bus } from "../../types/Bus"

interface Props {
  bus: Bus
}

const BusInfo = ({ bus }: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      {/* logo + nombre */}
      <div className="flex items-center gap-2">
        <img
          src={busMiranda}
          alt="Logo Transporte Miranda"
          className="w-16 h-16 object-contain rounded"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{bus.empresa}</span>
          <span className="text-xs text-gray-500">BUS CAMA</span>
        </div>
      </div>

      {/* horario y terminales */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 flex-1 justify-between">
        <div className="flex flex-col">
          <span className="font-bold text-base">{bus.horaSalida}</span>
          <span className="text-xs text-gray-500">Terminal de salida</span>
        </div>
        <div className="text-xs text-gray-600 text-center">{bus.duracion}</div>
        <div className="flex flex-col">
          <span className="font-bold text-base">{bus.horaLlegada}</span>
          <span className="text-xs text-gray-500">Terminal de llegada</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="bg-green-500 text-white px-2 rounded text-xs">5.0</span>
        </div>
      </div>

      {/* precio y asientos */}
      <div className="flex flex-col items-end text-right">
        <span className="text-xs text-gray-500">Desde</span>
        <span className="text-base font-bold">S/ {bus.precio}</span>
        <span className="text-xs text-gray-500">
          {bus.asientosDisponibles} asientos disponibles
        </span>
      </div>
    </div>
  )
}

export default BusInfo
