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
import AboutPage from '../container/AboutPage';

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
  createChauffeur: '/create/chauffeur',
  updateChauffeur: '/update/chauffeur',
  readClienten: '/read/client',
  readRideChauffeur: '/read/ride/chauffeur',
  readAllRides: '/read/ride/all',
  aboutPage: '/about',
  readRatings: '/read/ratings',
  createClient: '/create/client',
  updateClient: '/update/client',
  readRideClient: '/read/ride/client',
  createRit: '/create/rit',
  readBetalingen: '/read/betalingen',
  starterpage: '/read'
}

const AppRouter = () => {
  return (
		<BrowserRouter>
	    <Switch>
	      <Route exact path={routes.login} render={(props) => (<LoginPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readZorginstelling} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readChauffeur} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readClienten} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readRatings} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readAllRides} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readRideClient} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.readRideChauffeur} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.createZorginstelling} render={(props) => (<CreatePage {...props} routes={routes}/>)} />
        <Route exact path={routes.createRit} render={(props) => (<CreatePage {...props} routes={routes}/>)} />
        <Route exact path={routes.createChauffeur} render={(props) => (<CreatePage {...props} routes={routes}/>)} />
        <Route exact path={routes.createClient} render={(props) => (<CreatePage {...props} routes={routes}/>)} />
        <Route exact path={`${routes.updateZorginstelling}/:id`} render={(props) => (<UpdatePage {...props}  routes={routes} />)}/>
        <Route exact path={`${routes.updateClient}/:id`} render={(props) => (<UpdatePage {...props}  routes={routes} />)}/>
        <Route exact path={`${routes.updateChauffeur}/:id`} render={(props) => (<UpdatePage {...props}  routes={routes} />)}/>
        <Route exact path={`${routes.error}`} render={(props) => (<ErrorPage {...props} routes={routes}/>)}/>
        <Route exact path={routes.aboutPage} render={(props) => (<AboutPage {...props} routes={routes}/>)}/>
        <Route exact path={routes.readBetalingen} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
        <Route exact path={routes.starterpage} render={(props) => (<ReadPage {...props} routes={routes}/>)} />
      </Switch>
  	</BrowserRouter>
	);
}

export default AppRouter;
