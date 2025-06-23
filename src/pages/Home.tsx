import BuscarForm from "../components/BuscarForm";

function Home() {
  return (
    <div className="pb-10">
      <BuscarForm />
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold text-blue-800">
          Bienvenido a Transporte Miranda
        </h1>
        <p className="mt-2 text-gray-700">Reserva tu viaje de manera fácil y rápida</p>
      </div>
    </div>
  );
}

export default Home;
