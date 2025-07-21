import axios from "axios";
import type { Viaje } from "../types/Viaje.ts";
import { asientosSimulados } from "../data/asientosSimulados"; // 📦 Importamos asientos simulados

// ✅ Configuración de la API con baseURL desde variables de entorno
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 🔍 GET /viajes
 * Obtiene viajes según origen, destino y fecha
 * ⚠️ Simulado temporalmente con 1 viaje mientras el backend no está activo.
 */
export const getViajes = async (
  origen: string,
  destino: string,
  fecha: string
): Promise<Viaje[]> => {
  console.log("⚠️ Simulando viaje para pruebas (modo demo activado)");

  // 📝 Datos de un solo viaje simulado
  return [
    {
      id: 1,
      ruta: {
        origen: "Lima",
        destino: "Chimbote",
        distanciaKm: 450,
        duracionEstimada: 8, // En horas
      },
      fecha: "2025-07-22",
      horaSalida: "08:00",
      horaLlegada: "16:00",
      bus: {
        id: 1,
        placa: "ABC-123",
        marca: "Mercedes-Benz",
        modelo: "Tourismo",
        tipoBus: "SemiCama",
        capacidadTotal: 50,
      },
      precio: 50, // Precio en soles
    },
  ];
};

/**
 * 🪑 GET /viajes/:id/asientos
 * Obtiene los asientos de un viaje
 * ⚠️ Simulado con asientos dinámicos para pruebas.
 */
export const getAsientosPorViaje = async (idViaje: number) => {
  console.log(`⚠️ Simulando asientos para el viaje con ID ${idViaje}`);
  return asientosSimulados; // 📦 Devuelve los datos simulados
};

/**
 * 🔒 POST /viajes/reservar
 * Reserva un asiento
 * ⚠️ Simulado para siempre devolver éxito en modo demo
 */
export const reservarAsiento = async (idViaje: number, idAsiento: number) => {
  console.log(
    `✅ Simulando reserva de asiento ${idAsiento} para el viaje ${idViaje}`
  );
  return {
    success: true,
    mensaje: "Asiento reservado con éxito (modo demo activado).",
  };
};
