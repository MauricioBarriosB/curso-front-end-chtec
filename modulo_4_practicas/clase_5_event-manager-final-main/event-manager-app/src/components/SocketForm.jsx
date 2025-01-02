import { useState, useContext } from "react";
import { SocketContext } from "../context/SocketContext";

function SocketForm() {
  // Estado local para el título del evento
  const [title, setTitle] = useState("");
  // Obtener la función addEvent del contexto
  const { addEvent } = useContext(SocketContext);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un nuevo evento con el título, fecha actual y estado "Pendiente"
    const newEvent = { title, date: new Date().toLocaleString(), status: "Pendiente" };
    // Añadir el nuevo evento usando la función del contexto
    addEvent(newEvent);
    // Limpiar el formulario
    setTitle("");
  };

    return (
    <form onSubmit={handleSubmit}>
      {/* Campo de entrada para el título del evento */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nuevo evento"
      />
      {/* Botón para enviar el formulario */}
      <button type="submit">Añadir Evento</button>
    </form>
  );
}

export default SocketForm;
