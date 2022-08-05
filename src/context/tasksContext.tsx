import React, {FunctionComponent, ReactElement, useState} from 'react';

interface IProps {
  children: ReactElement;
}

interface Tasks {
  id: number;
  title: string;
}

export interface ITasksContext {
  tasks: Tasks[];
  addTask(newTask: string): void;
  removeTask(taskId: number): void;
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: FunctionComponent<IProps> = ({children}) => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const addTask = (newTask: string): void => {
    const data = {
      id: tasks.length + 1,
      title: newTask,
    };
    setTasks([...tasks, data]);
  };

  const removeTask = (taskId: number): void => {
    const newArray = tasks.filter(filteredTask => filteredTask.id !== taskId);
    setTasks(newArray);
  };

  return (
    <TasksContext.Provider value={{tasks, addTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  );
};
