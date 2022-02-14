import axios from 'axios';

const api = axios.create({
  baseURL: 'https://zeonnatios-tasks-backend.herokuapp.com/',
});

export const getAllTasks = async () => {
  const result = await api
    .get('tasks')
    .then((response) => response.data)
    .catch((err) => err);
  return result;
};

export const postTask = async (body) => {
  await api.post('tasks/', body).catch((err) => err);
};

export const updateTaskById = async (id, body) => {
  await api.put(`tasks/${id}`, body).catch((err) => err);
};

export const deleteTaskById = async (id) => {
  await api.delete(`tasks/${id}`).catch((err) => err);
};
