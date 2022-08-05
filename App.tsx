import React from 'react';
import {TasksContext} from './src/context/tasksContext';
import {Home} from './src/pages/home';

const App = () => {
  return (
    <TasksContext.Provider value={{id: 1, title: 'Task01'}}>
      <Home />
    </TasksContext.Provider>
  );
};

export default App;
