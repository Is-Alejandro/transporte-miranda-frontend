import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CampoSelectOrigen from "./CampoSelectOrigen";
import CampoSelectDestino from "./CampoSelectDestino";
import CampoFecha from "./CampoFecha";
import BotonBuscar from "./BotonBuscar";

const FormularioPasajes = () => {
  const navigate = useNavigate();

  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fechaIda, setFechaIda] = useState("");
  const [fechaRetorno, setFechaRetorno] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!origen || !destino || !fechaIda) {
      alert("Por favor, completa origen, destino y fecha de ida.");
      return;
    }

    if (origen === destino) {
      alert("El origen y el destino no pueden ser iguales.");
      return;
    }

    localStorage.setItem(
      "busquedaPasajes",
      JSON.stringify({ origen, destino, fechaIda, fechaRetorno })
    );

    navigate("/resultados", {
      state: { origen, destino, fechaIda, fechaRetorno },
    });
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
