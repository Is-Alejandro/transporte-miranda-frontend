import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Importamos subcomponentes
import TituloAnimado from "./TituloAnimado";
import ModoSelector from "./ModoSelector";

// Ajustamos la ruta correctamente a la nueva estructura
import FormularioPasajes from "../FormularioPasajes/FormularioPasajes";
import FormularioEncomiendas from "./FormularioEncomiendas";

const BuscadorDeViajes = () => {
  // Estado para el modo de búsqueda
  const [modoBusqueda, setModoBusqueda] = useState<"pasajes" | "encomiendas">("pasajes");

  // Título dinámico según el modo
  const titulo =
    modoBusqueda === "pasajes"
      ? "Reserva tu viaje con Transporte Miranda"
      : "Envía tus encomiendas de forma rápida y segura";

  return (
    <section className="relative w-full py-12 min-h-[600px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 space-y-8">

        {/* Título animado */}
        <TituloAnimado titulo={titulo} modoBusqueda={modoBusqueda} />

        {/* Selector para cambiar entre pasajes y encomiendas */}
        <ModoSelector modoBusqueda={modoBusqueda} setModoBusqueda={setModoBusqueda} />

        {/* Animación para conmutar formularios */}
        <AnimatePresence mode="wait">
          {modoBusqueda === "pasajes" ? (
            <FormularioPasajes key="pasajes" />
          ) : (
            <FormularioEncomiendas key="encomiendas" />
          )}
        </AnimatePresence>

        {/* Cards promocionales SOLO para pasajes */}
        {modoBusqueda === "pasajes" && (
          <div className="flex flex-col lg:flex-row gap-4 justify-between mt-8">
            {/* Card 1 */}
            <div className="flex-1 bg-white/80 rounded-xl shadow p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">Descarga nuestra app</h3>
              <p className="text-sm mb-4">Ahorra hasta 15% reservando desde la app</p>
              <div className="flex flex-col gap-2">
                <div className="bg-black text-white px-4 py-2 rounded">Google Play</div>
                <div className="bg-black text-white px-4 py-2 rounded">App Store</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white/80 rounded-xl shadow p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">Oferta exclusiva</h3>
              <p className="text-sm mb-4">Viaja hoy y ahorra hasta 25%</p>
              <div className="text-4xl">🚌</div>
            </div>

            {/* Card 3 */}
            <div className="flex-1 bg-white/80 rounded-xl shadow p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">Gana recompensas</h3>
              <p className="text-sm mb-4">Completa 5 viajes y recibe un cupón especial</p>
              <div className="flex gap-2 text-2xl">
                <span>🚌</span>
                <span>🚌</span>
                <span>🚌</span>
                <span>🚌</span>
                <span>🚌</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BuscadorDeViajes;
