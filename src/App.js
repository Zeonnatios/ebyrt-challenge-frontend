import React from 'react';
import TasksProvider from './context/TasksProvider';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

function App() {
  return (
    <TasksProvider>
      <Routes />
    </TasksProvider>
  );
}

export default App;
