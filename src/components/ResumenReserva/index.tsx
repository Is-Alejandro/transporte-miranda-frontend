import { useReserva } from "../../context/ReservaContext";
import { reservarAsiento } from "../../services/viajesApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * 🎫 ResumenReserva
 *
 * Componente que muestra el resumen de la reserva actual
 * y permite al usuario confirmar para continuar al formulario de datos del pasajero.
 */
const ResumenReserva = () => {
  const { datosReserva } = useReserva(); // ✅ Obtener datos de la reserva
  const [loading, setLoading] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false); // 🆕 Controla visibilidad del modal
  const navigate = useNavigate();

  // 🚨 Si no hay datos de reserva, no renderizar nada
  if (!datosReserva) return null;

  const {
    idViaje,
    idAsiento,
    numeroAsiento,
    precio,
    empresa,
    origen,
    destino,
    horaSalida,
  } = datosReserva;

  const puedeContinuar = idAsiento !== null && idViaje !== null;

  /**
   * 🔥 Manejar confirmación de reserva
   */
  const manejarConfirmacion = async () => {
    try {
      setLoading(true);

      // 🌐 Simular reserva del asiento (modo demo)
      await reservarAsiento(idViaje!, idAsiento!);

      console.log("✅ Asiento reservado. Redirigiendo a datos del pasajero...");
      // ✅ Navegar al formulario de datos del pasajero
      navigate("/datos-pasajero");

      // ⚠️ No limpiar la reserva aquí para que los datos sigan disponibles
      // Limpiar solo al finalizar la compra en la página de pago
    } catch (error: any) {
      console.error("❌ Error al reservar asiento:", error);
      alert("❌ No se pudo reservar el asiento. Intenta de nuevo.");
    } finally {
      setLoading(false);
      setMostrarModal(false); // 🔒 Cerrar modal al finalizar
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-primary">Resumen de tu reserva</h2>

      {/* 📝 Detalles de la reserva */}
      <div className="text-sm space-y-2 text-gray-800">
        <p><strong>Empresa:</strong> {empresa ?? "No disponible"}</p>
        <p><strong>Origen:</strong> {origen ?? "No disponible"}</p>
        <p><strong>Destino:</strong> {destino ?? "No disponible"}</p>
        <p><strong>Hora de salida:</strong> {horaSalida ?? "No disponible"}</p>
        <p><strong>Asiento:</strong> {numeroAsiento ?? "No seleccionado"}</p>
        <p><strong>Precio:</strong> {precio ? `S/ ${precio}` : "No disponible"}</p>
      </div>

      {/* ✅ Botón para abrir modal */}
      <button
        className={`w-full py-2 rounded font-semibold text-white transition ${
          puedeContinuar && !loading
            ? "bg-primary hover:bg-primary-dark"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!puedeContinuar || loading}
        onClick={() => setMostrarModal(true)}
      >
        {loading ? "Procesando..." : "Continuar"}
      </button>

      {/* 🆕 MODAL de confirmación */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-bold mb-4">¿Deseas continuar?</h3>
            <p className="text-sm text-gray-600 mb-6">
              Esto reservará el asiento y te llevará al formulario de datos del pasajero.
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setMostrarModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                onClick={manejarConfirmacion}
                disabled={loading}
              >
                {loading ? "Procesando..." : "Sí, continuar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumenReserva;
