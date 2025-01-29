import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  completeTask,
  createTask,
  deleteTask,
  getTaskAll,
} from "./services/TaskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTaskAll();
      setTasks(data);
    };

    fetchData();
  }, [tasks]);

  const addTask = async (task) => {
    if (!task) {
      setError("Debes agregar una tarea");
      return;
    }

    await createTask({
      task: task,
      done: false,
      id: `${Math.random() * 10000 + 1}`,
    });

    setError("");
  };

  const del = async (id) => {
    await deleteTask(id);
  };

  const complete = async (id) => {
    const task = tasks.find((task) => task.id === id);

    await completeTask(id, !task.done);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Lista de Tareas</h1>
      {error && <p className="text-danger">{error}</p>}
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} del={del} complete={complete} />
    </div>
  );
}

export default App;
