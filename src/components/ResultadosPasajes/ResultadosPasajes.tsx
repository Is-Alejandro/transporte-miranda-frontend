import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResumenBusqueda from "./ResumenBusqueda";
import ListaBuses from "./ListaBuses"; // ✅ Adaptado para trabajar con viajes
import { getViajes } from "../../services/viajesApi"; // ✅ API real
import type { Viaje } from "../../types/Viaje";
import ResumenReserva from "../ResumenReserva"; // Resumen del asiento seleccionado
import { useReserva } from "../../context/ReservaContext"; // Contexto global para reserva

const ResultadosPasajes = () => {
  // 🎯 Obtenemos los datos enviados desde el formulario
  const location = useLocation();

  // ✅ Recuperar parámetros desde location.state o localStorage
  const {
    origen,
    destino,
    fechaIda,
    fechaRetorno,
  } = location.state || JSON.parse(localStorage.getItem("busquedaPasajes") || "{}");

  // 🎯 Estado para guardar los viajes obtenidos
  const [viajes, setViajes] = useState<Viaje[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🎯 Accedemos al contexto global para mostrar el resumen de la reserva
  const { datosReserva } = useReserva();

  // 🚀 useEffect: consulta al backend cada vez que cambian los parámetros
  useEffect(() => {
    const fetchViajes = async () => {
      if (origen && destino && fechaIda) {
        try {
          setLoading(true);
          setError(null);

          // ✅ Llamada al backend usando la API real
          const resultados = await getViajes(origen, destino, fechaIda);
          setViajes(resultados);

          console.log("🚌 Viajes cargados:", resultados);
        } catch (err: any) {
          console.error("❌ Error al cargar los viajes:", err);
          setError("No se pudieron cargar los viajes. Intenta de nuevo.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchViajes();
  }, [origen, destino, fechaIda]);

  // 🔴 Validación: si faltan parámetros, mostramos un error
  if (!origen || !destino || !fechaIda) {
    return (
      <div className="text-center text-red-500 py-10">
        No se encontraron parámetros de búsqueda válidos.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* ✅ Resumen de búsqueda */}
      <ResumenBusqueda
        origen={origen}
        destino={destino}
        fechaIda={fechaIda}
        fechaRetorno={fechaRetorno}
      />

      {/* Contenedor general con dos columnas */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Columna izquierda: lista de viajes */}
        <div className="flex-1 space-y-4">
          {loading && <p className="text-center">🔄 Cargando viajes...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {/* ✅ Cambiado: ahora pasamos "viajes" como prop */}
          <ListaBuses viajes={viajes} />
        </div>

        {/* Columna derecha: resumen de reserva (si hay un asiento seleccionado) */}
        <div className="lg:w-80 w-full">
          {datosReserva?.idAsiento && <ResumenReserva />}
        </div>
      </div>
    </div>
  );
};

export default ResultadosPasajes;
