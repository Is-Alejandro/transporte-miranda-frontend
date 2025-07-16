// src/services/viajesApi.ts
import axios from "axios";
import type { Viaje } from "../types/Viaje.ts"; // Importa la interfaz Viaje para el tipado

// ✅ Configuración de Axios con la URL base
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000", // Cambia el puerto si tu backend usa otro
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 🔍 getViajes
 * Llama al endpoint GET /viajes para obtener los viajes según origen, destino y fecha
 * @param origen - string con el nombre del origen
 * @param destino - string con el nombre del destino
 * @param fecha - string en formato YYYY-MM-DD
 * @returns Lista de viajes encontrados o lanza un error si la API falla
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
