/**
 * ResumenReserva.tsx
 * 
 * Este componente muestra un resumen visual de la reserva actual.
 * Incluye:
 * - El número de asiento seleccionado
 * - El ID del viaje (o más datos si los tuvieras)
 * - El precio del pasaje
 * - Un botón "Continuar" que solo se activa si hay un asiento seleccionado
 * 
 * Más adelante, este componente puede redirigir al formulario de pasajero
 * o a la pantalla de confirmación/pago.
 */

import { useReserva } from "../../context/ReservaContext"

const ResumenReserva = () => {
  const { datosReserva } = useReserva()

  const { idViaje, idAsiento, numeroAsiento, precio } = datosReserva

  const puedeContinuar = idAsiento !== null && idViaje !== null

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-primary">Resumen de tu reserva</h2>

      <div className="text-sm space-y-2 text-gray-800">
        <p><strong>Viaje ID:</strong> {idViaje ?? "No seleccionado"}</p>
        <p><strong>Asiento:</strong> {numeroAsiento ?? "No seleccionado"}</p>
        <p><strong>Precio:</strong> {precio ? `S/ ${precio}` : "No disponible"}</p>
      </div>

      <button
        className={`w-full py-2 rounded font-semibold text-white transition ${
          puedeContinuar ? "bg-primary hover:bg-primary-dark" : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!puedeContinuar}
        onClick={() => {
          // Aquí irá la navegación al siguiente paso (ej. confirmación)
          alert("Reserva lista para continuar 🚀 (simulado)")
        }}
      >
        Continuar
      </button>
    </div>
  )
}

export default ResumenReserva
