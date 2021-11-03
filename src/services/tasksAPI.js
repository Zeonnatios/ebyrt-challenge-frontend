import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const getAllTasks = async () => {
  const result = await api.get('tasks')
    .then((response) => response.data)
    .catch((err) => err);
  return result;
};

export const createNewTask = async (body) => {
  await api.post('tasks/', body).catch((err) => err);
};

export const excludeTaskById = async (id) => {
  await api.delete(`tasks/${id}`).catch((err) => err);
};
