function EventCard({ event }) {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>Fecha: {event.date}</p>
      <p>Estado: {event.status}</p>
    </div>
  );
}

export default EventCard;
