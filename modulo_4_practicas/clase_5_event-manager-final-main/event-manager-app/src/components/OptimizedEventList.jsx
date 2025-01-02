import { useState, useCallback } from "react";
import OptimizedEvent from "./OptimizedEvent";

function OptimizedEventList() {
  const [events, setEvents] = useState([
    { id: 1, title: "Evento 1", date: "2024-12-20" },
    { id: 2, title: "Evento 2", date: "2024-12-22" },
  ]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClick = useCallback((id) => {
    setSelectedEvent(id);
  }, []);

  const addEvent = () => {
    const newEvent = {
      id: Math.random(),
      title: `Evento ${events.length + 1}`,
      date: new Date().toLocaleDateString(),
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h3>Lista de Eventos Optimizada</h3>
      <button onClick={addEvent}>Añadir Evento</button>
      <div className="selected-event">
        {selectedEvent && <p>Evento seleccionado: {selectedEvent}</p>}
      </div>
      <div className="event-list">
        {events.map((event) => (
          <OptimizedEvent key={event.id} event={event} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default OptimizedEventList;
