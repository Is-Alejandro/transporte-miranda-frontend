/**
 * BusServicios.tsx
 * 
 * Este componente muestra los íconos y botones de servicios del bus:
 * - Información como asientos reclinables, baño, entre otros
 * - Botones "Reembolsable" y "Reprogramable"
 */

const BusServicios = () => {
    return (
      <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
        🛏️ 160° &bull; 🪑 140° &bull; 🚻 &bull; +12
        <button className="border border-gray-300 rounded px-2 py-0.5 text-xs hover:bg-gray-100">
          Reembolsable
        </button>
        <button className="border border-gray-300 rounded px-2 py-0.5 text-xs hover:bg-gray-100">
          Reprogramable
        </button>
      </div>
    )
  }
  
  export default BusServicios
  