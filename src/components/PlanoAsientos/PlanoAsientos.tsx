import type { Asiento } from "../../types/Asiento";
import { useState } from "react";

interface PlanoAsientosProps {
  asientos: Asiento[];
}

const PlanoAsientos = ({ asientos }: PlanoAsientosProps) => {
  const [seleccionados, setSeleccionados] = useState<string[]>([]);
  const [pisoActivo, setPisoActivo] = useState(1); // ahora controlamos piso

  const manejarSeleccion = (asiento: Asiento) => {
    if (asiento.estado === "ocupado" || asiento.estado === "reservado") return;

    setSeleccionados((prev) =>
      prev.includes(asiento.id)
        ? prev.filter((id) => id !== asiento.id)
        : [...prev, asiento.id]
    );
  };

  // filtrar los asientos según piso
  const asientosFiltrados = asientos.filter((a) => a.piso === pisoActivo);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* selector de piso */}
      <div className="flex justify-center gap-2 mb-2">
        <button
          onClick={() => setPisoActivo(1)}
          className={`px-2 py-1 border rounded ${
            pisoActivo === 1 ? "bg-primary text-white" : "bg-white"
          }`}
        >
          Piso 1
        </button>
        <button
          onClick={() => setPisoActivo(2)}
          className={`px-2 py-1 border rounded ${
            pisoActivo === 2 ? "bg-primary text-white" : "bg-white"
          }`}
        >
          Piso 2
        </button>
      </div>

      {/* leyenda */}
      <div className="flex justify-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-green-500"></div> Disponible
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-red-500"></div> Ocupado
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-yellow-500"></div> Reservado
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-accent"></div> Seleccionado
        </div>
      </div>

      {/* asientos */}
      <div className="grid grid-cols-4 gap-2 justify-center mt-4">
        {asientosFiltrados.map((asiento) => {
          const estaSeleccionado = seleccionados.includes(asiento.id);

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

export default PlanoAsientos;
