import { createContext, useEffect, useState } from 'react'
import { ICard, ITask } from '../core/task.constants.js';
import { tasks as data } from "../task.js";

const initialState: ICard = {
  tasks: [],
  createTask: () => {},
  deleteTask: () => {}
}

export const TaskContext = createContext(initialState)

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState<Array<ITask>>([]);
  
  function createTask(task: ITask) {
    setTask([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.description
    }])
  }

  function deleteTask(taskId: number) {
    setTask(tasks.filter(task => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data)
  }, [])

  return (
    <TaskContext.Provider value={{
      tasks, 
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}