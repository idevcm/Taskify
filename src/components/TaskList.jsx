import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/task.context";
import "./TaskList.css";

function TaskList() {
  const {
    tasks,
    getTasks,
    updateTask,
    deleteTask,
    hasError,
  } = useContext(TaskContext);

  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

  const handleToggleComplete = (task) => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDelete = (id) => {
    deleteTask(id);
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditedTitle(task.title);
  };

  const handleSaveEdit = (task) => {
    if (!editedTitle.trim()) return;
    updateTask({ ...task, title: editedTitle });
    setEditingId(null);
    setEditedTitle("");
  };

  if (hasError) return <p>Hubo un error al cargar las tareas.</p>;
  if (!tasks.length) return <p>No hay tareas aún.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? "done" : ""}`}>
          {editingId === task.id ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSaveEdit(task)}
              onBlur={() => handleSaveEdit(task)}
              autoFocus
            />
          ) : (
            <span onClick={() => handleToggleComplete(task)}>{task.title}</span>
          )}

          <div className="buttons">
            <button onClick={() => handleToggleComplete(task)}>
              {task.completed ? "Desmarcar" : "Completar"}
            </button>
            <button onClick={() => handleEdit(task)}>Editar</button>
            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
