// Este componente representa visualmente un resultado de bus en forma de tarjeta

import { useState } from "react";
import PlanoAsientos from "../PlanoAsientos/PlanoAsientos";
import { asientosSimulados } from "../../data/asientosSimulados";

interface Bus {
  id: number;
  empresa: string;
  horaSalida: string;
  horaLlegada: string;
  duracion: string;
  precio: number;
  origen: string;
  destino: string;
  fecha: string;
  asientosDisponibles: number;
}

interface Props {
  bus: Bus;
}

const CardBus = ({ bus }: Props) => {
  // Estado para controlar si la tarjeta está expandida
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      {/* Información de la empresa y horario */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 flex-1">
        <div>
          <p className="text-lg font-bold text-primary">{bus.empresa}</p>
          <p className="text-sm text-gray-600">{bus.fecha}</p>
        </div>

        <div className="text-sm text-gray-700">
          <p>
            <span className="font-semibold">Salida:</span> {bus.horaSalida}
          </p>
          <p>
            <span className="font-semibold">Llegada:</span> {bus.horaLlegada}
          </p>
          <p>
            <span className="font-semibold">Duración:</span> {bus.duracion}
          </p>
        </div>
      </div>

      {/* Sección del precio y botón de acción */}
      <div className="flex flex-col items-end gap-2 text-right">
        <p className="text-lg font-bold text-green-600">S/ {bus.precio}</p>
        <p className="text-sm text-gray-500">
          {bus.asientosDisponibles} asientos disponibles
        </p>
        <button
          className="bg-primary text-white px-4 py-1 rounded-lg hover:bg-primary-dark transition"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Cambia el texto dinámicamente */}
          {isExpanded ? "Ocultar asientos" : "Ver asientos"}
        </button>
      </div>

      {/* Plano de asientos renderizado condicionalmente */}
      {isExpanded && (
        <div className="w-full mt-4">
          {/* Este componente modular renderiza la cuadrícula provisional de asientos */}
          <PlanoAsientos asientos={asientosSimulados} />
        </div>
      )}
    </div>
  );
};

export default CardBus;
