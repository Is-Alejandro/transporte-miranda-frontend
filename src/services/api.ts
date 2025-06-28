// Importamos el arreglo de buses simulados desde el archivo de datos
import { busesSimulados } from "../data/busesSimulados"

// Importamos la interfaz Bus para tener tipado fuerte y evitar errores en tiempo de desarrollo
import type { Bus } from "../types/Bus"

// Esta función simula una llamada a una API para obtener buses disponibles
// Filtra los buses según el origen, destino y fecha proporcionados por el usuario
export const getBuses = async (
  origen: string,
  destino: string,
  fecha: string
): Promise<Bus[]> => {
  return busesSimulados.filter((bus: Bus) =>
    bus.origen.toLowerCase() === origen.toLowerCase() &&
    bus.destino.toLowerCase() === destino.toLowerCase() &&
    bus.fecha === fecha
  )
}
