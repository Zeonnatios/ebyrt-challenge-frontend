import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { TodoList } from './pages/index';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ TodoList } />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
