import BuscadorDeViajes from "../components/Buscador/BuscadorDeViajes";

/**
 * Página principal Home
 *
 * - Gestiona el fondo de imagen solo para el Home
 * - Monta el BuscadorDeViajes con sus cards encima del fondo
 * - Contiene las demás secciones de presentación
 */

function Home() {
  return (
    <div className="w-full space-y-12">

      {/* Sección del Buscador con imagen de fondo */}
      <section className="relative w-full overflow-hidden min-h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/fondoPasaje.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
          <BuscadorDeViajes />
        </div>
      </section>

      {/* Sección corporativa */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-primary-dark mb-2">¿Por qué elegir Transporte Miranda?</h2>
        <p className="text-text-dark max-w-2xl mx-auto">
          En Transporte Miranda nos enfocamos en brindar seguridad, puntualidad y comodidad en cada uno de tus viajes.
          Nuestro compromiso con la excelencia nos convierte en tu mejor opción para movilizarte a nivel interprovincial.
        </p>
      </section>

      {/* Ofertas de viaje */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Ofertas de Viaje</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-sm text-primary-dark">Lima – Chimbote</h3>
              <p className="text-xs text-gray-500">Salida: 13 Mayo 2025</p>
              <p className="text-sm font-bold mt-2">S/ 50.00</p>
              <button className="mt-2 text-sm text-white bg-primary hover:bg-primary-dark px-3 py-1 rounded">
                Reservar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pasos para comprar tu boleto */}
      <section className="bg-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-primary-dark mb-8">¿Cómo comprar tu boleto?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Busca tu viaje fácilmente", "Ingresa tu ciudad de origen, destino y la fecha en que deseas viajar."],
              ["Selecciona horario y asiento", "Visualiza todos los viajes disponibles y elige tu asiento favorito."],
              ["Completa tus datos", "Ingresa tu nombre, DNI y otros datos necesarios para emitir el boleto."],
              ["Paga y recibe tu boleto", "Usa tarjeta o Yape. Recibirás el boleto al instante en tu correo."],
            ].map(([titulo, desc], i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow border text-left">
                <div className="text-primary font-bold text-lg mb-2">{i + 1}</div>
                <h3 className="font-semibold text-sm text-gray-800">{titulo}</h3>
                <p className="text-xs text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold text-center text-primary-dark mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-2">
          {[
            "¿Cómo puedo comprar un pasaje?",
            "¿Qué métodos de pago aceptan?",
            "¿Puedo cambiar la fecha de mi viaje?",
            "¿Qué hago si pierdo mi pasaje?",
            "¿Puedo viajar con mi mascota?",
            "¿Qué documentos necesito para viajar?"
          ].map((pregunta, i) => (
            <details key={i} className="bg-white border rounded-lg shadow-sm px-4 py-2">
              <summary className="cursor-pointer font-medium text-sm">{pregunta}</summary>
              <p className="text-xs text-gray-600 mt-2">Respuesta simulada. Aquí va el contenido de ayuda.</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
