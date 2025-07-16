import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// ✅ Importamos subcomponentes
import TituloAnimado from "./TituloAnimado";
import ModoSelector from "./ModoSelector";
import FormularioPasajes from "../FormularioPasajes/FormularioPasajes";
import FormularioEncomiendas from "./FormularioEncomiendas";

// ✅ Importamos el servicio API para consultar viajes
import { getViajes } from "../../services/viajesApi";
import type { Viaje } from "../../types/Viaje";

const BuscadorDeViajes = () => {
  // 🎯 Estado para el modo de búsqueda ("pasajes" o "encomiendas")
  const [modoBusqueda, setModoBusqueda] = useState<"pasajes" | "encomiendas">("pasajes");

  // 🎯 Estado para los resultados de la búsqueda de viajes
  const [viajes, setViajes] = useState<Viaje[]>([]);

  // 🎯 Estado para manejar carga y errores
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * 🚀 Función para buscar viajes en el backend
   * @param origen - ciudad de origen
   * @param destino - ciudad de destino
   * @param fecha - fecha en formato YYYY-MM-DD
   */
  const handleBuscarViajes = async (origen: string, destino: string, fecha: string) => {
    try {
      setLoading(true); // Mostrar estado de carga
      setError(null);   // Limpiar errores anteriores

      // ✅ Llamamos al backend usando la API
      const resultados = await getViajes(origen, destino, fecha);
      setViajes(resultados); // Guardamos los viajes obtenidos

      console.log("🚌 Viajes encontrados:", resultados);
    } catch (err: any) {
      console.error("❌ Error al buscar viajes:", err);
      setError("No se pudieron cargar los viajes. Intenta de nuevo.");
    } finally {
      setLoading(false); // Ocultamos el estado de carga
    }
  };

  // 🎯 Título dinámico según el modo seleccionado
  const titulo =
    modoBusqueda === "pasajes"
      ? "Reserva tu viaje con Transporte Miranda"
      : "Envía tus encomiendas de forma rápida y segura";

  return (
    <section className="relative w-full py-12 min-h-[600px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 space-y-8">
        {/* ✅ Título animado */}
        <TituloAnimado titulo={titulo} modoBusqueda={modoBusqueda} />

        {/* ✅ Selector para cambiar entre pasajes y encomiendas */}
        <ModoSelector modoBusqueda={modoBusqueda} setModoBusqueda={setModoBusqueda} />

        {/* ✅ Animación para conmutar formularios */}
        <AnimatePresence mode="wait">
          {modoBusqueda === "pasajes" ? (
            <FormularioPasajes key="pasajes" onBuscar={handleBuscarViajes} />
          ) : (
            <FormularioEncomiendas key="encomiendas" />
          )}
        </AnimatePresence>

        {/* ✅ Mostrar resultados SOLO para pasajes */}
        {modoBusqueda === "pasajes" && (
          <>
            {loading && <p className="text-center">🔄 Cargando viajes...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {viajes.length > 0 ? (
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">🚌 Resultados de tu búsqueda:</h2>
                <ul className="space-y-4">
                  {viajes.map((viaje) => (
                    <li
                      key={viaje.id}
                      className="p-4 bg-white/80 rounded-lg shadow hover:shadow-md transition"
                    >
                      <p className="font-semibold">
                        {viaje.origen} → {viaje.destino}
                      </p>
                      <p>
                        Fecha: {viaje.fecha} | Hora salida: {viaje.horaSalida} | Precio: S/. {viaje.precio}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              !loading && <p className="text-center">No se encontraron viajes para tu búsqueda.</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BuscadorDeViajes;
