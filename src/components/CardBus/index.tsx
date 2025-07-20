/**
 * CardBus/index.tsx
 *
 * Muestra la tarjeta de un viaje con origen, destino, horarios y bus asignado.
 * Adaptado para trabajar con el modelo Viaje (backend).
 */

import PlanoAsientos from "../PlanoAsientos/PlanoAsientos";

// Subcomponentes del CardBus (maquetas por ahora)
import BusInfo from "./BusInfo";
import BusServicios from "./BusServicios";
import BusLinks from "./BusLinks";
import BotonPlanoAsientos from "./BotonPlanoAsientos";

// ✅ Importamos el tipo Viaje desde el backend
import type { Viaje } from "../../types/Viaje";

// Props del componente
interface Props {
  viaje: Viaje;                      // Datos del viaje a mostrar
  expandido?: boolean;               // Indica si mostrar el plano de asientos
  onVerAsientos?: () => void;        // Acción al hacer clic en "Ver asientos"
  onOcultar?: () => void;            // Acción al hacer clic en "Ocultar"
}

// Componente principal
const CardBus = ({
  viaje,
  expandido = false,
  onVerAsientos,
  onOcultar,
}: Props) => {
  // 🎯 Extraemos datos necesarios del viaje
  const { ruta, bus, fecha, horaSalida, horaLlegada, id } = viaje;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-4 text-sm">
      {/* Información del viaje (origen, destino, horarios, bus) */}
      <BusInfo
        origen={ruta.origen}
        destino={ruta.destino}
        fecha={fecha}
        horaSalida={horaSalida}
        horaLlegada={horaLlegada}
        placaBus={bus.placa}
        marcaBus={bus.marca}
      />

      {/* Lista de servicios (placeholder por ahora) */}
      <BusServicios />

      {/* Enlaces adicionales (placeholder por ahora) */}
      <BusLinks />

      {/* Botón para mostrar/ocultar asientos */}
      <BotonPlanoAsientos
        isExpanded={expandido}
        onToggle={(expandido ? onOcultar : onVerAsientos) ?? (() => {})}
      />

      {/* Plano de asientos (solo si está expandido) */}
      {expandido && (
        <div className="mt-4 border-t pt-4">
          <PlanoAsientos
            idViaje={id} // ✅ Pasamos el ID del viaje
            bus={{
              id: bus.id, // ID del bus físico
              origen: ruta.origen,
              destino: ruta.destino,
              precio: 50, // Cambia a viaje.precio si lo tienes en backend
              empresa: bus.marca, // Marca del bus como “empresa”
              horaSalida,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CardBus;
