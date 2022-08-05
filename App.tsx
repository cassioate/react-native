import React from 'react';
import {TasksProvider} from './src/context/tasksContext';
import {Home} from './src/pages/home';

const App = () => {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

export default App;
