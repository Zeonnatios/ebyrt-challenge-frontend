import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TasksContext from './TasksContext';
import * as tasksAPI from '../services/tasksAPI';

function TasksProvider({ children }) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({ email: '', password: '', name: '' });
  const [newTask, setNewTask] = useState({ task: '', description: '', status: '' });
  const [tasks, setTasks] = useState([]);

  const sortAlphabetical = async () => {
    if (tasks.length === 0) return;
    const sortedTasks = await [...tasks].sort((a, b) => a.task.localeCompare(b.task));
    await setTasks(sortedTasks);
  };

  const sortByStatus = async () => {
    if (tasks.length === 0) return;
    const sortedTasks = await [...tasks].sort((a, b) => a.status.localeCompare(b.status));
    await setTasks(sortedTasks);
  };

  const parseDate = (date) => new Date(date);

  const sortByCreatedDate = async () => {
    if (tasks.length === 0) return;
    const sortedTasks = await [...tasks].sort((a, b) => (parseDate(a.createdDate)
    - parseDate(b.createdDate)));
    await setTasks(sortedTasks);
  };

  const getAllTasks = async () => {
    const response = await tasksAPI.getAllTasks();
    setTasks(response);
  };

  const createNewTask = async (body) => {
    await tasksAPI.createNewTask(body);
    getAllTasks();
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
    sortAlphabetical,
    sortByCreatedDate,
    sortByStatus,
    createNewTask,
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
