import { useContext, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { TaskContext } from '../context/task.context';
import TaskCard from '../components/TasksCard'; 
import CreateTask from '../components/CreateTask';
import './TasksPage.css';

function TasksPage() {
  const { tasks, getTasks, hasLoaded, hasError } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
  }, []);

  const taskCards = tasks.map((task) => (
    <li key={task.id}>
      <TaskCard task={task} />
    </li>
  )); 

  return (
    <>
      <HeaderComponent />

      <section id="tasks-page">
        <h2 className="title" data-testid="tasks-title">Tasks</h2>
        <ul className="tasks-list">
          <li>
            <CreateTask />
          </li>

          {hasError ? (
            <li>
              <h2 className="error-message" data-testid="error-msg">No se han podido obtener las tareas</h2>
            </li>
          ) : !hasLoaded ? (
            <li>
              <h2 className="loading-message" data-testid="loading-msg">Cargando tareas...</h2>
            </li>
          ) : (
            taskCards
          )}
          
        </ul>
      </section>
    </>
  );
}

export default TasksPage;
