import { MdLocationOn } from "react-icons/md";
import { terminales } from "../../data/terminales";

interface Props {
  origen: string;
  setOrigen: (value: string) => void;
}

const CampoSelectOrigen = ({ origen, setOrigen }: Props) => {
  return (
    <div className="relative w-full lg:w-[18%]">
      {/* Icono de ubicación */}
      <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />

      {/* Select dinámico */}
      <select
        value={origen}
        onChange={(e) => setOrigen(e.target.value)}
        className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <option value="">Seleccione origen</option>
        {terminales.map((terminal) => (
          <option key={terminal.id} value={terminal.nombre}>
            {terminal.nombre} ({terminal.ciudad})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CampoSelectOrigen;
