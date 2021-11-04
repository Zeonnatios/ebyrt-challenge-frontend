import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { TodoList } from './pages/index';

function routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ TodoList } />

    </BrowserRouter>
  );
}

export default routes;
