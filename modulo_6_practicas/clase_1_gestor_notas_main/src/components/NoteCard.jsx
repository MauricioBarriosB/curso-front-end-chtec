const NoteCard = ({ note, deleteNote }) => {
  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-header d-flex justify-content-between">
        <span>{note.title}</span>
        <button className="btn btn-sm btn-danger" onClick={() => deleteNote(note.id)}>🗑</button>
      </div>
      <div className="card-body">
        <p className="card-text">{note.content}</p>
      </div>
    </div>
  );
};

export default NoteCard;
