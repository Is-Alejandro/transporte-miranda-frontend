import { FaSearch } from "react-icons/fa";

const BotonBuscar = () => {
  return (
    <div className="w-full lg:w-[14%] flex justify-center lg:justify-end">
      <button
        type="submit"
        className="w-full lg:w-auto flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-2 rounded-xl hover:bg-primary-dark transition-colors duration-200"
      >
        <FaSearch />
        Buscar
      </button>
    </div>
  );
};

export default BotonBuscar;
