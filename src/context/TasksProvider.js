import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TasksContext from './TasksContext';
import * as tasksAPI from '../services/tasksAPI';

function TasksProvider({ children }) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({ email: '', password: '', name: '' });
  const [newTask, setNewTask] = useState({ task: '', description: '', status: '' });
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    const response = await tasksAPI.getAllTasks();
    setTasks(response);
  };

  const excludeTaskById = async (id) => {
    await tasksAPI.excludeTaskById(id);
    getAllTasks();
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const context = {
    login,
    setLogin,
    register,
    setRegister,
    newTask,
    setNewTask,
    tasks,
    setTasks,
    excludeTaskById,
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
