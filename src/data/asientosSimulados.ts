import type { Asiento } from "../types/Asiento";

export const asientosSimulados: Asiento[] = [
  { id: "a1", numero: 1, piso: 1, disponible: true, estado: "disponible" },
  { id: "a2", numero: 2, piso: 1, disponible: false, estado: "ocupado" },
  { id: "a3", numero: 3, piso: 1, disponible: true, estado: "disponible" },
  { id: "a4", numero: 4, piso: 1, disponible: false, estado: "reservado" },
  { id: "a5", numero: 5, piso: 1, disponible: true, estado: "disponible" },
  // puedes agregar más para testear
];
