// Este componente muestra un resumen visual de la búsqueda realizada por el usuario

interface Props {
    origen: string
    destino: string
    fechaIda: string
    fechaRetorno?: string
  }
  
  const ResumenBusqueda = ({ origen, destino, fechaIda, fechaRetorno }: Props) => {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        {/* Información principal de origen y destino */}
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-primary">De {origen} a {destino}</p>
          <p className="text-sm text-gray-600">
            {fechaRetorno
              ? `Ida: ${formatearFecha(fechaIda)} - Retorno: ${formatearFecha(fechaRetorno)}`
              : `Fecha: ${formatearFecha(fechaIda)}`}
          </p>
        </div>
  
        {/* Mensaje adicional o badge */}
        <div className="text-sm text-green-600 font-medium">
          Resultados disponibles para tu búsqueda
        </div>
      </div>
    )
  }
  
  // Función auxiliar para formatear fechas (ej. 2025-07-01 → 01/07/2025)
  const formatearFecha = (fecha: string) => {
    const [año, mes, dia] = fecha.split("-")
    return `${dia}/${mes}/${año}`
  }
  
  export default ResumenBusqueda
  