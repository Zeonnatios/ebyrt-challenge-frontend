import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
