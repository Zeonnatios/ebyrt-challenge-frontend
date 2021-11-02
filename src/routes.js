import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import TodoList from './pages/TodoList';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/todoList" component={ TodoList } />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
