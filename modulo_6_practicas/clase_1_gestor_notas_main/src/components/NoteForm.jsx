import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit} className="p-3 bg-secondary rounded">
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            placeholder="Contenido de la nota..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-light w-100">Agregar Nota</button>
      </form>
    </div>
  );
};

export default NoteForm;
