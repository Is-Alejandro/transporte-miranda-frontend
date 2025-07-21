/**
 * PlanoAsientos.tsx
 *
 * 🔥 Componente para mostrar el plano de asientos.
 * ✅ Permite seleccionar un asiento (modo simulado).
 * ⚠️ La reserva real se hace al presionar "Continuar" en ResumenReserva.
 */

import { useEffect, useState } from "react";
import { getAsientosPorViaje } from "../../services/viajesApi";
import { useReserva } from "../../context/ReservaContext";

interface Asiento {
  id: number;
  idAsiento: number; // ID físico del asiento
  estado: string;    // disponible | reservado | ocupado
  numero: number;    // Número visible del asiento
  piso: number;      // Piso 1 o 2 (si aplica)
}

interface PlanoAsientosProps {
  idViaje: number; // ID del viaje actual
  bus: {
    id: number;
    origen: string;
    destino: string;
    precio: number;
    empresa: string;
    horaSalida: string;
  };
}

const PlanoAsientos = ({ idViaje, bus }: PlanoAsientosProps) => {
  const [pisoActivo, setPisoActivo] = useState(1);
  const [asientos, setAsientos] = useState<Asiento[]>([]);
  const [loading, setLoading] = useState(false);

  const { datosReserva, seleccionarReserva } = useReserva();

  // 🔥 Cargar los asientos desde el backend o simulado
  useEffect(() => {
    const fetchAsientos = async () => {
      try {
        setLoading(true);
        const data = await getAsientosPorViaje(idViaje);

        // ✅ Adaptamos la estructura de los asientos
        const asientosTransformados = data.map((item: any) => ({
          id: item.id,
          idAsiento: item.idAsiento ?? item.id, // fallback al ID si no viene idAsiento
          numero: item.numero ?? item.asiento?.numero, // soporte para modo simulado
          piso: item.piso || item.asiento?.piso || 1,
          estado: item.estado,
        }));

        setAsientos(asientosTransformados);
      } catch (error) {
        console.error("❌ Error al cargar los asientos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAsientos();
  }, [idViaje]);

  // ✅ Seleccionar un asiento (solo visual, no reserva real)
  const manejarSeleccion = (asiento: Asiento) => {
    if (asiento.estado !== "disponible") return;

    seleccionarReserva({
      idAsiento: asiento.idAsiento,
      numeroAsiento: asiento.numero,
      idViaje: idViaje,
      origen: bus.origen,
      destino: bus.destino,
      empresa: bus.empresa,
      precio: bus.precio,
      horaSalida: bus.horaSalida,
    });
  };

  // 🎨 Filtrar asientos por piso
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
        <Leyenda color="bg-yellow-500" texto="Reservado" />
        <Leyenda color="bg-red-500" texto="Ocupado" />
        <Leyenda color="bg-accent" texto="Seleccionado" />
      </div>

      {/* Mapa de asientos */}
      {loading ? (
        <p className="text-center">🔄 Cargando asientos...</p>
      ) : (
        <div className="grid grid-cols-4 gap-2 justify-center mt-4">
          {asientosFiltrados.map((asiento) => {
            const estaSeleccionado =
              datosReserva?.idAsiento === asiento.idAsiento;

            let color = "";
            if (asiento.estado === "ocupado") color = "bg-red-500";
            else if (asiento.estado === "reservado") color = "bg-yellow-500";
            else if (estaSeleccionado) color = "bg-accent";
            else color = "bg-green-500";

            return (
              <div
                key={`${asiento.piso}-${asiento.idAsiento}`} // ✅ Clave única por piso + asiento
                className={`w-12 h-12 rounded flex items-center justify-center text-white cursor-pointer ${color}`}
                onClick={() => manejarSeleccion(asiento)}
              >
                {asiento.numero}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Leyenda = ({ color, texto }: { color: string; texto: string }) => (
  <div className="flex items-center gap-1">
    <div className={`w-4 h-4 rounded ${color}`} />
    {texto}
  </div>
);

export default PlanoAsientos;
