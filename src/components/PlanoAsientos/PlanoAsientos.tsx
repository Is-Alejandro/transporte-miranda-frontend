import type { Asiento } from "../../types/Asiento";
import { useState } from "react";

interface PlanoAsientosProps {
  asientos: Asiento[]; // recibiremos la lista de asientos
}

const PlanoAsientos = ({ asientos }: PlanoAsientosProps) => {
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  // manejamos click para seleccionar/deseleccionar
  const manejarSeleccion = (asiento: Asiento) => {
    if (asiento.estado === "ocupado" || asiento.estado === "reservado") {
      return; // no permitir seleccionar
    }
    setSeleccionados((prev) =>
      prev.includes(asiento.id)
        ? prev.filter((id) => id !== asiento.id)
        : [...prev, asiento.id]
    );
  };

  return (
    <div className="grid grid-cols-4 gap-2 mt-4">
      {asientos.map((asiento) => {
        const estaSeleccionado = seleccionados.includes(asiento.id);

        let color = "";
        if (asiento.estado === "ocupado") color = "bg-red-500";
        else if (asiento.estado === "reservado") color = "bg-yellow-500";
        else if (estaSeleccionado) color = "bg-accent"; // de tu tailwind
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
  );
};

export default PlanoAsientos;
