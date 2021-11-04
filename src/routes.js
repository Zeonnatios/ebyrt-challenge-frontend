import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Tasks from './pages/Tasks';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Tasks } />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
