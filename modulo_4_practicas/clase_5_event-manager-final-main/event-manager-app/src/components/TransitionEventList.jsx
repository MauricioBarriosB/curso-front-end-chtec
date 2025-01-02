import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TransitionEventList() {
  // Lista de eventos
  const [events, setEvents] = useState([
    { id: 1, title: "Evento 1" },
    { id: 2, title: "Evento 2" },
  ]);

  // Añadir evento
  const addEvent = () => {
    const newEvent = {
      id: Math.random(),
      title: `Evento ${events.length + 1}`,
    };

    // Añadir evento a la lista
    setEvents([...events, newEvent]);
  };

  const removeEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <h3>Lista con Transiciones</h3>
      <button onClick={addEvent}>Añadir Evento</button>
      {/* Lista de eventos */}
      <TransitionGroup component="ul" className="event-list">
        {/* Eventos */}
        {events.map((event) => (
          // Transición de entrada y salida
          <CSSTransition key={event.id} timeout={300} classNames="event">
            <li className="event-item" onClick={() => removeEvent(event.id)}>
              {event.title}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TransitionEventList;
