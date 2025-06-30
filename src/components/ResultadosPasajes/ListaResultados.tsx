import CardBus from "./CardBus";
import type { Bus } from "../../types/Bus";

const ListaResultados = ({ buses }: { buses: Bus[] }) => {
  return (
    <div className="mt-4 space-y-4">
      {buses.map((bus) => (
        <CardBus key={bus.id} bus={bus} />
      ))}
    </div>
  );
};

export default ListaResultados;
