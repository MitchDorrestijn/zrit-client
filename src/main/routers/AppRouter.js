import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginPage from '../container/LoginPage';
import TablePage from '../container/TablePage';
import AddPage from '../container/AddPage';
import UpdatePage from '../container/UpdatePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/read" component={TablePage} exact />
      <Route path="/create" component={AddPage} exact />
      <Route path="/update" component={UpdatePage} exact />
    </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
