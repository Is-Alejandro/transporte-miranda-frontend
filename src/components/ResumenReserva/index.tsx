import { useReserva } from "../../context/ReservaContext";
import { reservarAsiento } from "../../services/viajesApi"; // ✅ Importar la API para reservar
import { useState } from "react";

const ResumenReserva = () => {
  const { datosReserva, limpiarReserva } = useReserva();
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState<string | null>(null);

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

  const manejarReserva = async () => {
    if (!puedeContinuar) return;

    try {
      setLoading(true);
      setMensaje(null);

      // 🌐 Reservar asiento en el backend
      await reservarAsiento(idViaje!, idAsiento!);

      // ✅ Mostrar alerta
      alert("✅ Asiento reservado con éxito.");

      // 🧹 Limpiar la reserva del contexto
      limpiarReserva();

      // 🔄 Actualizar automáticamente el plano de asientos
      window.location.reload(); // 👈 Forzar refresco (temporal, luego lo podemos hacer dinámico)
    } catch (error: any) {
      console.error("❌ Error al reservar asiento:", error);
      setMensaje("❌ No se pudo reservar el asiento. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

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

      {/* Mostrar mensaje de éxito o error */}
      {mensaje && (
        <p
          className={`text-center font-medium ${
            mensaje.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {mensaje}
        </p>
      )}

      <button
        className={`w-full py-2 rounded font-semibold text-white transition ${
          puedeContinuar && !loading
            ? "bg-primary hover:bg-primary-dark"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!puedeContinuar || loading}
        onClick={manejarReserva}
      >
        {loading ? "Reservando..." : "Continuar"}
      </button>
    </div>
  );
};

export default ResumenReserva;
