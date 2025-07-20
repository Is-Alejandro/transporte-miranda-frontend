/**
 * ListaBuses.tsx
 *
 * Adaptado para trabajar con un arreglo de Viajes (backend).
 * Se encarga de:
 * - Mostrar todas las tarjetas de viaje (`CardBus`)
 * - Mostrar solo una tarjeta expandida si se selecciona un viaje
 */

import { useState } from "react";
import CardBus from "../CardBus";
import type { Viaje } from "../../types/Viaje";

interface Props {
  viajes: Viaje[]; // ✅ Ahora recibe un arreglo de Viajes
}

const ListaBuses = ({ viajes }: Props) => {
  // 🎯 Estado para controlar qué viaje está expandido (con asientos visibles)
  const [viajeSeleccionado, setViajeSeleccionado] = useState<Viaje | null>(null);

  return (
    <div className="space-y-4">
      {/* Si hay viajes disponibles */}
      {viajes.length > 0 ? (
        // Si hay un viaje seleccionado, solo se muestra ese expandido
        viajeSeleccionado ? (
          <CardBus
            key={viajeSeleccionado.id}
            viaje={viajeSeleccionado} // ✅ Ahora pasamos un viaje
            expandido={true} // Indicamos que se deben mostrar los asientos
            onOcultar={() => setViajeSeleccionado(null)} // Permite regresar a la lista
          />
        ) : (
          // Si no hay selección, se muestran todos los viajes
          viajes.map((viaje) => (
            <CardBus
              key={viaje.id}
              viaje={viaje} // ✅ Ahora pasamos un viaje
              onVerAsientos={() => setViajeSeleccionado(viaje)} // Al hacer clic en "Ver asientos"
            />
          ))
        )
      ) : (
        // Si no hay viajes disponibles
        <p className="text-center text-gray-500">
          No se encontraron viajes disponibles.
        </p>
      )}
    </div>
  );
};

export default ListaBuses;
