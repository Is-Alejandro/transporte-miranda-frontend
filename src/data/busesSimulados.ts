import type { Bus } from "../types/Bus";

/**
 * Simulación de 5 buses de Transporte Miranda
 */
export const busesSimulados: Bus[] = Array.from({ length: 5 }, (_, idx) => ({
  id: idx + 1,
  empresa: "Transporte Miranda",
  horaSalida: "08:00 AM",
  horaLlegada: "02:00 PM",
  precio: 120,
  origen: "Terminal Plaza Norte", // coincide con tu select
  destino: "Terminal Terrestre El Chimbador", // coincide con tu select
  duracion: "6h",
  fecha: "2025-07-02", // podrías también poner hoy como valor genérico
  asientosDisponibles: 30,
}));
