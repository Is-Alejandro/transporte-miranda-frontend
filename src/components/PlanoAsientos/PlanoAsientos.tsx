/**
 * PlanoAsientos.tsx
 *
 * Este componente muestra los asientos de un bus en dos pisos.
 * Permite seleccionar un asiento disponible y comunica la selección
 * al contexto global de reserva para que otros componentes puedan usarla.
 */

import type { Asiento } from "../../types/Asiento";
import { useState } from "react";
import { useReserva } from "../../context/ReservaContext";

// Props del componente: recibe los asientos y los datos del bus actual
interface PlanoAsientosProps {
  asientos: Asiento[];
  bus: {
    id: number;
    origen: string;
    destino: string;
    precio: number;
    empresa: string;
    horaSalida: string;
  };
}

const PlanoAsientos = ({ asientos, bus }: PlanoAsientosProps) => {
  const [pisoActivo, setPisoActivo] = useState(1);

  // Usamos el contexto global de reserva actualizado
  const { datosReserva, seleccionarReserva } = useReserva();

  // Lógica para seleccionar o deseleccionar un asiento
  const manejarSeleccion = (asiento: Asiento) => {
    if (asiento.estado === "ocupado" || asiento.estado === "reservado") return;

    if (datosReserva?.idAsiento === asiento.id) {
      seleccionarReserva(null); // Deseleccionar si se hace clic sobre el mismo
    } else {
      // Selecciona un nuevo asiento y guarda toda la información necesaria
      seleccionarReserva({
        idAsiento: asiento.id,
        numeroAsiento: asiento.numero,
        idViaje: bus.id,
        origen: bus.origen,
        destino: bus.destino,
        empresa: bus.empresa,
        precio: bus.precio,
        horaSalida: bus.horaSalida,
      });
    }
  };

  // Filtrar los asientos del piso actualmente seleccionado
  const asientosFiltrados = asientos.filter((a) => a.piso === pisoActivo);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Selector de piso */}
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
          const estaSeleccionado = datosReserva?.idAsiento === asiento.id;

          let color = "";
          if (asiento.estado === "ocupado") color = "bg-red-500";
          else if (asiento.estado === "reservado") color = "bg-yellow-500";
          else if (estaSeleccionado) color = "bg-accent";
          else color = "bg-green-500";

          return (
            <div
              key={asiento.id}
              className={`w-12 h-12 rounded flex items-center justify-center text-white cursor-pointer ${color}`}
              onClick={() => manejarSeleccion(asiento)}
            >
              {asiento.numero}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Subcomponente para mostrar la leyenda de estados
const Leyenda = ({ color, texto }: { color: string; texto: string }) => (
  <div className="flex items-center gap-1">
    <div className={`w-4 h-4 rounded ${color}`} />
    {texto}
  </div>
);

export default PlanoAsientos;
