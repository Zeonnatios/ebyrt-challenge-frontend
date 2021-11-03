import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Login, Register, TodoList } from './pages/index';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/tasks" component={ TodoList } />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
