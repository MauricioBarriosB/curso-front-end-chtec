import { useState } from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Comprar víveres", content: "Leche, pan, huevos y café." },
    { id: 2, title: "Revisar emails", content: "Responder a los correos pendientes del trabajo." },
    { id: 3, title: "Hacer ejercicio", content: "30 minutos de cardio y 20 minutos de pesas." },
  ]);

  // Función para agregar una nueva nota
  const addNote = (title, content) => {
    const newNote = { id: Date.now(), title, content };
    setNotes([newNote, ...notes]);
  };

  // Función para eliminar una nota
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-5">
        <h1 className="text-center">📝 Aplicación de Notas</h1>
        <NoteForm addNote={addNote} />
        <NotesList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
};

export default App;
