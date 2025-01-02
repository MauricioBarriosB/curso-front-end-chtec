import React from "react";

function OptimizedEvent({ event, onClick }) {
  console.log(`Renderizando evento: ${event.title}`);
  return (
    <div onClick={() => onClick(event.id)} className="event-item">
      <h3>{event.title}</h3>
      <p>Fecha: {event.date}</p>
    </div>
  );
}

export default React.memo(OptimizedEvent);
