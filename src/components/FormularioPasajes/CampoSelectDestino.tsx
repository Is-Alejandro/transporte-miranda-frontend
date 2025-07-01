import { FaMapMarkerAlt } from "react-icons/fa";
import { terminales } from "../../data/terminales";

interface Props {
  destino: string;
  setDestino: (value: string) => void;
}

const CampoSelectDestino = ({ destino, setDestino }: Props) => {
  return (
    <div className="relative w-full lg:w-[18%]">
      {/* Icono de marcador */}
      <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />

      {/* Select dinámico */}
      <select
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
        className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <option value="">Seleccione destino</option>
        {terminales.map((terminal) => (
          <option key={terminal.id} value={terminal.nombre}>
            {terminal.nombre} ({terminal.ciudad})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CampoSelectDestino;
