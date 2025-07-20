/**
 * BusInfo.tsx
 *
 * Adaptado para mostrar la información de un viaje (backend real).
 * Muestra:
 * - Origen y destino
 * - Horarios de salida y llegada
 * - Bus asignado (placa y marca)
 * - Precio y capacidad total
 */

import busMiranda from "../../assets/busMiranda.jpg";

interface Props {
  origen: string;
  destino: string;
  fecha: string;
  horaSalida: string;
  horaLlegada: string;
  placaBus: string;
  marcaBus: string;
}

const BusInfo = ({
  origen,
  destino,
  fecha,
  horaSalida,
  horaLlegada,
  placaBus,
  marcaBus,
}: Props) => {
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
          <span className="font-semibold">{marcaBus} ({placaBus})</span>
          <span className="text-xs text-gray-500">
            {origen} → {destino}
          </span>
          <span className="text-xs text-gray-500">{fecha}</span>
        </div>
      </div>

      {/* horario de salida y llegada */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 flex-1 justify-between">
        <div className="flex flex-col">
          <span className="font-bold text-base">{horaSalida}</span>
          <span className="text-xs text-gray-500">Hora de salida</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-base">{horaLlegada}</span>
          <span className="text-xs text-gray-500">Hora de llegada</span>
        </div>
      </div>
    </div>
  );
};

export default BusInfo;
