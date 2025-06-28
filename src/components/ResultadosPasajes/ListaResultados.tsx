import CardBus from "./CardBus"

const ListaResultados = ({ buses }: { buses: any[] }) => {
  return (
    <div className="mt-4 space-y-4">
      {buses.map((bus) => (
        <CardBus key={bus.id} bus={bus} />
      ))}
    </div>
  )
}

export default ListaResultados
