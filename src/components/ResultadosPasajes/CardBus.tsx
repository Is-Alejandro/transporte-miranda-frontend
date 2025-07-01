import { useState } from "react";
import PlanoAsientos from "../PlanoAsientos/PlanoAsientos";
import { asientosSimulados } from "../../data/asientosSimulados";
import busMiranda from "../../assets/busMiranda.jpg";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-4 text-sm">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* logo + nombre */}
        <div className="flex items-center gap-2">
          <img src={busMiranda} alt="Logo Transporte Miranda" className="w-16 h-16 object-contain rounded" />
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
          <div className="text-xs text-gray-600 text-center">
            {bus.duracion}
          </div>
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
          <span className="text-xs text-gray-500">{bus.asientosDisponibles} asientos disponibles</span>
        </div>
      </div>

      {/* iconos de servicios */}
      <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
        🛏️ 160° &bull; 🪑 140° &bull; 🚻 &bull; +12
        <button className="border border-gray-300 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Reembolsable</button>
        <button className="border border-gray-300 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Reprogramable</button>
      </div>

      {/* enlaces */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-600 border-t pt-2 mt-2">
        <a href="#" className="hover:underline">Servicios</a> |
        <a href="#" className="hover:underline">Fotos</a> |
        <a href="#" className="hover:underline">Terminal de salida y llegada</a> |
        <a href="#" className="hover:underline">Puntuaciones y comentarios</a> |
        <a href="#" className="hover:underline">Política de Reserva</a>
      </div>

      {/* botón */}
      <div className="text-right mt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          {isExpanded ? "OCULTAR ASIENTOS" : "VER ASIENTOS"}
        </button>
      </div>

      {/* plano de asientos */}
      {isExpanded && (
        <div className="mt-4 border-t pt-4">
          <PlanoAsientos asientos={asientosSimulados} />
        </div>
      )}
    </div>
  );
};

export default CardBus;
