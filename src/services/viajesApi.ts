import axios from "axios";
import type { Viaje } from "../types/Viaje.ts";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 🔍 GET /viajes
 * Obtiene viajes según origen, destino y fecha
 */
export const getViajes = async (
  origen: string,
  destino: string,
  fecha: string
): Promise<Viaje[]> => {
  try {
    const response = await api.get<Viaje[]>("/viajes", {
      params: { origen, destino, fecha },
    });
    return response.data;
  } catch (error: any) {
    console.error("❌ Error al obtener viajes:", error);
    throw new Error(
      error.response?.data?.message ||
        "Error al obtener los viajes. Intenta de nuevo."
    );
  }
};

/**
 * 🔥 GET /viajes/:id/asientos
 * Obtiene los asientos de un viaje
 */
export const getAsientosPorViaje = async (idViaje: number) => {
  try {
    const response = await api.get(`/viajes/${idViaje}/asientos`);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error al obtener asientos:", error);
    throw new Error("No se pudieron cargar los asientos.");
  }
};

/**
 * 🔒 POST /viajes/reservar
 * Reserva un asiento
 */
export const reservarAsiento = async (idViaje: number, idAsiento: number) => {
  try {
    const response = await api.post(`/viajes/reservar`, {
      idViaje,
      idAsiento,
    });
    return response.data;
  } catch (error: any) {
    console.error("❌ Error al reservar asiento:", error);
    throw new Error("No se pudo reservar el asiento.");
  }
};
