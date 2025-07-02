/**
 * ReservaContext.tsx
 * 
 * Este archivo define un contexto global para manejar la selección de asiento y viaje
 * durante el proceso de reserva en la app de Transporte Miranda.
 * 
 * Permite que cualquier componente acceda o modifique:
 * - El asiento seleccionado (id y número)
 * - El viaje seleccionado (id y precio)
 * - Y reiniciar los datos si se cancela o finaliza la reserva
 * 
 * Es esencial para mantener el estado de la reserva sincronizado entre
 * el plano de asientos, el resumen lateral y el paso final de confirmación.
 */

import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

// Estructura de los datos que se guardarán en el contexto
export interface DatosReserva {
  idViaje: number | null          // ID del viaje seleccionado
  idAsiento: string | null        // ID del asiento seleccionado (ej. "p1-45")
  numeroAsiento: number | null    // Número visible del asiento (ej. 45)
  precio: number | null           // Precio del pasaje
}

// Tipo del contexto, con datos y funciones disponibles
interface ReservaContextType {
  datosReserva: DatosReserva
  seleccionarAsiento: (idAsiento: string, numero: number) => void
  seleccionarViaje: (idViaje: number, precio: number) => void
  limpiarReserva: () => void
}

// Crear el contexto (valor inicial: undefined hasta que se use dentro del provider)
const ReservaContext = createContext<ReservaContextType | undefined>(undefined)

// Componente proveedor que envuelve a toda la app
export const ReservaProvider = ({ children }: { children: ReactNode }) => {
  // Estado centralizado con los datos de la reserva
  const [datosReserva, setDatosReserva] = useState<DatosReserva>({
    idViaje: null,
    idAsiento: null,
    numeroAsiento: null,
    precio: null,
  })

  // Función para guardar el asiento seleccionado
  const seleccionarAsiento = (idAsiento: string, numero: number) => {
    setDatosReserva((prev) => ({ ...prev, idAsiento, numeroAsiento: numero }))
  }

  // Función para guardar el viaje y el precio
  const seleccionarViaje = (idViaje: number, precio: number) => {
    setDatosReserva((prev) => ({ ...prev, idViaje, precio }))
  }

  // Función para limpiar todos los datos (al cancelar o reiniciar)
  const limpiarReserva = () => {
    setDatosReserva({
      idViaje: null,
      idAsiento: null,
      numeroAsiento: null,
      precio: null,
    })
  }

  // Proveer los valores y funciones a toda la app
  return (
    <ReservaContext.Provider
      value={{ datosReserva, seleccionarAsiento, seleccionarViaje, limpiarReserva }}
    >
      {children}
    </ReservaContext.Provider>
  )
}

// Hook personalizado para acceder al contexto fácilmente
export const useReserva = () => {
  const context = useContext(ReservaContext)
  if (!context) throw new Error("useReserva debe usarse dentro de <ReservaProvider>")
  return context
}
