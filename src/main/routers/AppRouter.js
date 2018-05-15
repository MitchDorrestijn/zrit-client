/**
 * React related imports
 */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

/**
 * Self made components imports
 */
import LoginPage from '../container/LoginPage';
import ReadPage from '../container/ReadPage';
import CreatePage from '../container/CreatePage';
import UpdatePage from '../container/UpdatePage';
import ErrorPage from '../container/ErrorPage';

/**
 * Routes that the application knows
 */
const routes = {
  login: '/',
  readZorginstelling: '/read/zorginstelling',
  createZorginstelling: '/create/zorginstelling',
  updateZorginstelling: '/update/zorginstelling',
  error: '/error',
  readChauffeur: '/read/chauffeur',
  readClienten: '/read/client'
}

const AppRouter = () => {
  return (
		<BrowserRouter>
	    <Switch>
	      <Route exact path={routes.login} render={(props) => (<LoginPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readZorginstelling} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readChauffeur} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readClienten} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
	      <Route exact path={routes.createZorginstelling} render={(props) => (<CreatePage {...props} routes={routes}/>)} />
	      <Route exact path={`${routes.updateZorginstelling}/:id`} render={(props) => (<UpdatePage {...props}  routes={routes} />)}/>
        <Route exact path={`${routes.error}`} render={(props) => (<ErrorPage {...props} routes={routes}/>)}/>
	    </Switch>
  	</BrowserRouter>
	);
}

export default AppRouter;
