import React, { createContext, useState } from "react";

const TaskContext = React.createContext();

function TaskProviderWrapper(props){
    const [tasks, setTasks] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const API_URL = "https://mp50379d9a58e841fa34.free.beeceptor.com";

    const getTasks = async () => {
        if(hasLoaded) return;

        try {
            console.log("Get Tasks");
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setTasks(data);
            setHasError(false);
        } catch (e) {
            console.error("Error fetching tasks:", e);
            setHasError(true);
            setTasks([]); // limpia tareas si hay error
        } finally {
            setHasLoaded(true);
        }
    };

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id !== updatedTask.id) return task;
            return updatedTask;
        });

        setTasks(updatedTasks);
    };

    const addTask = async (newTask) => {
        try {
            await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask),
            });
            setTasks([newTask, ...tasks]);
            setHasError(false);
        } catch (e) {
            console.error("Error adding task:", e);
            setHasError(true);
        }
    };

    const deleteTask = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
    setHasError(false);
  } catch (e) {
    console.error("Error deleting task:", e);
    setHasError(true);
  }
};


    return (
        <TaskContext.Provider value={{ tasks, setTasks, addTask, updateTask, getTasks, hasLoaded, hasError, deleteTask }}>
            {props.children}
        </TaskContext.Provider>
    );

    
}

export { TaskContext, TaskProviderWrapper };
