// src/components/BuscadorDeViajes.tsx

// Este componente representa el formulario principal para buscar viajes.
// Se mostrará exclusivamente en la ruta "/", como parte del Layout.

const BuscadorDeViajes = () => {
  return (
    <div className="bg-white px-4 py-5 shadow-md sticky top-[60px] z-40">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {/* Campo de entrada para el lugar de origen */}
        <input
          type="text"
          placeholder="Origen"
          className="border border-gray-light px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {/* Campo de entrada para el lugar de destino */}
        <input
          type="text"
          placeholder="Destino"
          className="border border-gray-light px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {/* Campo para seleccionar la fecha */}
        <input
          type="date"
          className="border border-gray-light px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {/* Botón de búsqueda */}
        <button
          type="submit"
          className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
        >
          Buscar
        </button>
      </form>
    </div>
  )
}

export default BuscadorDeViajes
