import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { TaskContext, TaskProviderWrapper } from '../context/task.context'
import TasksPage from './TasksPage'

// Mock del componente Header
vi.mock('../components/HeaderComponent', () => {
  return {
    __esModule: true,
    default: () => <></>
  }
})

describe('Tasks Page', () => {
  it("should render title as 'Tasks'", () => {
    const { getByTestId } = render(
      <TaskProviderWrapper>
        <TasksPage />
      </TaskProviderWrapper>
    )

    const tasksTitle = getByTestId('tasks-title');
    expect(tasksTitle.textContent).toBe('Tasks');
  });

  it("should find 'No se han podido obtener las tareas'", () => {
    const { getByTestId } = render(
      <TaskContext.Provider value={{
        tasks: [],
        getTasks: () => {},
        hasError: true,
        hasLoaded: false,
      }}> 
        <TasksPage />
      </TaskContext.Provider>
    )

    const errorMsg = getByTestId('error-msg');
    expect(errorMsg.textContent).toBe("No se han podido obtener las tareas");
  });

  it("should find 'Cargando tareas...'", () => {
    const { getByTestId } = render(
      <TaskContext.Provider value={{
        tasks: [],
        getTasks: () => {},
        hasError: false,
        hasLoaded: false,
      }}> 
        <TasksPage />
      </TaskContext.Provider>
    )

    const loadingMsg = getByTestId('loading-msg');
    expect(loadingMsg.textContent).toBe("Cargando tareas...");
  });

  it("should render task inputs with tasks loaded", async () => {
    render(
      <TaskContext.Provider value={{
        tasks: [
          {
            id: 1,
            title: "Comprar el pan",
            completed: false,
            description: "Comprar pan de molde y baguette",
          },
          {
            id: 2,
            title: "Hacer la compra",
            completed: false,
            description: "Comprar leche, huevos y pan",
          },
          {
            id: 3,
            title: "Lavar el coche",
            completed: false,
            description: "Lavar el coche en el lavadero",
          },
          {
            id: 4,
            title: "Estudiar React",
            completed: false,
            description: "Estudiar los hooks de React",
          },
          {
            id: 5,
            title: "Hacer ejercicio",
            completed: false,
            description: "Hacer 30 minutos de ejercicio en casa",
          },
        ],
        getTasks: () => {},
        hasError: false,
        hasLoaded: true,  
      }}> 
        <TasksPage />
      </TaskContext.Provider>
    )

    expect(await screen.findByDisplayValue('Comprar el pan')).toBeVisible();
    expect(await screen.findByDisplayValue('Hacer la compra')).toBeVisible();
  });
});
