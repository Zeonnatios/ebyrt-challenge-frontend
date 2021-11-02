import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TasksContext from './TasksContext';

function TasksProvider({ children }) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [register, setRegister] = useState(
    {
      email: '',
      password: '',
      name: '',
      lastName: '',
    },
  );

  const context = {
    login,
    setLogin,
    register,
    setRegister,
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
