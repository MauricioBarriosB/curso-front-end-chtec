import TransformableEvent from "./TransformableEvent";

function TransformableEventList() {
  // Lista de eventos
  const events = [
    { id: 1, title: "Reunión de equipo", date: "2024-12-20", status: "Pendiente" },
    { id: 2, title: "Presentación de proyecto", date: "2024-12-22", status: "Pendiente" },
  ];

  return (
    <div className="event-list">
      {events.map((event) => (
        <TransformableEvent key={event.id} event={event} />
      ))}
    </div>
  );
}

export default TransformableEventList;
