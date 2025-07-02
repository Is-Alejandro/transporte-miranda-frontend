/**
 * ListaBuses.tsx
 *
 * Este componente recibe un arreglo de buses y se encarga de:
 * - Mostrar todas las tarjetas de bus (`CardBus`)
 * - Mostrar solo una tarjeta expandida si se selecciona un bus
 * - Permitir volver a ver todas las tarjetas si se ocultan los asientos
 *
 * Mantiene el diseño responsivo y no afecta la lógica global del sistema.
 */

import { useState } from "react";
import CardBus from "../CardBus";
import type { Bus } from "../../types/Bus";

interface Props {
  buses: Bus[];
}

const ListaBuses = ({ buses }: Props) => {
  // Estado para controlar qué bus está expandido (con asientos visibles)
  const [busSeleccionado, setBusSeleccionado] = useState<Bus | null>(null);

  return (
    <div className="space-y-4">
      {/* Si hay buses disponibles */}
      {buses.length > 0 ? (
        // Si hay un bus seleccionado, solo se muestra ese expandido
        busSeleccionado ? (
          <CardBus
            key={busSeleccionado.id}
            bus={busSeleccionado}
            expandido={true} // Indicamos que se deben mostrar los asientos
            onOcultar={() => setBusSeleccionado(null)} // Permite regresar a la vista de lista
          />
        ) : (
          // Si no hay selección, se muestran todos los buses
          buses.map((bus) => (
            <CardBus
              key={bus.id}
              bus={bus}
              onVerAsientos={() => setBusSeleccionado(bus)} // Al hacer clic en "Ver asientos"
            />
          ))
        )
      ) : (
        // Si no hay buses disponibles
        <p className="text-center text-gray-500">
          No se encontraron buses disponibles.
        </p>
      )}
    </div>
  );
};

export default ListaBuses;
