import { useState } from "react";

function TransformableEvent({ event }) {
  // Estado para controlar el estado del evento
  const [status, setStatus] = useState(event.status);

  // Función para cambiar el estado del evento
  const toggleStatus = () => {
    setStatus((prevStatus) =>
      prevStatus === "Pendiente" ? "Completado" : "Pendiente"
    );
  };

  return (
    <div
      className={`event-item ${status === "Completado" ? "completed" : ""}`}
      onClick={toggleStatus}
    >
      <h3>{event.title}</h3>
      <p>Fecha: {event.date}</p>
      <p>Estado: {status}</p>
    </div>
  );
}

export default TransformableEvent;
