import { FaCalendarAlt } from "react-icons/fa";

interface Props {
  fecha: string;                       // valor de la fecha
  setFecha: (value: string) => void;   // función para actualizar la fecha
  label: string;                       // texto descriptivo
  min?: string;                        // fecha mínima opcional
}

const CampoFecha = ({ fecha, setFecha, label, min }: Props) => {
  return (
    <div className="relative w-full lg:w-[18%]">
      {/* Icono de calendario */}
      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base" />

      {/* Campo tipo date */}
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
        min={min}
        placeholder={label}
      />
    </div>
  );
};

export default CampoFecha;
