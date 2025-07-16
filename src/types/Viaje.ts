// src/types/Viaje.ts

/**
 * 🎯 Interfaz para el tipo de datos Viaje
 */
export interface Viaje {
    id: number;
    origen: string;
    destino: string;
    fecha: string; // YYYY-MM-DD
    horaSalida: string; // HH:MM
    horaLlegada: string; // HH:MM
    bus: {
      id: number;
      placa: string;
      capacidad: number;
    };
    precio: number;
  }
  