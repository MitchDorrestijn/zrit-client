import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginPage from '../container/LoginPage';
import TablePage from '../container/TablePage';
import AddPage from '../container/AddPage';
import UpdatePage from '../container/UpdatePage';

const AppRouter = () => {
  return (<BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/read/zorginstelling" component={TablePage} exact />
      <Route path="/create/zorginstelling/:id" component={AddPage} exact />
      <Route path="/update/zorginstelling/:id" component={UpdatePage} exact />
    </Switch>
  </BrowserRouter>);
}

export default AppRouter;
