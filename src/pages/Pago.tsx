/**
 * Pago.tsx
 *
 * 💳 Página de pago (simulada).
 * Muestra el resumen del viaje, asiento y datos del pasajero.
 * Prepara el flujo para elegir método de pago y confirmar la compra.
 */

import { useNavigate } from "react-router-dom";
import { useReserva } from "../context/ReservaContext";

const Pago = () => {
  const { datosReserva } = useReserva();
  const navigate = useNavigate();

  if (!datosReserva) {
    return (
      <div className="text-center text-red-600 font-bold mt-10">
        ❌ No hay datos de reserva seleccionados. Por favor vuelve a elegir un asiento.
      </div>
    );
  }

  const manejarConfirmacion = () => {
    // 🔥 Simulamos confirmación de pago
    alert("✅ Pago confirmado con éxito (modo demo). Gracias por tu compra.");
    navigate("/"); // 👈 Volver a la página principal
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-6">
      <h1 className="text-2xl font-bold text-primary mb-4">Método de Pago</h1>

      {/* Resumen del asiento reservado */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-700">
          <strong>Viaje:</strong> {datosReserva.origen} → {datosReserva.destino}
        </p>
        <p className="text-gray-700">
          <strong>Empresa:</strong> {datosReserva.empresa}
        </p>
        <p className="text-gray-700">
          <strong>Asiento:</strong> {datosReserva.numeroAsiento}
        </p>
        <p className="text-gray-700">
          <strong>Precio:</strong> S/ {datosReserva.precio}
        </p>
      </div>

      {/* Opciones de pago (simuladas) */}
      <div className="space-y-4">
        <button className="w-full py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600">
          🟢 Yape
        </button>
        <button className="w-full py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600">
          💳 Tarjeta de crédito/débito
        </button>
      </div>

      {/* Botón para confirmar */}
      <button
        className="w-full py-2 rounded bg-primary text-white font-semibold mt-6 hover:bg-primary-dark"
        onClick={manejarConfirmacion}
      >
        Confirmar compra
      </button>
    </div>
  );
};

export default Pago;
