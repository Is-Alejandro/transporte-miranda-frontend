import BuscadorDeViajes from "../components/Buscador/BuscadorDeViajes";

/**
 * Página principal Home
 * 
 * - Gestiona el fondo de imagen solo para el Home
 * - Monta el BuscadorDeViajes con sus cards encima del fondo
 * - Contiene las demás secciones de presentación
 * 
 * Nota:
 * El fondo se gestiona aquí para separar responsabilidades
 * dejando el Layout limpio y genérico.
 */
function Home() {
  return (
    <div className="w-full space-y-8">

      {/* Sección del Buscador con imagen de fondo */}
      <section className="relative w-full overflow-hidden min-h-[700px]">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/fondoPasaje.jpg')" }}
        >
          {/* Filtro para mejorar contraste y legibilidad */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>

        {/* Buscador y sus cards encima del fondo */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
          <BuscadorDeViajes />
        </div>
      </section>

      {/* Sección con introducción corporativa */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-primary-dark mb-2">¿Por qué elegir Transporte Miranda?</h2>
        <p className="text-text-dark">
          En Transporte Miranda nos enfocamos en brindar seguridad, puntualidad y comodidad en cada uno de tus viajes.
          Nuestro compromiso con la excelencia nos convierte en tu mejor opción para movilizarte a nivel interprovincial.
        </p>
      </section>

      {/* Puedes agregar más secciones aquí si gustas */}
      {/* ... */}

    </div>
  );
}

export default Home;
