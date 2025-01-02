import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

// Componente que muestra la lista de eventos
function SocketEventList() {
  // Obtenemos los eventos del contexto
  const { events } = useContext(SocketContext);

  return (
    <div className="event-list">
      {/*  Por cada evento, mostramos el título, la fecha y el estado */}
      {events.map((event, index) => (
        <div key={index} className="event-item">
          <h3>{event.title}</h3>
          <p>Fecha: {event.date}</p>
          <p>Estado: {event.status}</p>
        </div>
      ))}
    </div>
  );
}

export default SocketEventList;
