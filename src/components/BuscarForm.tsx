function BuscarForm() {
    return (
      <div className="bg-white px-4 py-3 shadow sticky top-[60px] z-40">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <input
            type="text"
            placeholder="Origen"
            className="border px-4 py-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Destino"
            className="border px-4 py-2 rounded-md w-full"
          />
          <input
            type="date"
            className="border px-4 py-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Buscar
          </button>
        </form>
      </div>
    );
  }
  
  export default BuscarForm;
  