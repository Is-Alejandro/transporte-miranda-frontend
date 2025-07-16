import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CampoSelectOrigen from "./CampoSelectOrigen";
import CampoSelectDestino from "./CampoSelectDestino";
import CampoFecha from "./CampoFecha";
import BotonBuscar from "./BotonBuscar";

// ✅ Definimos el tipo de props que recibe este componente
interface FormularioPasajesProps {
  /**
   * 🔍 Función para buscar viajes en el backend
   * @param origen - ciudad de origen
   * @param destino - ciudad de destino
   * @param fecha - fecha en formato YYYY-MM-DD
   */
  onBuscar: (origen: string, destino: string, fecha: string) => Promise<void>;
}

const FormularioPasajes: React.FC<FormularioPasajesProps> = ({ onBuscar }) => {
  const navigate = useNavigate();

  // 🎯 Estados para capturar la búsqueda del usuario
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fechaIda, setFechaIda] = useState("");
  const [fechaRetorno, setFechaRetorno] = useState("");

  /**
   * 🚀 handleSubmit
   * Maneja el envío del formulario y llama al backend
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validaciones básicas
    if (!origen || !destino || !fechaIda) {
      alert("Por favor, completa origen, destino y fecha de ida.");
      return;
    }

    if (origen === destino) {
      alert("El origen y el destino no pueden ser iguales.");
      return;
    }

    try {
      // ✅ Llamada al backend para buscar viajes
      await onBuscar(origen, destino, fechaIda);

      // 💾 Guardar búsqueda en localStorage (opcional)
      localStorage.setItem(
        "busquedaPasajes",
        JSON.stringify({ origen, destino, fechaIda, fechaRetorno })
      );

      // 🌐 Navegar a la página de resultados
      navigate("/resultados", {
        state: { origen, destino, fechaIda, fechaRetorno },
      });
    } catch (error) {
      console.error("❌ Error al buscar viajes:", error);
      alert("Hubo un problema al buscar los viajes. Intenta de nuevo.");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <motion.form
        key="pasajes"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="
          w-full
          flex flex-col lg:flex-row lg:items-center lg:justify-between
          gap-4
          bg-white/90             /* fondo casi opaco para contraste mejor */
          border border-gray-300  /* borde sutil para delimitar */
          shadow-xl               /* sombra más pronunciada para destacar */
          rounded-2xl
          p-4
          backdrop-blur-md        /* opcional, para glassmorphism */
        "
      >
        {/* Campo origen */}
        <CampoSelectOrigen origen={origen} setOrigen={setOrigen} />

        {/* Campo destino */}
        <CampoSelectDestino
          destino={destino}
          setDestino={setDestino}
          origen={origen}
        />

        {/* Fecha de ida */}
        <CampoFecha
          fecha={fechaIda}
          setFecha={setFechaIda}
          label="Fecha de ida"
          min={new Date().toISOString().split("T")[0]}
        />

        {/* Fecha de retorno */}
        <CampoFecha
          fecha={fechaRetorno}
          setFecha={setFechaRetorno}
          label="Fecha de retorno"
          min={fechaIda || new Date().toISOString().split("T")[0]}
        />

        {/* Botón buscar */}
        <BotonBuscar />
      </motion.form>
    </div>
  );
};

export default FormularioPasajes;
