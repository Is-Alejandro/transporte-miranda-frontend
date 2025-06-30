export interface Asiento {
  id: string;
  numero: number;
  piso: number;
  disponible: boolean;
  estado: 'disponible' | 'ocupado' | 'reservado' | 'seleccionado';
}
