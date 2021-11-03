export const fetchAllTasks = () => {
  const endpoint = 'http://localhost:3000/tasks/';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data);
};

export const postTask = () => {
  const endpoint = 'http://localhost:3000/tasks/asd';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
