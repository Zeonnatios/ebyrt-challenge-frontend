import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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

export const updateTaskById = async (id, body) => {
  await api.put(`tasks/${id}`, body).catch((err) => console.log({ err }));
};

export const excludeTaskById = async (id) => {
  await api.delete(`tasks/${id}`).catch((err) => err);
};
