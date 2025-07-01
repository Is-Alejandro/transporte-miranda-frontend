import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CampoSelectOrigen from "./CampoSelectOrigen";
import CampoSelectDestino from "./CampoSelectDestino";
import CampoFecha from "./CampoFecha";
import BotonBuscar from "./BotonBuscar";

const FormularioPasajes = () => {
  const navigate = useNavigate();

  // Estado para los campos
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fechaIda, setFechaIda] = useState("");
  const [fechaRetorno, setFechaRetorno] = useState("");

  // Validamos y procesamos el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!origen || !destino || !fechaIda) {
      alert("Por favor, completa origen, destino y fecha de ida.");
      return;
    }

    // Validar que origen y destino sean distintos
    if (origen === destino) {
      alert("El origen y el destino no pueden ser iguales.");
      return;
    }

    // Navegar con los datos
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
        className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-lg"
      >
        {/* Campo origen con su componente modular */}
        <CampoSelectOrigen origen={origen} setOrigen={setOrigen} />

        {/* Campo destino con su componente modular */}
        <CampoSelectDestino destino={destino} setDestino={setDestino} />

        {/* Campo fecha de ida */}
        <CampoFecha
          fecha={fechaIda}
          setFecha={setFechaIda}
          label="Fecha de ida"
          min={new Date().toISOString().split("T")[0]} // mínimo hoy
        />

        {/* Campo fecha de retorno */}
        <CampoFecha
          fecha={fechaRetorno}
          setFecha={setFechaRetorno}
          label="Fecha de retorno"
          min={fechaIda || new Date().toISOString().split("T")[0]} // mínimo la fecha de ida o hoy
        />

        {/* Botón de buscar modular */}
        <BotonBuscar />
      </motion.form>
    </div>
  );
};

export default FormularioPasajes;
