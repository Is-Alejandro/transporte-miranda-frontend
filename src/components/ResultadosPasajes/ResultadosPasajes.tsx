/**
 * ResultadosPasajes.tsx
 *
 * Esta vista muestra:
 * - El resumen de la búsqueda (origen, destino, fechas)
 * - Una lista de buses disponibles (con su CardBus)
 * - A la derecha, un resumen de la reserva seleccionada (si aplica)
 * 
 * Se consulta el backend simulado al montar el componente.
 */

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResumenBusqueda from "./ResumenBusqueda";
import CardBus from "../CardBus/index";
import { getBuses } from "../../services/api";
import type { Bus } from "../../types/Bus";
import ResumenReserva from "../ResumenReserva"; // Asegúrate de que la ruta sea correcta
import { useReserva } from "../../context/ReservaContext"; // Usamos el contexto global

const ResultadosPasajes = () => {
  // Obtenemos los datos enviados desde el formulario
  const location = useLocation();

  // Intentamos recuperar desde location.state o localStorage (por si recarga)
  const {
    origen,
    destino,
    fechaIda,
    fechaRetorno,
  } = location.state || JSON.parse(localStorage.getItem("busquedaPasajes") || "{}");

  // Estado para guardar los buses que coinciden con la búsqueda
  const [buses, setBuses] = useState<Bus[]>([]);

  // Accedemos a la reserva global para mostrar el resumen al costado si hay selección
  const { datosReserva } = useReserva();

  // Al montar o al cambiar los parámetros, pedimos los buses
  useEffect(() => {
    if (origen && destino && fechaIda) {
      getBuses(origen, destino, fechaIda).then(setBuses);
    }
  }, [origen, destino, fechaIda]);

  // Validamos si no llegaron los parámetros
  if (!origen || !destino || !fechaIda) {
    return (
      <div className="text-center text-red-500 py-10">
        No se encontraron parámetros de búsqueda válidos.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Mostramos el resumen de búsqueda */}
      <ResumenBusqueda
        origen={origen}
        destino={destino}
        fechaIda={fechaIda}
        fechaRetorno={fechaRetorno}
      />

      {/* Contenedor general con dos columnas en pantallas grandes */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Columna izquierda: resultados */}
        <div className="flex-1 space-y-4">
          {buses.length > 0 ? (
            buses.map((bus) => <CardBus key={bus.id} bus={bus} />)
          ) : (
            <p className="text-center text-gray-500">No se encontraron buses disponibles.</p>
          )}
        </div>

        {/* Columna derecha: resumen de reserva (solo si hay un asiento seleccionado) */}
        <div className="lg:w-80 w-full">
          {datosReserva.idAsiento && <ResumenReserva />}
        </div>
      </div>
    </div>
  );
};

export default ResultadosPasajes;
