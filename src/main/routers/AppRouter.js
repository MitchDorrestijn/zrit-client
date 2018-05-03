import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginPage from '../container/LoginPage';
import TablePage from '../container/TablePage';
import AddPage from '../container/AddPage';
import UpdatePage from '../container/UpdatePage';

const routes = {
	login: '/',
	readZorginstelling: '/read/zorginstelling',
	createZorginstelling: '/create/zorginstelling',
	updateZorginstelling: '/update/zorginstelling'
}

const AppRouter = () => {
  return (<BrowserRouter>
    <Switch>
      <Route exact path={routes.login} render={(props) => (
        <LoginPage {...props} routes={routes} />
      )}/>
      <Route exact path={routes.readZorginstelling} render={(props) => (
        <TablePage {...props} routes={routes} />
      )}/>
      <Route exact path={routes.createZorginstelling} render={(props) => (
        <AddPage {...props} routes={routes} />
      )}/>
      <Route exact path={routes.updateZorginstelling} render={(props) => (
        <UpdatePage {...props} routes={routes} />
      )}/>
    </Switch>
  </BrowserRouter>);
}

export default AppRouter;
