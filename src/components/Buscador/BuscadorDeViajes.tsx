import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TituloAnimado from "./TituloAnimado";
import ModoSelector from "./ModoSelector";
import FormularioPasajes from "./FormularioPasajes";
import FormularioEncomiendas from "./FormularioEncomiendas";

const BuscadorDeViajes = () => {
  // Estado para saber si el usuario busca pasajes o encomiendas
  const [modoBusqueda, setModoBusqueda] = useState<"pasajes" | "encomiendas">("pasajes");

  // Título dinámico según el modo seleccionado
  const titulo =
    modoBusqueda === "pasajes"
      ? "Reserva tu viaje con Transporte Miranda"
      : "Envía tus encomiendas de forma rápida y segura";

  return (
    <section className="relative w-full py-12 min-h-[600px] overflow-hidden">
      {/* Contenido del buscador */}
      <div className="w-full max-w-7xl mx-auto px-4 space-y-8">
        {/* Título animado */}
        <TituloAnimado titulo={titulo} modoBusqueda={modoBusqueda} />

        {/* Selector de modo entre pasajes o encomiendas */}
        <ModoSelector modoBusqueda={modoBusqueda} setModoBusqueda={setModoBusqueda} />

        {/* Animación de entrada/salida entre formularios */}
        <AnimatePresence mode="wait">
          {modoBusqueda === "pasajes" ? (
            <FormularioPasajes key="pasajes" />
          ) : (
            <FormularioEncomiendas key="encomiendas" />
          )}
        </AnimatePresence>

        {/* Mostrar las cards SOLO en modo pasajes */}
        {modoBusqueda === "pasajes" && (
          <div className="flex flex-col lg:flex-row gap-4 justify-between mt-8">
            {/* Card 1: Descarga la app */}
            <div className="flex-1 bg-white/80 rounded-xl shadow p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">Descarga nuestra app</h3>
              <p className="text-sm mb-4">Ahorra hasta 15% reservando desde la app</p>
              <div className="flex flex-col gap-2">
                <div className="bg-black text-white px-4 py-2 rounded">Google Play</div>
                <div className="bg-black text-white px-4 py-2 rounded">App Store</div>
              </div>
            </div>

            {/* Card 2: Oferta de un viaje */}
            <div className="flex-1 bg-white/80 rounded-xl shadow p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">Oferta exclusiva</h3>
              <p className="text-sm mb-4">Viaja hoy y ahorra hasta 25%</p>
              <div className="text-4xl">🚌</div>
            </div>

            {/* Card 3: Completa 5 viajes */}
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
