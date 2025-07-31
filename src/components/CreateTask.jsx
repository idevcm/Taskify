import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/task.context';
import './CreateTask.css'; // Asegúrate de tener un archivo CSS para estilos

function CreateTask() {
  const { addTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");

  const handleInput = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(), // Genera un ID único con timestamp
      title: taskTitle,
      completed: false,
    };

    addTask(newTask);
    setTaskTitle("");
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-title"
        placeholder="Nueva tarea"
        value={taskTitle}
        onChange={handleInput}
      />
      <button type="submit" className="create-btn">Agregar tarea</button>
    </form>
  );
}

export default CreateTask;
