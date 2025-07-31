import React, { useContext } from 'react';
import { TaskContext } from '../context/task.context';
import './TasksCard.css'; 

function TasksCard({ task }) {
  const { updateTask, deleteTask } = useContext(TaskContext);

  const handleInput = (e) => {
    const updated = { ...task, title: e.target.value };
    updateTask(updated); 
  };

  const handleCheckbox = () => {
    const updated = { ...task, completed: !task.completed };
    updateTask(updated); 
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <article className="task-card">
      <input
        className="card-title"
        value={task.title}
        onChange={handleInput}
      />
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckbox}
      />
      <button onClick={handleDelete} className="delete-btn">Borrar</button>

    </article>
  );
}

export default TasksCard;
