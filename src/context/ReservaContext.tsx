/**
 * ReservaContext.tsx
 *
 * Este archivo define un contexto global para manejar la selección de asiento y viaje
 * durante el proceso de reserva en la app de Transporte Miranda.
 *
 * Permite que cualquier componente acceda o modifique:
 * - Toda la información del asiento y viaje seleccionado
 * - Y reiniciar los datos si se cancela o finaliza la reserva
 *
 * Esta versión unifica el manejo en una sola función para mejorar la escalabilidad.
 */

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// ✅ Corregido: idAsiento ahora es number
export interface DatosReserva {
  idAsiento: number | null;        // 🎯 Ahora es number para coincidir con la BD
  numeroAsiento: number | null;
  idViaje: number | null;
  precio: number | null;
  origen: string | null;
  destino: string | null;
  empresa: string | null;
  horaSalida: string | null;
}

// Tipo del contexto con datos y funciones disponibles
interface ReservaContextType {
  datosReserva: DatosReserva | null;
  seleccionarReserva: (reserva: DatosReserva | null) => void;
  limpiarReserva: () => void;
}

// Crear el contexto
const ReservaContext = createContext<ReservaContextType | undefined>(undefined);

// Proveedor del contexto que envuelve a toda la app
export const ReservaProvider = ({ children }: { children: ReactNode }) => {
  const [datosReserva, setDatosReserva] = useState<DatosReserva | null>(null);

  // Función centralizada para guardar o eliminar la reserva completa
  const seleccionarReserva = (reserva: DatosReserva | null) => {
    setDatosReserva(reserva);
  };

  // Función para reiniciar todos los datos
  const limpiarReserva = () => {
    setDatosReserva(null);
  };

  return (
    <ReservaContext.Provider value={{ datosReserva, seleccionarReserva, limpiarReserva }}>
      {children}
    </ReservaContext.Provider>
  );
};

// Hook personalizado para acceder al contexto en cualquier componente
export const useReserva = () => {
  const context = useContext(ReservaContext);
  if (!context) throw new Error("useReserva debe usarse dentro de <ReservaProvider>");
  return context;
};
