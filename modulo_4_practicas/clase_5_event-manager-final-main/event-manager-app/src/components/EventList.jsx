import EventCard from "./EventCard";

function EventList() {
  const events = [
    { id: 1, title: "Reunión de equipo", date: "2024-12-20", status: "Pendiente" },
    { id: 2, title: "Presentación de proyecto", date: "2024-12-22", status: "Completado" },
  ];

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
