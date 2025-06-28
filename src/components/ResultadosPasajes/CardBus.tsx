// Este componente representa visualmente un resultado de bus en forma de tarjeta

interface Bus {
    id: number
    empresa: string
    horaSalida: string
    horaLlegada: string
    duracion: string
    precio: number
    origen: string
    destino: string
    fecha: string
    asientosDisponibles: number
  }
  
  interface Props {
    bus: Bus
  }
  
  const CardBus = ({ bus }: Props) => {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Información de la empresa y horario */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 flex-1">
          <div>
            <p className="text-lg font-bold text-primary">{bus.empresa}</p>
            <p className="text-sm text-gray-600">{bus.fecha}</p>
          </div>
  
          <div className="text-sm text-gray-700">
            <p><span className="font-semibold">Salida:</span> {bus.horaSalida}</p>
            <p><span className="font-semibold">Llegada:</span> {bus.horaLlegada}</p>
            <p><span className="font-semibold">Duración:</span> {bus.duracion}</p>
          </div>
        </div>
  
        {/* Sección del precio y botón de acción */}
        <div className="flex flex-col items-end gap-2 text-right">
          <p className="text-lg font-bold text-green-600">S/ {bus.precio}</p>
          <p className="text-sm text-gray-500">{bus.asientosDisponibles} asientos disponibles</p>
          <button className="bg-primary text-white px-4 py-1 rounded-lg hover:bg-primary-dark transition">
            Ver asientos
          </button>
        </div>
      </div>
    )
  }
  
  export default CardBus
  