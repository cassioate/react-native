import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IProps {
  children: ReactElement;
}

interface ITask {
  id: string;
  title: string;
}

export interface ITasksContext {
  tasks: ITask[];
  addTask(newTask: string): void;
  removeTask(taskId: string): void;
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

const tasksData = '@MyTasks:Tasks';

export const TasksProvider: FunctionComponent<IProps> = ({children}) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const taskList = await AsyncStorage.getItem(tasksData);
    taskList ? setTasks(JSON.parse(taskList)) : setTasks(tasks);
  };

  const addTask = async (newTask: string): Promise<void> => {
    try {
      const data = {
        id: String(new Date().getTime()),
        title: newTask,
      };
      setTasks([...tasks, data]);
      await AsyncStorage.setItem(tasksData, JSON.stringify(tasks));
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const removeTask = async (taskId: string): Promise<void> => {
    try {
      const newArray = tasks.filter(filteredTask => filteredTask.id !== taskId);
      setTasks(newArray);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newArray));
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return (
    <TasksContext.Provider value={{tasks, addTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  );
};

// Criei esse hook apenas para utilizar caso sinta necessidade, mas acredito que usar o useContext direto no componente é melhor

// export const useTaskList = (): ITasksContext => {
//   const context = useContext(TasksContext);
//   if (!context) {
//     throw new Error('useTaskList must be used within a TasksProvider');
//   }

//   return context;
// };
