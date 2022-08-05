import React, {FunctionComponent, ReactElement} from 'react';

interface IProps {
  children: ReactElement;
}

export interface ITasksContext {
  id: number;
  title: string;
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: FunctionComponent<IProps> = ({children}) => {
  return (
    <TasksContext.Provider value={{id: 1, title: 'Task01'}}>
      {children}
    </TasksContext.Provider>
  );
};
