import { MdLocationOn } from "react-icons/md";

interface Props {
  origen: string;
  setOrigen: (value: string) => void;
}

// ✅ Terminales reales definidos directamente
const terminales = ["Lima", "Chimbote"];

const CampoSelectOrigen = ({ origen, setOrigen }: Props) => {
  return (
    <div className="relative w-full lg:w-[18%]">
      {/* Label superior tipo Redbus */}
      <label className="text-xs font-semibold text-gray-600 mb-1 block">
        Desde
      </label>

      {/* Icono de ubicación al costado */}
      <MdLocationOn className="absolute left-3 top-[2.3rem] transform -translate-y-1/2 text-gray-500 text-xl" />

      {/* Select dinámico */}
      <select
        value={origen}
        onChange={(e) => setOrigen(e.target.value)}
        className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
        required
      >
        {/* Placeholder */}
        <option value="">Seleccionar origen</option>
        {terminales.map((terminal) => (
          <option key={terminal} value={terminal}>
            {terminal}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CampoSelectOrigen;
