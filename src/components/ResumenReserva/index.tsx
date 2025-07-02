/**
 * ResumenReserva.tsx
 *
 * Este componente muestra un resumen visual de la reserva actual.
 * Incluye:
 * - Detalles del asiento y viaje seleccionados
 * - Validación para activar/desactivar el botón de "Continuar"
 * - Escalable para agregar navegación al siguiente paso
 */

import { useReserva } from "../../context/ReservaContext";

const ResumenReserva = () => {
  const { datosReserva } = useReserva();

  // Validación: si no hay datos de reserva aún
  if (!datosReserva) {
    return null;
  }

  const {
    idViaje,
    idAsiento,
    numeroAsiento,
    precio,
    empresa,
    origen,
    destino,
    horaSalida
  } = datosReserva;

  const puedeContinuar = idAsiento !== null && idViaje !== null;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-primary">Resumen de tu reserva</h2>

      <div className="text-sm space-y-2 text-gray-800">
        <p><strong>Empresa:</strong> {empresa ?? "No disponible"}</p>
        <p><strong>Origen:</strong> {origen ?? "No disponible"}</p>
        <p><strong>Destino:</strong> {destino ?? "No disponible"}</p>
        <p><strong>Hora de salida:</strong> {horaSalida ?? "No disponible"}</p>
        <p><strong>Asiento:</strong> {numeroAsiento ?? "No seleccionado"}</p>
        <p><strong>Precio:</strong> {precio ? `S/ ${precio}` : "No disponible"}</p>
      </div>

      <button
        className={`w-full py-2 rounded font-semibold text-white transition ${
          puedeContinuar ? "bg-primary hover:bg-primary-dark" : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!puedeContinuar}
        onClick={() => {
          // Aquí irá la navegación real al siguiente paso (formulario o pago)
          alert("Reserva lista para continuar 🚀 (simulado)");
        }}
      >
        Continuar
      </button>
    </div>
  );
};

export default ResumenReserva;
