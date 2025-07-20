import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  destino: string;
  setDestino: (value: string) => void;
  origen: string;
}

// ✅ Lista fija de terminales reales
const terminales = ["Lima", "Chimbote"];

const CampoSelectDestino = ({ destino, setDestino, origen }: Props) => {
  // Filtrar para evitar que el usuario seleccione el mismo origen
  const opcionesFiltradas = terminales.filter((t) => t !== origen);

  return (
    <div className="relative w-full lg:w-[18%]">
      {/* Label superior tipo Redbus */}
      <label className="text-xs font-semibold text-gray-600 mb-1 block">
        Hasta
      </label>

      {/* Icono de marcador al costado */}
      <FaMapMarkerAlt className="absolute left-3 top-[2.3rem] transform -translate-y-1/2 text-gray-500 text-lg" />

      {/* Select dinámico */}
      <select
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
        className="w-full pl-10 py-2 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
        required
      >
        {/* Placeholder de estilo profesional */}
        <option value="">Seleccionar destino</option>

        {/* Opciones dinámicas excluyendo el mismo origen */}
        {opcionesFiltradas.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CampoSelectDestino;
