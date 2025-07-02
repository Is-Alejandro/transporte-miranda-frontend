/**
 * BotonPlanoAsientos.tsx
 * 
 * Este componente renderiza un botón para expandir o contraer
 * el plano de asientos del bus. Recibe el estado actual y la función
 * para alternar desde el componente padre.
 */

interface Props {
    isExpanded: boolean
    onToggle: () => void
  }
  
  const BotonPlanoAsientos = ({ isExpanded, onToggle }: Props) => {
    return (
      <div className="text-right mt-2">
        <button
          onClick={onToggle}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          {isExpanded ? "OCULTAR ASIENTOS" : "VER ASIENTOS"}
        </button>
      </div>
    )
  }
  
  export default BotonPlanoAsientos
  