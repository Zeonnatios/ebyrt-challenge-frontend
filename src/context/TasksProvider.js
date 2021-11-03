import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TasksContext from './TasksContext';

function TasksProvider({ children }) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
  });
  const [newTask, setNewTask] = useState({
    task: '',
    description: '',
    status: '',
  });

  const context = {
    login,
    setLogin,
    register,
    setRegister,
    newTask,
    setNewTask,
  };

  return (
    <TasksContext.Provider value={ context }>
      { children }
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TasksProvider;
