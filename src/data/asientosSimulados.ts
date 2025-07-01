import type { Asiento } from "../types/Asiento";

// Exportamos un array de asientos simulados
export const asientosSimulados: Asiento[] = [
  // Generamos dinámicamente los asientos del piso 1 (12 asientos)
  ...Array.from({ length: 12 }, (_, i) => {
    const numero = i + 1;

    // Definimos el estado de cada asiento de forma explícita
    // TypeScript necesita saber que pertenece al tipo estricto Asiento["estado"]
    const estado: "disponible" | "ocupado" | "reservado" | "seleccionado" =
      numero % 5 === 0 // cada 5° asiento está ocupado
        ? "ocupado"
        : numero % 4 === 0 // cada 4° asiento reservado
        ? "reservado"
        : "disponible"; // el resto disponible

    return {
      id: `p1-${numero}`, // ID único con prefijo de piso
      numero,             // número visible del asiento
      piso: 1,            // piso 1
      disponible: estado === "disponible", // true solo si está libre
      estado,             // estado calculado arriba
    };
  }),

  // Generamos los asientos del piso 2 (52 asientos)
  ...Array.from({ length: 52 }, (_, i) => {
    const numero = i + 13;

    const estado: "disponible" | "ocupado" | "reservado" | "seleccionado" =
      numero % 9 === 0 // cada 9° asiento ocupado
        ? "ocupado"
        : numero % 8 === 0 // cada 8° asiento reservado
        ? "reservado"
        : "disponible";

    return {
      id: `p2-${numero}`,       // ID único con prefijo de piso
      numero,                   // número visible
      piso: 2,                  // piso 2
      disponible: estado === "disponible",
      estado,                   // estado según regla
    };
  }),
];
