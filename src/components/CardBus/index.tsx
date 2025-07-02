/**
 * CardBus/index.tsx
 *
 * Este componente representa una tarjeta individual de bus en los resultados de búsqueda.
 * Recibe props externas para:
 * - Mostrar/ocultar el plano de asientos (ya no usa estado interno)
 * - Ejecutar acciones personalizadas al hacer clic en "Ver asientos" o "Ocultar"
 *
 * Ventajas:
 * - Código más limpio y desacoplado
 * - Permite que el componente padre controle el comportamiento global
 * - Conserva la estructura y estilos responsivos
 */

import PlanoAsientos from "../PlanoAsientos/PlanoAsientos";
import { asientosSimulados } from "../../data/asientosSimulados";

// Subcomponentes del CardBus
import BusInfo from "./BusInfo";
import BusServicios from "./BusServicios";
import BusLinks from "./BusLinks";
import BotonPlanoAsientos from "./BotonPlanoAsientos";

// Interface que describe los datos que recibimos del bus
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

// Props del componente
interface Props {
  bus: Bus;                          // Datos del bus a mostrar
  expandido?: boolean;              // Indica si mostrar el plano de asientos
  onVerAsientos?: () => void;      // Acción al hacer clic en "Ver asientos"
  onOcultar?: () => void;          // Acción al hacer clic en "Ocultar"
}

// Componente principal
const CardBus = ({
  bus,
  expandido = false,              // Valor por defecto: no expandido
  onVerAsientos,
  onOcultar,
}: Props) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-4 text-sm">
      {/* Información del bus (empresa, horarios, precio, etc.) */}
      <BusInfo bus={bus} />

      {/* Lista de servicios del bus (íconos o texto) */}
      <BusServicios />

      {/* Enlaces informativos: fotos, terminales, políticas, etc. */}
      <BusLinks />

      {/* Botón que permite alternar la vista de asientos */}
      <BotonPlanoAsientos
        isExpanded={expandido}
        onToggle={(expandido ? onOcultar : onVerAsientos) ?? (() => {})}
      />

      {/* Plano de asientos (solo se muestra si está expandido) */}
      {expandido && (
        <div className="mt-4 border-t pt-4">
          <PlanoAsientos asientos={asientosSimulados} bus={bus} />
        </div>
      )}
    </div>
  );
};

export default CardBus;
