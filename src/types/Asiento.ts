export interface Asiento {
    id: string;               // id del asiento en la base de datos
    numero: number;           // número que se le muestra al usuario
    piso: number;             // piso del bus (1 o 2)
    disponible: boolean;      // true si está libre
    estado: 'disponible' | 'ocupado' | 'reservado' | 'seleccionado'; // control de color
  }
  