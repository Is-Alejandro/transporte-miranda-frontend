// src/types/Viaje.ts

/**
 * 🎯 Interfaz para el tipo de datos Viaje
 * Adaptado para reflejar las relaciones completas (ruta y bus)
 */
export interface Viaje {
    id: number;
    fecha: string;           // YYYY-MM-DD
    horaSalida: string;      // HH:MM
    horaLlegada: string;     // HH:MM
  
    // Relación con la ruta (origen, destino, etc.)
    ruta: {
      origen: string;
      destino: string;
      distanciaKm: number;
      duracionEstimada: number; // Duración en minutos
    };
  
    // Relación con el bus asignado
    bus: {
      id: number;
      placa: string;
      marca: string;           // 🆕 Marca del bus
      modelo: string;          // 🆕 Modelo del bus
      tipoBus: string;         // 🆕 Tipo de bus (Interprovincial, etc.)
      capacidadTotal: number;  // 🆕 Capacidad total de asientos
    };
  
    // Puedes agregar precio aquí si tu backend lo devuelve
    precio?: number;
  }
  