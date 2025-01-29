export default function TaskList({ tasks, del, complete }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          // className="list-group-item d-flex justify-content-between align-items-center"
          className={`list-group-item d-flex justify-content-between align-items-center p-3 list-group-item list-group-item-action ${
            task.done ? "bg-success-subtle" : ""
          }`}
          onClick={() => complete(task.id)}
        >
          <span
            className={`${task.done ? "text-decoration-line-through" : ""}`}
          >
            {task.task}
          </span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => del(task.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}
