/**
 * BusLinks.tsx
 * 
 * Este componente contiene los enlaces informativos sobre el viaje en bus.
 * Incluye:
 * - Servicios
 * - Fotos
 * - Terminales de salida/llegada
 * - Comentarios y puntuaciones
 * - Políticas de reserva
 */

const BusLinks = () => {
    return (
      <div className="flex flex-wrap gap-2 text-xs text-gray-600 border-t pt-2 mt-2">
        <a href="#" className="hover:underline">Servicios</a> |
        <a href="#" className="hover:underline">Fotos</a> |
        <a href="#" className="hover:underline">Terminal de salida y llegada</a> |
        <a href="#" className="hover:underline">Puntuaciones y comentarios</a> |
        <a href="#" className="hover:underline">Política de Reserva</a>
      </div>
    )
  }
  
  export default BusLinks
  